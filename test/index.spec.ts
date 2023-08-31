import { assert } from "chai";
import { add } from "../src";

describe("Test suite", () => {
  it("should pass", () => {
    const x = 1;
    const y = 2;
    const expected = x + y;
    assert.equal(add(x, y), expected);
  });
});
