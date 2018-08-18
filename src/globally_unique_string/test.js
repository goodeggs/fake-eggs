// @flow
import _ from "lodash";
import { describe, it } from "mocha";
import { expect } from "goodeggs-test-helpers";

import fake from "..";
import globallyUniqueString from ".";

describe("globallyUniqueString", function() {
  it("monotonically increases the resulting string", function() {
    const fooCreator = globallyUniqueString(_.constant("foo"));
    expect(fooCreator()).to.equal("foo_0");
    expect(fooCreator()).to.equal("foo_1");
    expect(fooCreator()).to.equal("foo_2");
    expect(fooCreator()).to.equal("foo_3");
  });

  it("passes arguments through to the generator function", function() {
    const parrot = globallyUniqueString((arg: string) => arg);
    expect(parrot("a")).to.equal("a_0");
    expect(parrot("b")).to.equal("b_1");
    expect(parrot("c")).to.equal("c_2");
    expect(parrot("c")).to.equal("c_3");
  });
});
