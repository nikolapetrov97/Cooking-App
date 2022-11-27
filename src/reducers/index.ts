import { Reducer, combineReducers } from "redux";
import recipesReducers, { RecipesState } from "./recipes.reducers";

export interface ApplicationState {
  recipesInfo: RecipesState;
}

export const rootReducer: Reducer<ApplicationState> =
  combineReducers<ApplicationState>({
    recipesInfo: recipesReducers,
  });

export default rootReducer;
