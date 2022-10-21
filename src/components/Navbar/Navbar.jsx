import React from "react";
import logo from "./ui/apple.png";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={classes.container}>
      
      <ul className={classes.ul}>
      <img className={classes.logo} src={logo} alt="logo" />
        <li>Store</li>
        <li>Mac</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>Watch</li>
        <li>Airpods</li>
        <li>TV & Home</li>
        <li>Only on Apple</li>
        <li>Accessories</li>
        <li>Support</li>
      </ul>
    </div>
  );
}

export default Navbar;
