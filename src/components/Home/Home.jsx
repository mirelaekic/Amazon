import React, { Component } from "react";
import ProductCard from "../Card/ProductCard";
import { Container, Col, Row } from "react-bootstrap";
export default class Home extends Component {
  state = {
    products: [],
  };
  componentDidMount = async () => {
    try {
      let response = await fetch("http://localhost:5002/products");
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        this.setState({ products: data });
        console.log(this.state.products, "Fetched data");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <Container>
          <Row>
            {products.map((product) => (
              <Col lg={4}>
                <ProductCard product={product} key={product._id} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
