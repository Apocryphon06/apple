import React from "react";
import logo from "./ui/apple.png";
import classes from "./Navbar.module.css";
import { Search, WorkOutline } from "@material-ui/icons";

function Navbar() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <img className={classes.logo} src={logo} alt="logo" />
        <ul className={classes.ul}>
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
        <Search
          style={{
            width: 20,
            height: 20,
            color: "#e1d9d1",
            marginRight:20
          }}
        />
        <WorkOutline
          style={{
            width: 20,
            height: 20,
            color: "#e1d9d1",
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
