import React, { Component } from "react";
import "./App.css";
import Navbar from "./MajorComponents/Navbar";
import Sidebar from "./MajorComponents/Sidebar";
import Post from "./MajorComponents/Post";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12 pt-5">
              <Post />
            </div>
            <div class="col-lg-4 d-none d-lg-block pt-5">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
