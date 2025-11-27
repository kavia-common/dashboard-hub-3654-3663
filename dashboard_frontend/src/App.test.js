import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home welcome heading and grid", () => {
  render(<App />);
  const heading = screen.getByText(/Welcome back/i);
  expect(heading).toBeInTheDocument();
  const helper = screen.getByText(/Navigate your dashboard using the quick access cards below/i);
  expect(helper).toBeInTheDocument();
});
