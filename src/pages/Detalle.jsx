//
import React, { useContext,useEffect  } from 'react'
import { useParams } from 'react-router-dom';
//
import { ProductContext } from '../context/ProductContext';
//
import {   FaShoppingCart } from 'react-icons/fa';
//
const Detalle = () => {
  
  const {itemId} = useParams();
  console.log(itemId);
  const {products, setProducts, addToCart } = useContext(ProductContext);

  const getElemento = () => {
      const selectProd = products.filter((p) => p.id === itemId).map((p) => p );
      console.log(selectProd);
      setProducts(selectProd);
     }

   useEffect (() => {
    getElemento();
 },[itemId]);   
    
/*
      <div className="container">
        <div className="card mb-3 prod-det">
            <div className="row g-0" >
              <div className="col-md-4">
                <img src=""
                  className="img-fluid rounded-start" 
                  alt=""
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">titulo</h5>
                  <p className="card-text">descripcion</p>
                  <p className="card-text"><small className="text-muted">$ 75.000 </small></p>
                  <button 
                      className="btn btn-primary btn_card"
                      type = "button"
                      onClick={ handleClick()}
                      >
                        Add Carro
                    </button>
                </div>
              </div>
            </div>
        </div>
      </div> 


            <div className="container">
          <h1> Producto : {itemId}</h1>
      </div>
*/

  return (
    <>
      <div className="container">
        <div className="card mb-3 prod-det">
            <div className="row g-0" >
              <div className="col-md-4">
                <img src="/tennis1.jpg"
                  className="img-fluid rounded-start" 
                  alt=""
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{itemId}</h5>
                  <p className="card-text">descripcion : {itemId}</p>
                  <p className="card-text"><small className="text-muted">$ 75.000 : {itemId} </small></p>
                  <button 
                      className="btn btn-primary btn_card"
                      type = "button"
                      >
                        Add <FaShoppingCart />
                    </button>
                </div>
              </div>
            </div>
        </div>
      </div> 
    </>
  );
};

export default Detalle;