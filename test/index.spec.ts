import { assert } from "chai";
import add from "../src";

describe("Test suite", () => {
  it("should pass", () => {
    const x = 1;
    const y = 2;
    assert.equal(x + y, add(x, y));
  });
});
