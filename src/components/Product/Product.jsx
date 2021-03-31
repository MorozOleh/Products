import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Product({
  imageUrl,
  title,
  count,
  comments,
  size,
  weight,
  onComment
}) {

  const add = () => {
    onComment({
      imageUrl,
      title,
      count,
      comments,
      size,
      weight
      })
  }

  return (
    <Card>
      <div className="image__container">
        <Card.Img
          variant="top"
          className="p-2 mb-auto"
          src={imageUrl}
        />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{count}</Card.Text>
        <Card.Text>{`size: ${size.width}mm x ${size.height}mm`}</Card.Text>
          <Button
            onClick={add}
            size="lg"
            block
          >
            Comments
          </Button>
          <Button
            size="lg"
            block
          >
            Edit
          </Button>
      </Card.Body>
    </Card>
  )
}
