import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import CommentList from "../CommentList/CommentList";

export default class SingleProduct extends Component {
  state = {
    product: {}
  };
  componentDidMount() {
    this.fetchProduct(this.props.match.params.id);
  }

  fetchProduct = async (id) => {
    try {
      let response = await fetch("http://localhost:5002/products/" + id, {
        method: "GET",
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        this.setState({ product: data[0] });
        console.log(this.state.product, "Fetched");
      } else {
        alert("Something is wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { product } = this.state;
    return (
      <div>
          <Container className="pb-5 pt-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.imageurl} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.category}</Card.Text>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.price}$</Card.Text>
          </Card.Body>
        </Card>
        </Container>
        <CommentList id={this.state.product._id} key={this.state.product._id} />
      </div>
    );
  }
}
