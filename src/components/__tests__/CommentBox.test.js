import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";
import Root from "../../root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a textarea and a 2 buttons", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("The text area", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: {
        value: "new comment"
      }
    });
    // Re-render out component
    wrapped.update();
  });

  it("has a text area that users can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("When form is submitted, text area is cleared", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
