import React, {useEffect, useState} from 'react';
import Product from '../Product'
import { CardColumns, Nav } from 'react-bootstrap';
import Backdrop from '../Backdrop';
import { useParams } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { fetch } from '../../API/api';


export default function Products() {
  const [products, setProduct] = useState([])
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch().then(setProduct);
  }, []);

  

  useEffect(() => {
    if (id) {
      setVisibleProducts(products.filter(product => product.id === id));
      return;
    }

    setVisibleProducts(products)
  }, [id, products, setVisibleProducts]);
  
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
          { !id &&
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

      {id &&
        <>
          <ul>
            {/* { visibleProducts &&
              visibleProducts[0].comments.map(comment => (
                <li key={comment}>{comment}</li>
              ))
            } */}
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
