import React from "react";
import PageTitle from "./PageTitle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import emptyLikeImage from "../assets/util/emptylikes.jpg";

export default function Like() {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation("/home", { state: { username: "ping" } });
  };

  return (
    <div className="min-h-[852px] py-12 bg-normalbg dark:bg-darkbg font-primary">
      <div className="max-w-4xl mx-auto px-4">
        <PageTitle title="Your Liked Recipes" />
        <div className="text-center text-gray-600 dark:text-lighter flex flex-col items-center">
          <p className="max-w-[576px] px-2 mx-auto text-base mb-4">
            Your haven't liked any recipes. Continue browsing and find a recipe
            you like.
          </p>
          <img
            src={emptyLikeImage}
            alt="Empty liked recipes"
            className="max-w-[300px] mx-auto mb-6 dark:bg-light dark:rounded-md"
          />
          <button
            onClick={handleClick}
            className="py-2 px-4 bg-primary dark:bg-light text-white dark:text-black text-xl font=semibold rounded-sm flex justify-center items-center hover:bg-dark dark:hover:bg-lighter transition"
          >
            Back to Recipes
          </button>
        </div>
      </div>
    </div>
  );
}
