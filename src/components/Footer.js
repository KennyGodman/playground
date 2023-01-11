import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook />
        <AiOutlineWhatsApp />
        <AiFillLinkedin />
        <AiFillGithub />
      </div>
      <p>&copy; 2022 godmanworks@gmail.com</p>
    </div>
  );
}

export default Footer;
