import React from "react";
import "./css/App.css";

// components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Footer></Footer>
    </div>
  );
}

export default App;
