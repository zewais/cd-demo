import Greeting from "../components/Greeting";
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

// The test suite for the Greeting component
describe("Greeting", () => {
  // The test case for the default greeting
  it("renders a greeting", () => {
    render(<Greeting />);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });
  // The test case for the greeting with a name
  it("renders a greeting with a name", () => {
    render(<Greeting name="Alice" />);
    expect(screen.getByText("Hello, Alice")).toBeInTheDocument();
  });
});
