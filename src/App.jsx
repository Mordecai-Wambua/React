import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";

const person = {
  name: "Rob",
  message: "Hi there!",
};

function App() {
  return (
    <div className="App">
      <Hello person={person} />
      <Fruits />
      <ConditionalComponent />
    </div>
  );
}

export default App;
