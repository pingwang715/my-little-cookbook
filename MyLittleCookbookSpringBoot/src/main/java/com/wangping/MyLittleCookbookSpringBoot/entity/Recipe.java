package com.wangping.MyLittleCookbookSpringBoot.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "RECIPES")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "RECIPE_ID", nullable = false)
    private Long id;

    @Column(name = "NAME", nullable = false, length = 250)
    private String name;

    @Column(name = "IMAGE_URL", nullable = false, length = 250)
    private String imageUrl;

    @Column(name = "COUNTRY", nullable = false, length = 250)
    private String country;

    @Column(name = "TYPE", nullable = false, length = 250)
    private String type;

    @Column(name ="PREP_TIME", nullable = false, length = 250)
    private Integer prepTime;

    @Column(name = "COOK_TIME", nullable = false, length = 250)
    private Integer cookTime;

    @Column(name = "TOTAL_TIME", nullable = false, length = 250)
    private Integer totalTime;

    @Column(name = "SERVINGS", nullable = false, length = 250)
    private Integer servings;

    @CreationTimestamp
    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "CREATED_AT", nullable = false)
    private Instant createdAt;

    @Column(name = "CREATED_BY", nullable = false, length = 20)
    private String createdBy;

    @ColumnDefault("NULL")
    @Column(name = "UPDATED_AT")
    private Instant updatedAt;

    @ColumnDefault("NULL")
    @Column(name = "UPDATED_BY", length = 20)
    private String updatedBy;

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RecipeIngredient> recipeIngredients = new ArrayList<>();

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("stepNumber ASC")
    private List<Instruction> instructions = new ArrayList<>();

    // safe setters - mutate in place, never replace the reference
    public void setRecipeIngredients(List<RecipeIngredient> incoming) {
        this.recipeIngredients.clear();
        if (incoming != null) {
            this.recipeIngredients.addAll(incoming);
        }
    }

    public void setInstructions(List<Instruction> incoming) {
        this.instructions.clear();
        if (incoming != null) {
            this.instructions.addAll(incoming);
        }
    }
}
