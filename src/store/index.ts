import { applyMiddleware, createStore, compose, AnyAction } from "redux";
import { ApplicationState, rootReducer } from "../reducers";
import thunk, { ThunkDispatch } from "redux-thunk";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

let customCompose;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

if ((window as any).__REDUX_DEVTOOLS_EXTENSION__) {
  customCompose = compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__({ name: "cooking-app" })
  );
} else {
  customCompose = compose(applyMiddleware(thunk));
}

const store = createStore(rootReducer, customCompose);

export default store;

export type AppThunkDispatch = ThunkDispatch<ApplicationState, any, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;
