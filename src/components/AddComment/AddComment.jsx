import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
export default class AddComment extends Component {
    state = {
        newComment: { 
            comment:"",rate:"",username:"",
            productId: this.props.productId,rate:"",
        }
    };
    changeHandler = (e) => {
        this.setState({
          newComment: {
            ...this.state.newComment,
            [e.target.id]: e.target.value,
          },
        });
      };
    postComment = async () => {
  
        this.setState({ loading: true })
        try {
          let response = await fetch("http://localhost:5002/reviews/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state.newReview),
          });
          console.log(response);
          if (response.ok) {
            await response.json();
             this.setState({ newComment: { comment:"",rate:"",username:"" },
        loading: false});
        
          } else {
            console.log("u didnt fetch right");
          }
        } catch (error) {
          console.log(error);
        }
       
      };
  render() {
    return (
      <div>
        <Form className="mb-5 mt-3">
            Share your comment!
          <Form.Group>
            <Form.Label>Your name</Form.Label>
            <Form.Control type="text" id={"username"}
            username="username" onChange={(e) => this.changeHandler(e)} value={this.state.newComment.username} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Your comment</Form.Label>
            <Form.Control as="textarea" rows={2}
            id={"comment"}
            comment="comment"
             onChange={(e) => this.changeHandler(e)} value={this.state.newComment.comment}
             />
             Rate from 1-5
             <Form.Control as="textarea" 
             type="number"
             rows={1}
            rate="rate"
             onChange={(e) => this.changeHandler(e)} value={this.state.newComment.rate}
             />
          </Form.Group>
          <Button variant="warning" onClick={this.postComment}>Post!</Button>
        </Form>
      </div>
    );
  }
}
