import React, { Component } from "react";
import { Card, FormControl, InputGroup } from "react-bootstrap";
import Logo from "../Components/Logo";
import Comments from "../Components/Comments";
import "../Components/Css/Post.css";
import { AiOutlineHeart, AiFillTag } from "react-icons/ai";
import { FiSend, FiMessageCircle } from "react-icons/fi";

export default class Post extends Component {
  state = {
    comments: ["hello", "nice", "cool", "bye", "xo"],
    newComment: "",
  };

  handleChange = (e) => {
    this.setState({ newComment: e.target.value });
    console.log(this.state.newComment);
  };

  PostHandler = () => {
    this.setState({
      ...this.state,
      comments: this.state.comments.concat(this.state.newComment),
      newComment: "",
    });
  };

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

            {this.state.comments.map((item) => (
              <Comments text={item} author="madhu" />
            ))}

            <InputGroup className="mb-3">
              <FormControl
                placeholder="Add a Comment"
                value={this.state.newComment}
                onChange={(e) => this.handleChange(e)}
              />
              <InputGroup.Append>
                <InputGroup.Text onClick={this.PostHandler}>
                  Post
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
