export interface Recipe {
  id: number;
  title: string;
  timeToPrepare: string;
  ingredients: string[];
  preparationMethod: { step: number; text: string }[];
}

export interface Ingredient {
  id: number;
  name: string;
}

export interface RecipesResponse {
  recipes: Recipe[];
  ingredients: Ingredient[];
}
