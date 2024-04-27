import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { X } from "./x";

describe("x test", () => {
  test("x", async () => {
    render(<X />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
