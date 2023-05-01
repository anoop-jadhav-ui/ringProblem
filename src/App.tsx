import { ChakraProvider } from "@chakra-ui/react";
import { Globals } from "@react-spring/three";
import "./App.css";
import { RingCanvas } from "./components/Ring/RingCanvas";

Globals.assign({
  frameLoop: "always",
});

function App() {
  return (
    <ChakraProvider>
      <RingCanvas />
    </ChakraProvider>
  );
}

export default App;
