import * as React from "react";
import "./App.css";
import { getUserData } from "./reducers/userSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(getUserData());
  };

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={onClick}>
          hello world
        </button>
      </header>
    </div>
  );
}

export default App;
