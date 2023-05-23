import "./App.css";
import Home from "/Users/user/Desktop/travolic-new/src/pages/Home";
import About from "/Users/user/Desktop/travolic-new/src/pages/About";
import Contact from "/Users/user/Desktop/travolic-new/src/pages/Contact";
import Services from "/Users/user/Desktop/travolic-new/src/pages/Services";
import "./assests/css/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
