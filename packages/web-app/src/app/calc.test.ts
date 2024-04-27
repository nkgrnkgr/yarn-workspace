import { sum } from "./calc";

describe("calc", () => {
  test("sum", () => {
    const actual = sum(1, 2);

    expect(actual).toBe(3);
  });
});
