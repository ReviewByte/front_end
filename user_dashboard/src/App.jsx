import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import NavbarTop from "./comp/navbartop";
import Footer from "./comp/footer";
import Catagories from "./pages/catagories";

function App() {
  const { pathname } = useLocation();
  const showNavbar = [""];
  const showFooter = [""];
  const shouldHideNavbar = showNavbar.includes(pathname);
  const shouldHideFooter = showFooter.includes(pathname);

  return (
    <>
      {!shouldHideNavbar && <NavbarTop />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catagories" element={<Catagories />} />
        
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
      {!shouldHideFooter && <Footer />}
    </>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;
