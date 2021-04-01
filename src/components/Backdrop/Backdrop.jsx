import React, { useState } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';


export default function Backdrop({ show, onHide, onAdd }) {
  
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [count, setCount] = useState(1);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const onChangeInputs = (event) => {
    const { value, name } = event.target;
    
    switch (name) {
      case 'imageUrl':
        setImageUrl(value);
        break;
      
        case 'title':
        setTitle(value);
        break;
      
      case 'count':
        if (value >= 1) {
          setCount(value);
        }
        break;
      
      case 'width':
        if (value >= 0) {
          setWidth(value);
        }
        break;
      
      case 'height':
        if (value >= 0) {
          setHeight(value);
        }
        break;
      
      case 'weight':
        if (value >= 0) {
          setWeight(value);
        }
        break;
    
      default:
        break;
    }
  }

  const onSubmitForm = (event) => {
    event.preventDefault();

    const newProduct = {
      id: new Date().getTime(),
      imageUrl,
      title,
      count,
      size: {
        width,
        height
      },
      weight,
      comments: []
    }
    onAdd(prev => [...prev, newProduct]);
  } 

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmitForm}>

          <Form.Group>
            <Form.Label>imageUrl</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter path to image"
              value={imageUrl}
              name="imageUrl"
              onChange={onChangeInputs}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              name="title"
              onChange={onChangeInputs}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter title"
              value={count}
              name="count"
              onChange={onChangeInputs}
              />
          </Form.Group>
          <Form.Group>
          <Form.Row>
            <Col>
              <Form.Label>Width</Form.Label>
                <Form.Control
                  placeholder="Enter width"
                  type="number"
                  value={width}
                  name="width"
                  onChange={onChangeInputs}
                />
            </Col>
            <Col>
              <Form.Label>Height</Form.Label>
                <Form.Control
                  placeholder="Enter height"
                  type="number"
                  value={height}
                  name="height"
                  onChange={onChangeInputs}
                />
            </Col>
          </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Label>Weight</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter weight"
              value={weight}
              name="weight"
              onChange={onChangeInputs}
              />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

Backdrop.propTypes = {
  show: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
}