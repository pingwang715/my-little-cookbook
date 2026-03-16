import PageHeading from "./PageHeading";
import RecipeListings from "./RecipeListings";
import recipes from "../data/recipes"

export default function Home() {
  return (
    <div>
      <PageHeading title="Find inspirations for the next meal!">
        Save recipes in my little cookbook. Perfect for any occasion.
      </PageHeading>
      <RecipeListings recipes={recipes} />
    </div>
  );
}
