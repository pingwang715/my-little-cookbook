package com.wangping.MyLittleCookbookSpringBoot.service;

import com.wangping.MyLittleCookbookSpringBoot.dto.RecipeDto;

import java.util.List;

public interface IRecipeService {

    List<RecipeDto> getRecipes();
}
