import React from "react";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { Box } from "@chakra-ui/react";
import "./index.css"

function App() {
  const lightPurple = "#9524FF"
  return (
    <Box>
      <NavBar primaryColorLight={lightPurple} />
      <HomePage />
    </Box>
  );
}

export default App;
