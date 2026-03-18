import PageHeading from "./PageHeading";
import RecipeListings from "./RecipeListings";
import apiClient from "../api/apiClient";
import { useState, useEffect } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await apiClient.get("/recipes"); // Axios GET request
      setRecipes(response.data); // Update recipes state with fetched data
    } catch (error) {
      setError(
        error.response?.data?.message || "Failed to fetch recipes. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl font-semibold text-primary dark:text-light">Loading recipes...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl font-semibold text-primary dark:text-light">Error: {error}</span>
      </div>
    );
  }

  return (
    <div>
      <PageHeading title="Find inspirations for the next meal!">
        Save recipes in my little cookbook. Perfect for any occasion.
      </PageHeading>
      <RecipeListings recipes={recipes} />
    </div>
  );
}
