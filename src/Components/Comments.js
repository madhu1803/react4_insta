import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";

export default class Comments extends Component {
  render() {
    let { text, author } = this.props;
    return (
      <Card.Text>
        <p className="mt-2">
          <strong>{author}</strong> {text} <AiOutlineHeart />
        </p>
      </Card.Text>
    );
  }
}
