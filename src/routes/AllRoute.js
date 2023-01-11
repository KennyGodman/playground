import React from "react";
import { Routes, Route } from "react-router-dom";
import BlankPage from "../components/Blankpage";
import Navbar from "../components/Navbar";
import Deliver from "../pages/Deliver";


function AllRoute() {
  return (
      <Routes>
          <Route path="/" element={<BlankPage />} />
          <Route path="/deliver" element={<Deliver />}/>
          <Route path="/navbar" element={<Navbar />} />
      </Routes>
  );
}

export default AllRoute;
