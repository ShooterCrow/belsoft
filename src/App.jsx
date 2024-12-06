import React from "react";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { Box } from "@chakra-ui/react";
import "./index.css"

function App() {
  const lightPurple = "#9524FF"
  const baseWhite = "#FDF7FF"
  return (
    <Box fontFamily={"Montserrat, poppins"}>
      <NavBar primaryColorLight={lightPurple} />
      <HomePage baseWhite={baseWhite} primaryColorLight={lightPurple} />
    </Box>
  );
}

export default App;
