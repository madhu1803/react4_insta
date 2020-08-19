import React, { Component } from "react";
import {
  AiFillHome,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import NavLogo from "../Components/NavLogo";
import Navlink from "../Components/Navlink";
import NavForm from "../Components/NavForm";

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-white navbar-container">
        <div class="navbar-header">
          <NavLogo img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png" />
        </div>
        <div class="collapse navbar-collapse"></div>
        <div class="collapse navbar-collapse">
          <NavForm Icon={AiOutlineSearch} />
          <ul class="navbar-nav">
            <Navlink Icon={AiFillHome} />
            <Navlink Icon={FiSend} />
            <Navlink Icon={AiOutlineCompass} />
            <Navlink Icon={AiOutlineHeart} />
            <NavLogo
              img="https://www.w3schools.com/howto/img_avatar.png"
              classes="logo-img"
            />
          </ul>
        </div>
      </nav>
    );
  }
}
