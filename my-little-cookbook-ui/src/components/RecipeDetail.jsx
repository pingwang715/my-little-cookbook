import React, { useState, useEffect } from "react";
import {
  faHeartCirclePlus,
  faHeartCircleMinus,
  faArrowLeft,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { deleteRecipe, getRecipeDetail } from "../api/recipeService";
import ShareButtons from "../components/ShareButtons";
import { useLike } from "../store/like-context";
import { useNavigate } from "react-router-dom";

export default function RecipeDetail() {
  const params = useParams();
  const [recipe, setRecipe] = useState(null);
  const { addToLike, removeFromLike, isLiked } = useLike();
  const navigate = useNavigate();

  useEffect(() => {
    getRecipeDetail(params.recipeId).then((data) => setRecipe(data));
  }, [params.recipeId]);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center min-h-[852px]">
        <span className="text-4xl font-semibold text-primary dark:text-light">
          Loading...
        </span>
      </div>
    );
  }

  const toggleLike = () => {
    if (isLiked(recipe.recipeId)) {
      removeFromLike(recipe.recipeId);
    } else {
      addToLike(recipe);
    }
  };

  const handleDelete = async () => {
    const userConfirmed = window.confirm("Are you sure you want to delete this recipe?");
    if (!userConfirmed) return;

    try {
      await deleteRecipe(recipe.recipeId);
      navigate("/");
    } catch (error) {
        throw new Response(
        error.message || "Failed to delete your recipe. Please try again.",
        { status: error.status || 500 },
      );
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col font-primary px-6 py-6 bg-normalbg dark:bg-darkbg">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:space-x-8">
        <div>
          <Link
            to="/home"
            className="inline-flex items-center text-primary dark:text-light font-medium hover:text-dark dark:hover:text-lighter"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to All Recipes
          </Link>
        </div>
        <div
          className="w-full md:w-1/2 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg overflow-hidden bg-cover"
          style={{
            backgroundImage: `url(http://localhost:8080${recipe.imageUrl})`,
            backgroundSize: "cover",
          }}
        >
          <img
            src={`http://localhost:8080${recipe.imageUrl}`}
            alt={recipe.name}
            className="w-full h-full opacity-0"
          />
        </div>

        <div className="w-full md:2-1/2 flex flex-col space-y-6 mt-8 md:mt-0">
          <h1 className="text-3xl font-extrabold text-primary dark:text-light mb-4">
            {recipe.name}
          </h1>
          <p className="text-lg text-dark dark:text-lighter mb-4">
            {recipe.country} | {recipe.type}
          </p>
          <div className="flex gap-2">
            <p className="text-xl text-primary dark:text-light mb-4 hover:text-dark dark:hover:text-lighter">
              <FontAwesomeIcon
                icon={
                  isLiked(recipe.recipeId)
                    ? faHeartCircleMinus
                    : faHeartCirclePlus
                }
                onClick={toggleLike}
              />
            </p>

            <Link
              to={`/recipes/${recipe.recipeId}/edit`}
              className="text-xl text-primary dark:text-light mb-4 hover:text-dark dark:hover:text-lighter"
              >
              <FontAwesomeIcon icon={faPen} />
            </Link>

            <button
              onClick={() => handleDelete(recipe.recipeId)}
              className="text-xl text-primary dark:text-light mb-4 hover:text-dark dark:hover:text-lighter"
              >
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <ShareButtons></ShareButtons>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto pt-6 md:flex-row md:space-x-8 ">
        <h2 className="text-2xl font-bold text-primary dark:text-light pt-6 mb-4">
          Ingredients
        </h2>
        <ul className="text-primary dark:text-lighter">
          {recipe.ingredients.map((ing, index) => (
            <li key={index} className="py-1">
              {ing.quantity} {ing.unit} {ing.name}{" "}
              {ing.note && `(${ing.notes})`}
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-5xl pb-10 mx-auto md:flex-row md:space-x-8 ">
        <h2 className="text-2xl font-bold text-primary dark:text-light pt-6 mb-4">
          Instructions
        </h2>
        <ol className="text-primary dark:text-lighter">
          {recipe.instructions.map((step) => (
            <li key={step.stepNumber} className="py-2">
              {step.stepNumber}. {step.description}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
