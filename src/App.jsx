import React from "react";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Layout>
        <NavBar />
        <HomePage />
      </Layout>
    </>
  );
}

export default App;
