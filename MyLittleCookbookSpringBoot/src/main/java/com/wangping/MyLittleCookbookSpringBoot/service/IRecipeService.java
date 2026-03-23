package com.wangping.MyLittleCookbookSpringBoot.service;

import com.wangping.MyLittleCookbookSpringBoot.dto.CreateRecipeRequestDto;
import com.wangping.MyLittleCookbookSpringBoot.dto.RecipeDetailDto;
import com.wangping.MyLittleCookbookSpringBoot.dto.RecipeDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IRecipeService {

    List<RecipeDto> getRecipes();
    RecipeDetailDto getRecipeDetail(Long id);
    RecipeDetailDto createRecipe(CreateRecipeRequestDto createRecipeRequestDto, MultipartFile image);
}
