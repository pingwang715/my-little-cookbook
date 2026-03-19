package com.wangping.MyLittleCookbookSpringBoot.repository;

import com.wangping.MyLittleCookbookSpringBoot.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
}
