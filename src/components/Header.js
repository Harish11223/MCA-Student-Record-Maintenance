import React from 'react'
import BITlogo from "../assets/BITlogo.png";
import home from "../assets/home.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg rounded shadow-sm">
    <div className="container-fluid">
      <a href="/" className="navbar-brand text-light">
        <img
          src={BITlogo}
          width="60"
          height="60"
          className="d-inline-block"
          alt="logo"
        />
        | Birla Institute of Technology Mesra
      </a>
      <div className="nav">
        <a href="/" className="nav-link text-light ">
        <img
          src={home}
          width="25"
          height="25"
          className="d-inline-block mb-1 m-auto"
          alt="home icon"
        /> Home
        </a>
      </div>
    </div>
  </nav>
          

  );
}

export default Header