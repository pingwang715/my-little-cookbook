import React from "react";

export default function RecipeCard({ recipe }) {
  return (
    <div className="w-81 rounded-md mx-auto border border-gray-300 shadow-md overflow-hidden flex flex-col bg-white hover:shadow-lg transition">
      <div className="relative w-full h-72 border-b border-gray-300">
        <img
          src={recipe.imageUrl}
          alt={recipe.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <div className="relative h-24 p-4 flex flex-col font-primary">
        <h2 className="text-lg font-bold">{recipe.name}</h2>
      </div>
    </div>
  );
}
