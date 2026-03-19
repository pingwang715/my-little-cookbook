import React, { useState } from "react";
import {
  faHeartCirclePlus,
  faHeartCircleMinus,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, Link, useNavigate } from "react-router-dom";

export default function RecipeDetail() {
  const location = useLocation();
  const recipe = location.state?.recipe;
  const navigate = useNavigate();


  return (
    <div className="min-h-min w-full flex flex-col font-primary px-6 py-6 bg-normalbg dark:bg-darkbg items-start">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:space-x-8">
        <div>
          <Link to="/home" className="inline-flex items-center text-primary dark:text-light font-medium hover:text-dark dark:hover:text-lighter">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to All Recipes
          </Link>
        </div>
        <div
          className="w-full md:w-1/2 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg overflow-hidden bg-cover"
          style={{
            backgroundImage: `url(${recipe.imageUrl})`,
            backgroundSize: "cover",
          }}
        >
          <img src={recipe.imageUrl} alt={recipe.name} className="w-full h-full opacity-0"/>
        </div>

        <div className="w-full md:2-1/2 flex flex-col space-y-6 mt-8 md:mt-0">
          <h1 className="text-3xl font-extrabold text-primary dark:text-light mb-4">
            {recipe.name}
          </h1>
          <p className="text-lg text-dark dark:text-lighter mb-4">
            {recipe.country} | {recipe.type}
          </p>
          <p className="text-lg text-dark dark:text-lighter mb-4">
            <FontAwesomeIcon icon={faHeartCirclePlus} />
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:space-x-8 ">
        <h2 className="text-2xl font-bold text-primary dark:text-light pt-6 mb-4">
          Instructions
        </h2>


      </div>
    </div>
  );
}
