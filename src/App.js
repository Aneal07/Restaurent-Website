import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Food from "./components/Food";
import Rated from "./components/Rated";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Cards/>
     <Food/>
    <Rated/>
    <Footer/>
    </div>
  );
}

export default App;
