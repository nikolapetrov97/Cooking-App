import { Reducer, combineReducers } from "redux";
import { GlobalEventsState, globalEvents } from "./globalEvents.reducers";
import recipesReducers, { RecipesState } from "./recipes.reducers";

export interface ApplicationState {
  recipesInfo: RecipesState;
  globalEvents: GlobalEventsState;
}

export const rootReducer: Reducer<ApplicationState> =
  combineReducers<ApplicationState>({
    recipesInfo: recipesReducers,
    globalEvents: globalEvents,
  });

export default rootReducer;
