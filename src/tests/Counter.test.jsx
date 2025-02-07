import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Counter from "../components/Counter";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

describe("Counter", () => {
  it("renders a counter", async () => {
    render(<Counter />); // render the Counter component
    const button = screen.getByRole("button", { name: /increment/i }); // get the button element
    const counterValue = screen.getByTestId("counter-value"); // get the counter value element
    expect(counterValue).toHaveTextContent("0"); // check if the counter value is 0
    await userEvent.click(button); // click the button
    expect(counterValue).toHaveTextContent("1"); // check if the counter value is 1
  });
});
