import './App.css';
import Info from "./info.js";

function App() {
  return (
    <div className="App">
      <Info />
      <AddItems />
      <AddItems />
      <AddItems />
    </div>
  );
}



function AddItems() {
  return (
    <form>
      <label for="text-form">Type Something: </label>
      <input type="text" id="text-form" />
    </form>
  );
}

export default App;
