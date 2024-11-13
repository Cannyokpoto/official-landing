import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { FaWhatsapp } from "react-icons/fa";
import Home from "./Pages/Home/Home";
import OurCourses from "./Pages/OurCourses/OurCourses";
import Web from "./Pages/Web/Web";
import Cyber from "./Pages/Cyber/Cyber";
import NoPage from "./Pages/NoPage/NoPage";
import Data from "./Pages/Data/Data";
import Digital from "./Pages/Digital/Digital";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


function App() {
  return (
    <div className="app bg-appBg">
      <Header />
      <a
        href="https://wa.me/2348029425815"
        className="fixed flex items-center justify-center w-auto h-auto p-1 bg-green-500 border rounded-full large:right-8 bg-discountGreen hover:bg-white hover:border hover:text-green-500 hover:border-green-500 large:bottom-5 small:bottom-6 small:right-5 small:z-10"
      >
        <FaWhatsapp className="text-white large:text-30px small:text-25px hover:text-green-500" />
      </a>
      <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages" element={<OurCourses />} />
          <Route path="/web" element={<Web />} />
          <Route path="/cyber" element={<Cyber />} />
          <Route path="/data" element={<Data />} />
          <Route path="/marketing" element={<Digital />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
