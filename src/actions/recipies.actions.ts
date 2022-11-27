import { RecipesResponse } from "../utils/interfaces";
import { recipesConstants } from "./constants";

export const getRecipiesInfo = () => {
  return async (dispatch: any) => {
    dispatch({
      type: recipesConstants.GET_RECIPIES_INFO_REQUEST,
    });
    fetch("https://mocki.io/v1/7a7dc599-ebda-4f84-94a4-40a30209a3bc", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((recipeResults: RecipesResponse) => {
        console.log(recipeResults);

        dispatch({
          type: recipesConstants.GET_RECIPIES_INFO_SUCCESS,
          payload: {
            recipes: recipeResults?.recipes,
            ingredients: recipeResults?.ingredients,
          },
        });
      });
  };
};

export const addFilterIngredient = (ingredientName: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: recipesConstants.ADD_FILTER_INGREDIENT,
      payload: ingredientName,
    });
  };
};

export const removeFilterIngredient = (ingredientName: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: recipesConstants.REMOVE_FILTER_INGREDIENT,
      payload: ingredientName,
    });
  };
};
