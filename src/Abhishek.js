import React, { Component } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import "./Abhishek.css";
import "./js/style";
import WOW from "wowjs";

class Abhishek extends Component {
  state = {};
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Footer />
      </div>
    );
  }
}

export default Abhishek;
