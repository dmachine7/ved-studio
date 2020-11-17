import React from "react";
import './App.css';
import Navbar from "./Components/Marginals/Navbar";
import Footer from "./Components/Marginals/Footer";
import Sections from "./Components/Sections/Sections";

const App = () => {

  return (
    <div className = "app">
      <Navbar />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
