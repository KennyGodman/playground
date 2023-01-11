import React from "react";
import "../styles/blankpage.css";
import { Link, useNavigate } from "react-router-dom";

function BlankPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/navbar");
  };
  return (
    <div className="index">
      <button onClick={handleClick} className="mont">
        {/* <Link to="/navbar"> NavBar</Link> */}
        <h1>CLICK AND SEE WONDERS</h1>
      </button>
    </div>
  );
}

export default BlankPage;
