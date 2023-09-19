import { useState } from "react";
import { UpperBar } from "./components/UpperBar";
import { Title } from "./components/Title";
import { Titletext } from "./components/Titletext";
import { ProcessBar } from "./components/PorcessBar";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
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
        <Container />
        <Footer />
      </div>
    </>
  );
}

export default App;
