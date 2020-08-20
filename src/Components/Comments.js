import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "../Components/Css/Comments.css";
import { AiOutlineHeart } from "react-icons/ai";
import { findAllByTestId } from "@testing-library/react";

export default class Comments extends Component {
  state = {
    heart: false,
  };
  heartHandler = () => {
    this.setState({
      ...this.state,
      heart: !this.state.heart,
    });
  };
  render() {
    let { text, author } = this.props;

    return (
      <Card.Text>
        <p className="mt-2">
          <strong>{author}</strong> {text}{" "}
          <AiOutlineHeart
            style={{ float: "right" }}
            className={`${this.state.heart ? "heart-icon" : null}`}
            onClick={this.heartHandler}
          />
        </p>
      </Card.Text>
    );
  }
}
