import { logDOM, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { X } from "./x";

describe("x test", () => {
  test("x", async () => {
    render(<X />);
    logDOM(screen.getByRole("button"));
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
