import React from "react";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Investiment from "./Components/Pages/Investiment/Investiment";
import Presentation from "./Components/Pages/Presentation/Presentation";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Investiment />
      <Presentation />
    </>
  );
};

export default App;
