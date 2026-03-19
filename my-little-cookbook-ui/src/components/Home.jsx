import PageHeading from "./PageHeading";
import RecipeListings from "./RecipeListings";
import apiClient from "../api/apiClient";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const recipes = useLoaderData();
  return (
    <div className="max-w-[1152px] mx-auto px-6 py-8">
      <PageHeading title="Get Your Cooking Spoon Ready!">
        Explore new recipes for your next meal and dessert.
      </PageHeading>
      <RecipeListings recipes={recipes} />
    </div>
  )
}

export async function recipesLoader() {
  try {
    const response = await apiClient.get("/recipes");
    return response.data;
  } catch (error) {
    throw new Response(
      error.message || "Failed to fetch recipes. Please try again.",
      { status: error.status || 500}
    );
  }
}
