import React, { Component } from "react";
import "./Css/NavForm.css";

export default class NavForm extends Component {
  render() {
    let { Icon } = this.props;
    return (
      <div class="form-inline my-2 my-lg-0 nav-form">
        <Icon className="navform-icon" />
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    );
  }
}
