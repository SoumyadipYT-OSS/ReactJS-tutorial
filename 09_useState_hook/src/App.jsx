/*
  React hook = Special function that allows you to use React features in functional components

  useState = React hook that allows you to manage state in functional components
*/

import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";

function App() {

  return (
    <>
      <MyComponent />
      <h3>Counter</h3>
      <Counter />
    </>
  );
}

export default App;
