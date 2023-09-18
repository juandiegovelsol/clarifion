import { useState } from "react";
import { UpperBar } from "./components/UpperBar";
import { Title } from "./components/Title";
/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import "./App.scss";

function App() {
  /* const [count, setCount] = useState(0); */

  return (
    <>
      <div className="app">
        <UpperBar />
        <Title />
      </div>
    </>
  );
}

export default App;
