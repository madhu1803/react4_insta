import React, { Component } from "react";
import "./Css/NavLogo.css";

export default class NavLogo extends Component {
  render() {
    let { img, classes } = this.props;
    return (
      <a class="navbar-brand pl-2" href="#">
        <img
          src={img}
          width="100"
          height="30"
          alt=""
          loading="lazy"
          className={classes}
        />
      </a>
    );
  }
}
