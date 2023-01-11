import "./App.css";

function App() {
  // Rest Operator
  // used to store the rest of the remaining things
  function sayHello(...names) {
    console.log(`${names}`);
  }

  sayHello("a", "b", "c", "d", "e", "f", "g", "h", "i", "j");

  return <div className="App"></div>;
}

export default App;
