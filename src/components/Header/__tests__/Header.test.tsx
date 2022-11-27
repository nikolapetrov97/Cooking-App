import { screen, cleanup } from "@testing-library/react";
import { render } from "../../../utils/testing-utils";
import Header from "../Header";

test("should render header component", () => {
  render(<Header />);
  const headerName = screen.getByText(/CookWell/i);
  expect(headerName).toBeInTheDocument();
});
