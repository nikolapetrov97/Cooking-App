import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

// test("renders learn react link", () => {
//   const initialState = { recipes: [], ingredients: [], ingredientFilters: [] };
//   const mockStore = configureStore();
//   const store = mockStore(initialState);
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// });

describe("With React Testing Library", () => {
  const initialState = { recipes: [], ingredients: [], ingredientFilters: [] };
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  let store;

  it("renders learn react link", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText(/CookWell/i);
    expect(linkElement).toBeInTheDocument();
  });
});
