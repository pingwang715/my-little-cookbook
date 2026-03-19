package com.wangping.MyLittleCookbookSpringBoot.service.impl;

import com.wangping.MyLittleCookbookSpringBoot.dto.*;
import com.wangping.MyLittleCookbookSpringBoot.entity.Instruction;
import com.wangping.MyLittleCookbookSpringBoot.entity.Recipe;
import com.wangping.MyLittleCookbookSpringBoot.repository.RecipeRepository;
import com.wangping.MyLittleCookbookSpringBoot.service.IRecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RecipeServiceImpl implements IRecipeService {

    private final RecipeRepository recipeRepository;

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
