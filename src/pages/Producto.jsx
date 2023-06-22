//
import React, { useContext, useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom';
//
import { ProductContext } from '../context/ProductContext';
//
const Producto = () => {
  
  //const [prodDetail, setProdDetail] = useState([]);
  const {itemId} = useParams();
  console.log(itemId);
  //
  const {products, addToCart } = useContext(ProductContext);
  //console.log(products);
  //
//  const getElemento = () => {
    const elemento= products.filter((p) => p.id === itemId);
 //     setProdDetail(elemento);  
 // };
 
 /*
  useEffect ( () => {
    getElemento(); 
  },[products])
  */
  //
/*
      <div className="container" key={prodDetail.id}>
        <div className="card mb-3 prod-det">
            <div className="row g-0" >
              <div className="col-md-4">
                <img src="" 
                  className="img-fluid rounded-start" 
                  alt={prodDetail[0].title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{prodDetail.title}</h5>
                  <p className="card-text">{prodDetail.description}</p>
                  <p className="card-text"><small className="text-muted">{prodDetail.price}</small></p>
                  <button 
                      className="btn btn-primary btn_card"
                      onClick={ () => addToCart (prodDetail.id, prodDetail.precio, prodDetail.title, prodDetail.img)}
                      >
                        Add Carro
                    </button>
                </div>
              </div>
            </div>
        </div>
      </div>


*/
  return (
    <>
      <div className="container" key={elemento[0].id}>
          <h1>Detalle {elemento[0].title}</h1>
          <p>{elemento[0].description}</p>
      </div>
    </>
  );
};

export default Producto;