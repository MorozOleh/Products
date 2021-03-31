import React, {useState} from 'react';
import Product from '../Product'
import { products as goods } from '../../API/product';
import { CardDeck } from 'react-bootstrap';
import Backdrop from '../Backdrop';

export default function Products() {
  const [products, setProduct] = useState(goods)
  // const [selectedProduct, setSelectedProduct] = useState(null)
  const [modalShow, setModalShow] = useState(false);
  // const openComments = (product) => {
  //   setSelectedProduct(product)
  // }



  return (
    <>
      {products.length && <>
        <CardDeck className="m-2">
      {products.map(product => (
        <Product
          key={product.id}
          imageUrl={product.imageUrl}
          title={product.name}
          count={product.count}
          comments={product.comments}
          size={product.size}
          weight={product.weight}
          // onComment={openComments}
        />
      ))}
    </CardDeck>
    <div className="row justify-content-center">
      <button
        type="submit"
        className="btn btn-primary btn-lg"
        onClick={() => setModalShow(true)}
      >
        Add one more product
      </button>
    </div>

      <Backdrop
        show={modalShow}
        onAdd={setProduct}
        onHide={() => setModalShow(false)}
        />
        </>
      }
    </>
  )
}
