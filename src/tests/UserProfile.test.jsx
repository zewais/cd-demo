import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import UserProfile from "../components/UserProfile";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

describe("UserProfile", () => {
  //functionMock is a mock function that will be used to mock the fetch function
  const functionMock = vi.fn();
  //beforeEach is a function that runs before each test case
  beforeEach(() => {
    //mocking the fetch function
    global.fetch = functionMock;
  });

  //afterEach is a function that runs after each test case
  afterEach(() => {
    //resetting all the mocks
    vi.resetAllMocks();
  });

  it("fetches and displays the user data for id = 1", async () => {
    //mocking the fetch response
    global.fetch.mockResolvedValueOnce({
      //mocking the json response
      json: functionMock.mockResolvedValue({
        id: 1,
        name: "Alice",
        email: "alice@email.com",
      }),
    });

    render(<UserProfile userId={1} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() => {
      //if you use getByText, it will throw an error if the text is not found
      //instead, use getByRole with the name option
      expect(
        screen.getByRole("heading", { name: /Alice/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("paragraph", { email: /alice@email.com/i })
      ).toBeInTheDocument();
    });
  });
});
