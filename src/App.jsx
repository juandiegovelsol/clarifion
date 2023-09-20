import { UpperBar } from "./components/UpperBar";
import { Title } from "./components/Title";
import { Titletext } from "./components/Titletext";
import { ProcessBar } from "./components/PorcessBar";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";

import "./App.scss";

function App() {
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
