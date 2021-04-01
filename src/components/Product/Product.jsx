import React from 'react';
import { Card, Button, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

export default function Product({
  imageUrl,
  title,
  count,
  size,
  weight,
  onComment,
  id
}) {

  return (
<Card style={{ width: '18rem' }}>
  <Card.Img
    variant="top"
    className="p-2 mb-auto"
    src={imageUrl}
  />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>{count}</Card.Text>
    <Card.Text>{`size: ${size.width}mm x ${size.height}mm`}</Card.Text>
    <Card.Text>{`Weight: ${weight} g`}</Card.Text>

    <LinkContainer to={`/${id}`}>
      <Nav.Link
        className="btn btn-primary mb-2"
        size="lg"
        block="true"
      >
        Comments
      </Nav.Link>
    </LinkContainer>
    <Button
      size="lg"
      block="true"
    >
      Edit
    </Button>
  </Card.Body>
</Card>
)
}
