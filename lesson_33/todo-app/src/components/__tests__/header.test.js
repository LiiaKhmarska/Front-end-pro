import { describe, expect, jest } from "@jest/globals";
import { render, screen, getByText } from "@testing-library/react";
import { Header } from "../Header";

describe("Check Header ", () => {
  it("render correctly", () => {
    render(<Header />);
    const title = screen.getByRole("heading", { level: 5 });
    expect(title).toBeInTheDocument();
    expect(title.textContent).toContain("Testing");
  });
});
