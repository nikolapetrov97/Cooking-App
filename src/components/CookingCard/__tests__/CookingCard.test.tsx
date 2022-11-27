import { fireEvent, screen } from "@testing-library/react";
import { Recipe } from "../../../utils/interfaces";
import { render } from "../../../utils/testing-utils";
import CookingCard from "../CookingCard";

test("should render cooking card component", () => {
  const recipeMock: Recipe = {
    id: 1,
    ingredients: ["lime", "tomato", "cucumber"],
    preparationMethod: [{ step: 1, text: "Mix them all" }],
    timeToPrepare: "60min",
    title: "Salad",
  };
  render(<CookingCard recipe={recipeMock} />);
  const listItems = screen.getAllByRole("listitem");
  const cardHeader = screen.getByTestId("card-header");
  const modalButton = screen.getByTestId("modal-button");
  // Click recipe button to open the modal
  fireEvent.click(modalButton);
  const modal = screen.getByTestId("recipe-dialog");
  expect(modal).toHaveTextContent(recipeMock?.preparationMethod[0]?.text);
  expect(listItems.length).toEqual(3);
  expect(cardHeader).toHaveTextContent(recipeMock?.title);
});
