# Assignment-4:
## Talk is cheap, show me the code.

1) Is JSX mandatory for react?
ans:
- JSX is not mandatory for react.But it is recommended to use JSX(JavaScript syntax) as it is more easy and reabable way of writing the react components.It's more like a mix of HTML syntax and javascript logic.

- React.createElement is core react way of creating structure and appearance of UI components.


2) Is ES6 mandatory for react?
ans:
- ES6 is not mandatory for react, but is highly recommended and commonly used while developing react applications.React in itself is build using javascript features and syntax which are part of ES6 specifications and later versions.

- ES6 enabled several powerful features to javascript that significantly imroves the development experience.

- some of them are arrow functions, template literals, classes, destructuring assignment,spread syntax.

- It is worth noting that while working with react, we use Babel(Javascript compiler(or)transpiler) and parcel(bundler) which are build using ES6.


3) How can I write comments in JSX?
ans:
- As we incorporate the javascript logic in the JSX, the comments can be written by including it inside the curly braces, in which are ignored during  the transpilation process.{//}(single line),{/* */}(multiline).


4) What is `<React.Fragment></React.Fragment>` and `<></>`
ans:
- React provides us `<React.Fragment></React.Fragment>` to use it whenever we want more than one div conatiners to appear at root level.This `<React.Fragment></React.Fragment>` is ignored and not shown in the DOM after transpilation process.

- Another way of doing it is using `<></>`, kind of an empty tag.


5) What is virtual DOM?
ans:
- The Virtual DOM is an in-memory representation or copy of the actual DOM structure. It is a JavaScript object that reflects the structure and properties of the real DOM elements in your web page.When you make changes to your React components, instead of directly updating the real DOM, React updates the Virtual DOM first.

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

6) What is Reconciliation in React?
ans:
- It is the process of comparing the new copy of virtual DOM with the previous version to identify the changes or updation that are needed to be done to the actual DOM.It optimizes and improves the performance of the UI updates and reduces the actual DOM manipulations.(diffing).


7) What is React Fiber?
ans:
-Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM. 

- React Fiber is an internal algorithm and implementation detail of React that is responsible for handling the rendering, updating, and reconciliation of components in a React application. It is designed to improve the performance and responsiveness of UI updates.

- React fiber divides the work of rendering and updation process,by breaking the components into smaller, managable units.

- Dividing work: While making changes to the react components,react fiber breaks the work into smaller units known as "fiber".Each fiber is a part of the component tree, which can be worked on independently.


8) Why do we need keys in react?when do we need keys in react?
ans:
- In react, key props gives a unique id to elements in a collection while rendering it using `map()` or similar methods.Keys play a crucial role in efficently upadting the user interface.

- while rendering the list of elements, keys are used to identify the elements in the list.When list is updated,react uses a process called 'reconciliation' to identify the changes in the elements.This key helps in adding, updating, removing or reordering the elements efficiently.without keys react may re-render the entire list of elements which may reduce performance and can cause potential UI flickering.

- Keys help React identify when elements have been reordered in a list. When elements are reordered without keys, React may mistakenly assume that elements have been removed and new ones have been added, causing unnecessary re-renders.


9) Can we use index as keys in React?
ans:
- While it is possible to use the index as keys in React, it is generally not recommended, especially if the order of the items in the list can change.

- Using the index as keys may seem convenient, as it provides a unique identifier for each item in an array. However, it can lead to issues when the list is updated, reordered, or dynamically modified.


10) What are props in React?
ans:
- Props(Properties) are the dynamic data that are passed to the react functional component.Its similar like passing an argument to the function.By using props, you can customize the child component's behavior or appearance based on the data passed from the parent. This enables flexible and reusable components within your React application.


11) What is Config Driven UI?
ans:
- In a configuration-driven UI, the layout, styles, and other properties of UI elements are defined in a configuration file or database, which can be easily modified without requiring changes to the codebase.

- A config-driven UI, also known as a configuration-driven user interface, is an approach to building user interfaces where the behavior and appearance of the UI are determined by a configuration or set of configuration files, rather than hard-coding them in the application's codebase.

- The configuration files are kept separate from the application's codebase. This separation allows for easier management and modification of the UI without requiring code changes or recompilation.


