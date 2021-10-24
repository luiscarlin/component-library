import { someFunction } from "./foo";

describe("someFunction()", () => {
  test("return value", () => {
    expect(someFunction()).toBe("test");
  });
});