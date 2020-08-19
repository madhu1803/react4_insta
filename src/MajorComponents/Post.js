import React, { Component } from "react";
import { Card, FormControl, InputGroup } from "react-bootstrap";
import Logo from "../Components/Logo";
import Comments from "../Components/Comments";
import "../Components/Css/Post.css";
import { AiOutlineHeart, AiFillTag } from "react-icons/ai";
import { FiSend, FiMessageCircle } from "react-icons/fi";

export default class Post extends Component {
  render() {
    return (
      <div class="container mb-3">
        <Card>
          <Logo
            text="mokkapostu"
            img="https://hikari.noyu.me/blog/2017-07-30-optimising-circular-avatars/avatar_circle_dirty.png"
          />
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
          />
          <Card.Body>
            <Card.Title>
              <AiOutlineHeart className="m-1" />
              <FiMessageCircle className="m-1" />
              <FiSend className="m-1" />
              <AiFillTag className="m-1" style={{ float: "right" }} />
            </Card.Title>
            <p>
              Liked by <strong>sruthi</strong> and <strong>6 others</strong>
            </p>
            <a href="#">View all 4 comments</a>
            <Comments text="nice" author="madhu" />
            <Comments text="cute" author="sang" />
            <Comments text="hello" author="am" />
            <InputGroup className="mb-3">
              <FormControl placeholder="Add a Comment" />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">Post</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
