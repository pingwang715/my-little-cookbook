package com.wangping.MyLittleCookbookSpringBoot.controller;

import com.wangping.MyLittleCookbookSpringBoot.dto.RecipeDto;
import com.wangping.MyLittleCookbookSpringBoot.entity.Recipe;
import com.wangping.MyLittleCookbookSpringBoot.repository.RecipeRepository;
import com.wangping.MyLittleCookbookSpringBoot.service.IRecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/recipes")
@RequiredArgsConstructor
public class RecipeController {

    private final IRecipeService iRecipeService;

    @GetMapping
    public List<RecipeDto> getRecipes() {
        List<RecipeDto> recipeList = iRecipeService.getRecipes();
        return recipeList;
    }
}
