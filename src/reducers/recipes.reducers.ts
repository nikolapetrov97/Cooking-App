/* eslint-disable import/no-anonymous-default-export */
import { recipesConstants } from "../actions/constants";
import { Ingredient, Recipe } from "../utils/interfaces";

export interface RecipesState {
  recipes: Recipe[];
  ingredients: Ingredient[];
  ingredientFilters: string[];
}

export const initState: RecipesState = {
  recipes: [],
  ingredients: [],
  ingredientFilters: [],
};

export default (state = initState, action: any) => {
  switch (action.type) {
    case recipesConstants.GET_RECIPIES_INFO_REQUEST:
      state = {
        ...state,
      };
      break;
    case recipesConstants.GET_RECIPIES_INFO_SUCCESS:
      state = {
        ...state,
        ...action.payload,
      };
      break;
    case recipesConstants.ADD_FILTER_INGREDIENT:
      state = {
        ...state,
        ingredientFilters: [...state.ingredientFilters, action.payload],
      };
      break;
    case recipesConstants.REMOVE_FILTER_INGREDIENT:
      state = {
        ...state,
        ingredientFilters: state?.ingredientFilters?.filter(
          (filter) => filter !== action.payload
        ),
      };
      break;
  }

  return state;
};
