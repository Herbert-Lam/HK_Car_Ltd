import './App.css';
import React, { useState } from 'react';

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Home from "./components/home/home";
import AboutUs from "./components/aboutus/aboutUs";
import ContactUs from "./components/contactus/contactUs";
import Sedan from "./components/products/sedan";
import SUV from "./components/products/suv";
import Footer from './components/footer/footer';

function App() {

  const [admin, setAdmin] = useState(false);

  return (
    <div id="page">
      <NavBar
        check={admin}
        handlingChange={(nextChecked) => {
          setAdmin(nextChecked);
        }}
      />
      <Routes>
        <Route path="/"
          element={<Home />} />
        <Route
          path="/products/sedan"
          element={<Sedan
            admin={admin}
          />}
        />
        <Route
          path="/products/suv"
          element={<SUV
            admin={admin}
          />
          }
        />
        <Route path="aboutus"
          element={<AboutUs id={admin} />} />
        <Route path="contactus"
          element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
