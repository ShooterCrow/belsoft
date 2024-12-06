import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { BrowserRouter } from "react-router-dom";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.100", "#FDF7FF")(props),
      color: mode("gray.800", "#000")(props),
    },
  }),
};

const config = {
  initialColorMode: "light", // Set to light mode
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles }); // Add styles for custom style override

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
