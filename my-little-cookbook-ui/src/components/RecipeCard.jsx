import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <Link
      to={`/recipes/${recipe.recipeId}`}
      state={{ recipe }}
      className="w-81 rounded-md mx-auto border border-gray-300 dark:border-gray-600 shadow-md overflow-hidden flex flex-col bg-white dark:bg-gray-800 hover:border-primary dark:hover:border-lighter hover:shadow-lg transition"
    >
      <div className="relative w-full h-72 border-b border-gray-300 dark:border-gray-600">
        <img
          src={recipe.imageUrl}
          alt={recipe.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <div className="relative h-24 p-4 flex flex-col font-primary">
        <h2 className="text-lg font-bold text-primary dark:text-light">{recipe.name}</h2>
        <p className="text-base text-gray-600 dark:text-lighter">{recipe.country}</p>
      </div>
    </Link>
  );
}
