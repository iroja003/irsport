//
import React, { useContext, useEffect, useState  } from 'react'
//
import { useParams } from 'react-router-dom';
//
import { ProductContext } from '../context/ProductContext';
//
const Producto = () => {
  const [prodDetail, setProdDetail] = useState({});
  const {products, addToCart} = useContext(ProductContext);
  const {itemId} = useParams();
  console.log(itemId)

  const getProduct = () => {
     const bdProd = products.find((p) => p.id === itemId );
     console.log(bdProd);
     setProdDetail(bdProd);
   };

   useEffect ( () => {
      getProduct();
   },[products]);

  return (
    <>
      <div className="card mb-3 prod-det">
        <div className="row g-0">
            <div className="col-md-4">
              <img src={prodDetail.img} className="img-fluid rounded-start" alt={prodDetail.title}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{prodDetail.title}</h5>
                <p className="card-text">{prodDetail.description}</p>
                <p className="card-text"><small className="text-muted">{prodDetail.price}</small></p>
                <button 
                    className="btn btn-primary btn_card"
                    onClick={ ()=> addToCart()  }
                    >
                      Add Carro
                  </button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Producto