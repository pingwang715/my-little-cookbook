package com.wangping.MyLittleCookbookSpringBoot.service.impl;

import com.wangping.MyLittleCookbookSpringBoot.dto.RecipeDto;
import com.wangping.MyLittleCookbookSpringBoot.entity.Recipe;
import com.wangping.MyLittleCookbookSpringBoot.repository.RecipeRepository;
import com.wangping.MyLittleCookbookSpringBoot.service.IRecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

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
}
