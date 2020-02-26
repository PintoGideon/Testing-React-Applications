import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

// find returns all the instances of the comment box
