import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";


function App(props) {
  return (
    <div className="App">
      <Navbar></Navbar>
      <About></About>
      <hr/>
    </div>
  );
}

export default App;
