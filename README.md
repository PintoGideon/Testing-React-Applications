<h1 align="center">
Testing in React
</h1>

Question:
What's the purpose of the code?

The JSDOM library is js implementation of how a browser works. We take our App component instance and render it at the div.

# Enzyme

The Enzyme API is divided into 3 parts.

1. Static
   Render the given component and return plain HTML

2. Shallow
   Render "just" the given component and none of it's children

   ```javascript
   import Foo from "../components/Foo";

   const wrapper = shallow(<MyComponent />);
   expect(wrapper.find(foo)).to.have.length(1);
   ```

   We render an instance of the MyComponent with the shallow renderer.

3. Full DOM
   Render the component and all of it's children + let us modify it afterwards.

   Full DOM rendering is ideal for use case where you have components that may interact with DOM APIs, or may require the full lifecycle in order to fully test the component.

### Integration Tests

Unit tests isolate one part of an application and test that.
Intergration tests test many parts of your application.

When we use Jest, we create a different environment that our browser. When our test runs, its references the jsdom api. When our app tries to use axios, we don't have the ability to make ajax requests.

Moxios library watches axios to make network requests and provides axios with the data.