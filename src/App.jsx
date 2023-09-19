import { useState } from "react";
import { UpperBar } from "./components/UpperBar";
import { Title } from "./components/Title";
import { Titletext } from "./components/Titletext";
import { ProcessBar } from "./components/PorcessBar";
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
        <Titletext />
        <ProcessBar />
      </div>
    </>
  );
}

export default App;
