import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";

function App() {
  const { pathname } = useLocation();
  const showNavbar = ["/signin", "/signup", "/forgetpassword", "/update", "/"];
  const showFooter = ["/signin", "/signup", "/forgetpassword", "/update", "/"];
  const shouldHideNavbar = showNavbar.includes(pathname);
  const shouldHideFooter = showFooter.includes(pathname);

  return (
    <>
      {/* {!shouldHideNavbar && <NavbarTop />} */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
      {/* {!shouldHideFooter && <Footer />} */}
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
