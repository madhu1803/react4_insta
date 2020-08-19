import React, { Component } from "react";
import "./Css/Navlink.css";

export default class Navlink extends Component {
  render() {
    let { Icon } = this.props;
    return (
      <li class="nav-item active">
        <a class="nav-link" href="#">
          <Icon className="nav-icon" /> <span class="sr-only">(current)</span>
        </a>
      </li>
    );
  }
}
