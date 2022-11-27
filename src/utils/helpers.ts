import { Recipe } from "./interfaces";

export const filterRecipes = (allRecipes: Recipe[], ingredientFilters: string[]) => {
  // IF THERE IS NO INGREDIENT FILTERS RETURN ALL RECIPES
  if (ingredientFilters?.length === 0) {
    return allRecipes;
  }
  // IF THERE ARE APPLIED FILTERS CHECK IF ANY OF THE INGREDIENT FILTERS CAN BE FOUND IN EACH RECIPE
  return allRecipes?.filter((recipe) => {
    if (ingredientFilters?.some((ingredient) => recipe?.ingredients?.some((filter) => filter?.includes(ingredient)))) {
      return true;
    }
    return false;
  });
}