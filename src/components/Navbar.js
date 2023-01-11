import React, { useEffect, useState } from "react";
import { Link, useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import { IoMdReorder } from "react-icons/io";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
   }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <IoMdReorder />
        </button>
      </div>
      <div className="links">

        <Link to="/deliver"><b>DELIVER</b></Link>
        <Link to="/win"><b>WIN</b></Link>
        <Link to="/save"><b>SAVE</b></Link>
        <Link to="/build"><b>BUILD</b></Link>
        <Link to="/send"><b>SEND</b></Link>
      </div>
    </div>
  );
}

export default Navbar;
