import React from "react";
import { mount } from "enzyme";
import Root from "../root";
import moxios from "moxios";
import App from "../components/App";

beforeEach(() => {
  // Turn off requests from axios
  moxios.install();

  // watch for requests to this url
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetch #1" }, { name: "Fetch #2" }]
  });
});

afterEach(() => {
  // uninstalling moxios
  moxios.uninstall();
});

it("can fetch a list of comments and display them", () => {
  // Attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find(".fetch-comment").simulate("click");

  // Find the fetchcomments button and click it

  // introduce a Tiny little pause

  moxios.wait(() => {
    wrapped.update();
    // Expect to find a list of comments
    expect(wrapped.find("li").length).toEqual(2);
    wrapped.unmount();
  }, 100);
});
