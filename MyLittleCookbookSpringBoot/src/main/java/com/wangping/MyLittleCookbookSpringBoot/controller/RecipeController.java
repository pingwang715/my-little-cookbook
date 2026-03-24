package com.wangping.MyLittleCookbookSpringBoot.controller;

import com.wangping.MyLittleCookbookSpringBoot.dto.CreateRecipeRequestDto;
import com.wangping.MyLittleCookbookSpringBoot.dto.RecipeDetailDto;
import com.wangping.MyLittleCookbookSpringBoot.dto.RecipeDto;
import com.wangping.MyLittleCookbookSpringBoot.dto.UpdateRecipeRequestDto;
import com.wangping.MyLittleCookbookSpringBoot.service.IRecipeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

    @PatchMapping(value = "/{id}/edit", consumes = "multipart/form-data")
    public ResponseEntity<RecipeDetailDto> updateRecipe(
            @PathVariable Long id,
            @RequestPart("recipe") UpdateRecipeRequestDto updateRecipeRequestDto,
            @RequestPart(value = "image", required = false)  MultipartFile image) {

        RecipeDetailDto recipe = iRecipeService.updateRecipe(id, updateRecipeRequestDto, image);
        System.out.println(recipe);
        return ResponseEntity.ok(recipe);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRecipe(@PathVariable Long id) {
        iRecipeService.deleteRecipe(id);
        return ResponseEntity.ok().build();
    }
}
