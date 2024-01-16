import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// SINGLE CARD FUNCTION
const Card1Component = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="pic2.jpg" />
      <Card.Body>
        <Card.Title>Jay's Card</Card.Title>
        <Card.Text>
          This is Jay's contact, phone number and email address. Kindly reach
          out to him if it's important.
        </Card.Text>
        <Button variant="primary">Click to contact me</Button>
      </Card.Body>
    </Card>
  );
};

export default Card1Component;
