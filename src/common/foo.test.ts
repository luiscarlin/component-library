import { someFunction } from "./foo";

describe("someFunction()", () => {
  it("return value", () => {
    expect(someFunction()).toBe("test");
  });
});