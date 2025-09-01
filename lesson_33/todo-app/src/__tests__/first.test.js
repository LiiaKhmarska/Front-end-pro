import { describe, expect } from "@jest/globals";

function sum(a, b) {
  return a + b;
}

describe("sum", () => {
  it("test1", () => {
    const res = sum(2, 3);
    expect(res).toBe(5);
  });
});
