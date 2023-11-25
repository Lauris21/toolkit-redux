import { useDispatch, useSelector } from "react-redux";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import {
  increment,
  decrement,
  incrementBy,
} from "./store/slices/counter/counterSlice";

import "./App.css";
import { useState } from "react";

function App() {
  const { counter } = useSelector((state) => state.counter); // Para seleccionar algo del store
  const dispatch = useDispatch(); // Traemos el dispatch

  const [inputValue, setInputValue] = useState(0);
  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div className="card">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="card">
        <button onClick={() => dispatch(incrementBy(inputValue))}>
          Increment by ...
        </button>
      </div>
    </>
  );
}

export default App;
