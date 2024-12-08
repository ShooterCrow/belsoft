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
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fontSizes = {
  // Navigation font sizes
  nav: { xs: '12px', sm: '14px', md: '16px', lg: '18px', xl: '24px' },
  
  // Body sizes
  body: { xs: '10px', sm: '12px', md: '14px', lg: '16px', xl: '18px', },
  
  // Heading
  heading: { xs: '16px', sm: '18px', md: '20px', lg: '24px', xl: '32px' }

};

const components = {
  Text: {
    variants: {
      navigation: {
        fontSize: ['12px', '14px', '16px', '18px', '24px'],
        fontWeight: 'medium',
      },
      body: {
        fontSize: ['12px', '14px', '16px', '18px', '24px'],
        fontWeight: 'regular',
      },
      heading: {
        fontSize: ['16px', '18px', '20px', '32px', '40px'],
        fontWeight: 'regular',
      },
    },
    baseStyle: {
      fontWeight: 'normal',
    },
  },
};

const theme = extendTheme({ 
  config, 
  styles,
  fontSizes,
  components,
}); 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);