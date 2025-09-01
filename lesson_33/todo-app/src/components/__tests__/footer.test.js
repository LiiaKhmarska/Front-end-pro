import { describe, expect, jest } from "@jest/globals";
import { render, screen, getByTestId } from "@testing-library/react";
import { Footer } from "../Footer";

describe("Check Footer ", () => {
  it("render email in footer correctly", () => {
    render(<Footer />);
    const email = screen.getByTestId("footer-email");
    expect(email).toBeInTheDocument();
    expect(email.textContent).toContain("email");
  });

  it("render date in footer correctly", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    const date = screen.getByTestId("footer-date");
    expect(date).toBeInTheDocument();
    expect(date.textContent).toContain(year);
  });
});
