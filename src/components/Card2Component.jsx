import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

// CARDGROUP FUNCTION
const Card2Component = () => {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="pic.jpg" />
        <Card.Body>
          <Card.Title>Jay's Card For React Checkpoint</Card.Title>
          <Card.Text>
            This is Jay's contact, phone number and email address. Kindly reach
            out to him if it's important.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="pic.jpg" />
        <Card.Body>
          <Card.Title>Jay's Card For React Checkpoint</Card.Title>
          <Card.Text>
            This is Jay's contact, phone number and email address. Kindly reach
            out to him if it's important.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="pic.jpg" />
        <Card.Body>
          <Card.Title>Jay's Card For React Checkpoint</Card.Title>
          <Card.Text>
            This is Jay's contact, phone number and email address. Kindly reach
            out to him if it's important.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default Card2Component;
