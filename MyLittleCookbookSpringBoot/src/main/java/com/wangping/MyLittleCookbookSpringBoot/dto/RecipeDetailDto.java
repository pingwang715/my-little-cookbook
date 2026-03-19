package com.wangping.MyLittleCookbookSpringBoot.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class RecipeDetailDto {
    private Long recipeId;
    private String name;
    private String imageUrl;
    private String country;
    private String type;
    private List<InstructionDto> instructions;
    private List<RecipeIngredientDto> ingredients;
}