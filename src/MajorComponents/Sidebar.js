import React, { Component } from "react";
import Logo from "../Components/Logo";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        {/* sidebar header */}
        <Logo
          text="madhumithaa"
          img="https://www.w3schools.com/howto/img_avatar.png"
          subtext="madhu"
        />
        {/* sidebar body */}
        <small className="text-muted mb-1">
          Suggestions for you{" "}
          <strong className="text-dark ml-5 pl-5">See All</strong>
        </small>
        <Logo
          text="sam"
          img="https://www.w3schools.com/howto/img_avatar.png"
          subtext="followed by madhu and 1 more"
          ishref={true}
        />
        <Logo
          text="kitty"
          img="https://www.w3schools.com/howto/img_avatar.png"
          subtext="followed by madhu and 64 more"
          ishref={true}
        />
        <Logo
          text="kitty"
          img="https://www.w3schools.com/howto/img_avatar.png"
          subtext="followed by madhu and 64 more"
          ishref={true}
        />
        {/* sidebar footer */}
        <small className="text-muted" style={{ fontSize: "11px" }}>
          About Help Press Career Privacy Language
          <br />
          Locations Accounts Hashtag Api Jobs Al
        </small>
      </div>
    );
  }
}
