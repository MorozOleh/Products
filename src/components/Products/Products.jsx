import React, {useEffect, useState} from 'react';
import Product from '../Product'
import { products as goods } from '../../API/product';
import { CardColumns, Nav } from 'react-bootstrap';
import Backdrop from '../Backdrop';
import { useRouteMatch } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'


export default function Products() {
  const [products, setProduct] = useState(goods)
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const match = useRouteMatch('/:id?');

  useEffect(() => {
    if (match.params.id) {
      setVisibleProducts(products.filter(({ id }) => id === +match.params.id));
      return;
    }

    setVisibleProducts(products)
  }, [match.params.id, products]);
  
  return (
    <>
      {visibleProducts.length &&
        <>
          <CardColumns className="m-2">
          {visibleProducts.map(product => (
            <Product
              key={product.id}
              imageUrl={product.imageUrl}
              title={product.name}
              count={product.count}
              size={product.size}
              weight={product.weight}
              id={product.id}
            />
          ))}
    
          </CardColumns>
          { !match.params.id &&
              <div className="row justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  onClick={() => setModalShow(true)}
                >
                  Add one more product
                </button>
              </div>
          }

          <Backdrop
            show={modalShow}
            onAdd={setProduct}
            onHide={() => setModalShow(false)}
          />
        </>
      }

      {match.params.id &&
        <>
          <ul>
            { visibleProducts &&
              visibleProducts[0].comments.map(comment => (
                <li key={comment}>{comment}</li>
              ))
            }
          </ul>
          <LinkContainer to="/">
            <Nav.Link
              className="btn btn-primary"
              size="lg"
              block="true"
            >
              Main page
            </Nav.Link>
          </LinkContainer>
        </>
      }
    </>
  )
}
