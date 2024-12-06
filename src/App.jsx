import React from "react";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { Box } from "@chakra-ui/react";
import "./index.css"

function App() {
  const lightPurple = "#9524FF"
  return (
    <Box fontFamily={"Montserrat, poppins"}>
      <NavBar primaryColorLight={lightPurple} />
      <HomePage primaryColorLight={lightPurple} />
    </Box>
  );
}

export default App;
