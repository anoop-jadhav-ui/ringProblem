import { Globals } from "@react-spring/three";
import "./App.css";
import { RingCanvas } from "./components/Ring/RingCanvas";
// import { Portfolio } from "./components/Portfolio/Portfolio";
// import { PortfolioTransformed } from "./components/PortfolioTransformed/PortfolioTransformed";

Globals.assign({
  frameLoop: "always",
});

function App() {
  return <RingCanvas />;
}

export default App;
