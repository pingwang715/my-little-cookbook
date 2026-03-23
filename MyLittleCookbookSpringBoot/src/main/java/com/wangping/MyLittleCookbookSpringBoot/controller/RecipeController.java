package com.wangping.MyLittleCookbookSpringBoot.controller;

import com.wangping.MyLittleCookbookSpringBoot.dto.CreateRecipeRequestDto;
import com.wangping.MyLittleCookbookSpringBoot.dto.RecipeDetailDto;
import com.wangping.MyLittleCookbookSpringBoot.dto.RecipeDto;
import com.wangping.MyLittleCookbookSpringBoot.service.IRecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.attribute.UserPrincipalLookupService;
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

    @GetMapping("/{id}")
    public RecipeDetailDto getRecipe(@PathVariable Long id) {
        return iRecipeService.getRecipeDetail(id);
    }

    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<RecipeDetailDto> createRecipe(
            @RequestPart("recipe") CreateRecipeRequestDto createRecipeRequestDto,
            @RequestPart("image") MultipartFile image
            ) {

        RecipeDetailDto recipe = iRecipeService.createRecipe(createRecipeRequestDto, image);
        System.out.println(recipe);
        return ResponseEntity.ok(recipe);
    }
}
