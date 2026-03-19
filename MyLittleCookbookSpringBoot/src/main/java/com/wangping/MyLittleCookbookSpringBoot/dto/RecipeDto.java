package com.wangping.MyLittleCookbookSpringBoot.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecipeDto {
    private Long recipeId;
    private String name;
    private String imageUrl;
    private String country;
    private String type;

}
