import React, { useState, useMemo } from "react";
import RecipeCard from "./RecipeCard";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";

const filterList = ["All", "Meal", "Dessert"];

export default function RecipeListings({ recipes }) {
  const [searchText, setSearchText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const filteredAndSortedRecipes = useMemo(() => {
    if (!Array.isArray(recipes)) {
      return [];
    }

    let filteredRecipes = recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return filteredRecipes.filter(
      (filteredRecipe) => {
        if (selectedFilter === "" || selectedFilter === "All") return true;
        return filteredRecipe.type.toLowerCase().includes(selectedFilter.toLowerCase())
      }
    );
  }, [recipes, searchText, selectedFilter]);

  function handleSearchChange(inputSearch) {
    setSearchText(inputSearch);
  }

  function handleFilterChange(filterType) {
    setSelectedFilter(filterType);
  }
  return (
    <div className="max-w-[1152px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
        <SearchBox
          label="Search"
          placeholder="Search recipes..."
          value={searchText}
          handleSearch={(value) => handleSearchChange(value)}
        />

        <Dropdown
          label="Filter by"
          options={filterList}
          value={selectedFilter}
          handleFilter={(value) => handleFilterChange(value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 py-12">
        {filteredAndSortedRecipes.length > 0 ? (
          filteredAndSortedRecipes.map((recipe) => (
            <RecipeCard key={recipe.recipeId} recipe={recipe} />
          ))
        ) : (
          <p className="text-center font-primary font-bold text-lg text-primary dark:text-light">
            No recipes found
          </p>
        )}
      </div>
    </div>
  );
}
