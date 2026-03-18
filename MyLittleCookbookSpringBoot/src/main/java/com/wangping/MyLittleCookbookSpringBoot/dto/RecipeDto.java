package com.wangping.MyLittleCookbookSpringBoot.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
public class RecipeDto {

    private Long recipeId;
    private String name;
    private String imageUrl;
    private String country;
    private String type;
    private Instant createdAt;
}
