// src/App.tsx

import React from "react";
import AppRouter from "./router";
import Header from "./components/Layout/jsx/Header";
import Footer from "./components/Layout/jsx/Footer";

const App = () => {
  return (
    <>
    <h1>App Loaded</h1>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;
