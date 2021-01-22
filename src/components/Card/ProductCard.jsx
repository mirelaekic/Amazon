import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
class ProductCard extends Component {
  render() {
    return (
      <div>
        <Card className="mt-5 mb-5" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.product.imageurl} />
          <Card.Body>
            <Card.Title>{this.props.product.name}</Card.Title>
            <Card.Text>{this.props.product.brand}</Card.Text>
            <Button
              variant="warning"
              onClick={() =>
                this.props.history.push(`/product/${this.props.product._id}`)
              }
            >
              See more
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default withRouter(ProductCard);
