package com.wangping.MyLittleCookbookSpringBoot.service.impl;

import com.wangping.MyLittleCookbookSpringBoot.dto.*;
import com.wangping.MyLittleCookbookSpringBoot.entity.Ingredient;
import com.wangping.MyLittleCookbookSpringBoot.entity.Instruction;
import com.wangping.MyLittleCookbookSpringBoot.entity.Recipe;
import com.wangping.MyLittleCookbookSpringBoot.entity.RecipeIngredient;
import com.wangping.MyLittleCookbookSpringBoot.repository.IngredientRepository;
import com.wangping.MyLittleCookbookSpringBoot.repository.RecipeRepository;
import com.wangping.MyLittleCookbookSpringBoot.service.IRecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.Instant;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RecipeServiceImpl implements IRecipeService {

    private final RecipeRepository recipeRepository;
    private final ImageServiceImpl imageServiceImpl;
    private final IngredientRepository ingredientRepository;

    @Override
    public List<RecipeDto> getRecipes() {
        return recipeRepository.findAll().stream().map(this::transformToDTO).collect(Collectors.toList());
    }

    private RecipeDto transformToDTO(Recipe recipe) {
        RecipeDto recipeDto = new RecipeDto();
        BeanUtils.copyProperties(recipe, recipeDto);
        recipeDto.setRecipeId(recipe.getId());
        return recipeDto;
    }


    @Override
    public RecipeDetailDto getRecipeDetail(Long id) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow(() -> new RuntimeException("Recipe " + id));

        return transformToDetailDTO(recipe);
    }

    @Override
    public RecipeDetailDto createRecipe(CreateRecipeRequestDto createRecipeRequestDto, MultipartFile image) {

        String imageUrl = imageServiceImpl.saveImage(image);

        Recipe recipe = new Recipe();
        recipe.setName(createRecipeRequestDto.getName());
        recipe.setCountry(createRecipeRequestDto.getCountry());
        recipe.setType(createRecipeRequestDto.getType());
        recipe.setImageUrl(imageUrl);

        // ingredients
        List<RecipeIngredient> recipeIngredients = createRecipeRequestDto.getIngredients()
                .stream()
                .map(dto -> {
                    RecipeIngredient recipeIngredient = new RecipeIngredient();

                    Ingredient ingredient = ingredientRepository.findByName(dto.getName())
                                    .orElseGet(() -> {
                                        Ingredient newIngredient = new Ingredient();
                                        newIngredient.setName(dto.getName());
                                        return ingredientRepository.save(newIngredient);
                                    });

                    recipeIngredient.setIngredient(ingredient);
                    recipeIngredient.setQuantity(dto.getQuantity());
                    recipeIngredient.setUnit(dto.getUnit());
                    recipeIngredient.setNotes(dto.getNotes());
                    recipeIngredient.setRecipe(recipe);

                    return recipeIngredient;
                }).collect(Collectors.toList());
        recipe.setRecipeIngredients(recipeIngredients);

        // instructions
        List<Instruction> instructions = createRecipeRequestDto.getInstructions()
                .stream()
                .map(dto -> {
                    Instruction instruction = new Instruction();
                    instruction.setStepNumber(dto.getStepNumber());
                    instruction.setDescription(dto.getDescription());
                    instruction.setRecipe(recipe);

                    return instruction;
                }).collect(Collectors.toList());
        recipe.setInstructions(instructions);

        recipe.setCreatedAt(Instant.now());
        recipe.setCreatedBy("admin");
        Recipe savedRecipe = recipeRepository.save(recipe);
        return transformToDetailDTO(savedRecipe);
    }

    @Override
    public RecipeDetailDto updateRecipe(Long id, UpdateRecipeRequestDto updateRecipeRequestDto, MultipartFile image) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow(() -> new RuntimeException("Recipe not found:" + id));

        // Only update fields that are provided
        if (updateRecipeRequestDto.getName() != null) {
            recipe.setName(updateRecipeRequestDto.getName());
        }
        if (updateRecipeRequestDto.getCountry() != null) {
            recipe.setCountry(updateRecipeRequestDto.getCountry());
        }
        if (updateRecipeRequestDto.getType() != null) {
            recipe.setType(updateRecipeRequestDto.getType());
        }
        if (updateRecipeRequestDto.getIngredients() != null) {
            recipe.getRecipeIngredients().clear();

            List<RecipeIngredient> recipeIngredients = updateRecipeRequestDto.getIngredients()
                    .stream()
                    .map(dto -> {
                        RecipeIngredient recipeIngredient = new RecipeIngredient();
                        Ingredient ingredient = ingredientRepository.findByName(dto.getName())
                                .orElseGet(() -> {
                                    Ingredient newIngredient = new Ingredient();
                                    newIngredient.setName(dto.getName());
                                    return ingredientRepository.save(newIngredient);
                                });

                        recipeIngredient.setIngredient(ingredient);
                        recipeIngredient.setQuantity(dto.getQuantity());
                        recipeIngredient.setUnit(dto.getUnit());
                        recipeIngredient.setNotes(dto.getNotes());
                        recipeIngredient.setRecipe(recipe);

                        return recipeIngredient;
                    }).collect(Collectors.toList());
            recipe.setRecipeIngredients(recipeIngredients);
        }

        if (updateRecipeRequestDto.getInstructions() != null) {
            recipe.getInstructions().clear();

            List<Instruction> instructions = updateRecipeRequestDto.getInstructions()
                    .stream()
                    .map(dto -> {
                        Instruction instruction = new Instruction();
                        instruction.setStepNumber(dto.getStepNumber());
                        instruction.setDescription(dto.getDescription());
                        instruction.setRecipe(recipe);
                        return instruction;
                    }).collect(Collectors.toList());
            recipe.setInstructions(instructions);
        }

        if (image != null && !image.isEmpty()) {
            recipe.setImageUrl(imageServiceImpl.saveImage(image));
        }
        recipe.setUpdatedAt(Instant.now());
        recipe.setUpdatedBy("admin");
        Recipe savedRecipe = recipeRepository.save(recipe);
        return transformToDetailDTO(savedRecipe);
    }

    @Override
    public void deleteRecipe(Long id) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow(() -> new RuntimeException("Recipe not found:" + id));
        recipeRepository.delete(recipe);
    }

    private RecipeDetailDto transformToDetailDTO(Recipe recipe) {
        RecipeDetailDto recipeDetailDto = new RecipeDetailDto();
        BeanUtils.copyProperties(recipe, recipeDetailDto);
        recipeDetailDto.setRecipeId(recipe.getId());

        // ingredients
        List<RecipeIngredientDto> ingredients = recipe.getRecipeIngredients()
                .stream()
                .map(ri -> {
                    RecipeIngredientDto recipeIngredientDto = new RecipeIngredientDto();
                    recipeIngredientDto.setName(ri.getIngredient().getName());
                    recipeIngredientDto.setQuantity(ri.getQuantity());
                    recipeIngredientDto.setUnit(ri.getUnit());
                    recipeIngredientDto.setNotes(ri.getNotes());
                    return recipeIngredientDto;
                })
                .collect(Collectors.toList());

        recipeDetailDto.setIngredients(ingredients);

        // instructions
        List<InstructionDto> instructions = recipe.getInstructions()
                .stream().sorted(Comparator.comparing(Instruction::getStepNumber))
                .map(i -> {
                    InstructionDto instructionDto = new InstructionDto();
                    instructionDto.setStepNumber(i.getStepNumber());
                    instructionDto.setDescription(i.getDescription());
                    return instructionDto;
                })
                .collect(Collectors.toList());
        recipeDetailDto.setInstructions(instructions);

        return recipeDetailDto;
    }
}
