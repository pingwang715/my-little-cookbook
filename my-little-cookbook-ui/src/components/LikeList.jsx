import React from "react";
import { useLike } from "../store/like-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function LikeList() {
  const { like, removeFromLike } = useLike();

  return (
    <div className="min-h-80 max-w-4xl mx-auto my-8 w-full font-primary">
      <table className="w-full">
        <thead>
          <tr className="uppercase text-sm text-primary dark:text-light border-b border-primary dark:border-light">
            <th className="px-6 py-4">Recipe</th>
            <th className="px-6 py-4">Remove</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-primary dark:divide-light">
          {like.map((item) => (
            <tr
              key={item.recipeId}
              className="text-sm sm:text-base text-primary dark:text-light text-center"
            >
              <td className="px-4 sm:px-6 py-4 flex items-center">
                <Link
                  to={`/recipes/${item.recipeId}`}
                  state={{ recipe: item }}
                  className="flex items-center"
                >
                  <img
                    src={`http://localhost:8080${item.imageUrl}`}
                    alt={item.name}
                    className="w-16 h-16 rounded-b-md object-cover mr-4 hover:scale-110 transition-transform"
                  />
                  <span className="text-primary dark:text-light hover:underline">
                    {item.name}
                  </span>
                </Link>
              </td>
              <td className="px-4 sm:px-6 py-4">
                <button
                  aria-label="delete-recipe"
                  onClick={() => removeFromLike(item.recipeId)}
                  className="text-primary dark:text-light border border-primary dark:border-light p-2 rounded hover:bg-lighter dark:hover:bg-gray-700"
                >
                  <FontAwesomeIcon icon={faHeartCircleMinus} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
