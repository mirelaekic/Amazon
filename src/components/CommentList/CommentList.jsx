import React, { Component } from "react";
import { ListGroup, Container } from "react-bootstrap";
import AddComment from "../AddComment/AddComment"
export default class CommentList extends Component {
  state = {
    comments: [],
  };
  fetchComments = async (id) => {
    try {
      let response = await fetch(
        "http://localhost:5002/products/" + id + "/reviews",
        {
          method: "GET",
        }
      );
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
        console.log(this.state.comments)
        await this.fetchcomments();
        console.log(this.state.comments, "fetched comments");
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.fetchComments(this.props.id);
  }
  render() {
    return (
      <div>
        <Container>
            <h3 className="mb-2 ml-4">Check out the reviews!</h3>
          {this.state.comments.map((comment) => (
            <ListGroup>
              <ListGroup.Item className="mt-1">{comment.comment}</ListGroup.Item>
            </ListGroup>
          ))}
        <AddComment productId={this.state.comments.productid }/>
        </Container>
      </div>
    );
  }
}
