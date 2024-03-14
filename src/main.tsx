import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";
import "./il18n";
import { buttonTheme } from "./components/infra/buttons.ts";
import { sliderTheme } from "./components/infra/ReSlider.tsx";
const theme = extendTheme({
  components: { Button: { ...buttonTheme }, Slider: sliderTheme },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>,
);
