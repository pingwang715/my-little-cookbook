package com.wangping.MyLittleCookbookSpringBoot.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class UpdateRecipeRequestDto {

    private String name;
    private String country;
    private String type;
    private Integer prepTime;
    private Integer cookTime;
    private Integer totalTime;
    private Integer servings;

    private List<RecipeIngredientDto> ingredients;
    private List<InstructionDto> instructions;
}
