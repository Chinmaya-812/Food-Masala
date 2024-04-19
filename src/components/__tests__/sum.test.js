import { Sum } from "../Sum";

test("Check Sum of 2 Numbers", () => {
  expect(Sum(2, 5)).toBe(7);
  expect(Sum(2, 5)).not.toBe(56)

});
