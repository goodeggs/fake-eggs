// @flow
import _ from "lodash";
import { describe, it } from "mocha";
import { expect } from "goodeggs-test-helpers";

import integer from "../integer";
import string, { removeDoubleSpace } from ".";

const removeDuplicates = (str: string): Array<string> => _.uniq(str.split(""));

describe("string", function() {
  it("generates a random string", function() {
    expect(string()).to.be.an("string");
  });

  it("generates a random string with legth passed-in", function() {
    const length = integer(1);

    expect(string(length).length).to.be.equal(length);
  });

  it("generates a random string with charset passed-in", function() {
    const charset = Math.random().toString(36); // generate a random charset
    const length = integer(100);
    const chars = removeDuplicates(string(length, charset));
    const charsetChars = removeDuplicates(charset);

    expect(chars)
      .to.be.an.instanceOf(Array)
      .that.has.an.lengthOf(charsetChars.length)
      .that.has.members(charsetChars);
  });

  it("generates a random without double space and right side space", function() {
    const charset = "a      bc ";
    const generatedString = string(integer(100), charset);

    expect(generatedString.length).to.be.equal(
      removeDoubleSpace(generatedString).length
    );
  });
});
