//
import React, { useContext,useEffect,  useState  } from 'react'
import { useParams } from 'react-router-dom';
//
import { ProductContext } from '../context/ProductContext';
//
import { FormatPrice } from '../Utilitarios/Utilitario';
//
import {   FaShoppingCart } from 'react-icons/fa';
//

const Detalle = () => {
  const {products, addToCart } = useContext(ProductContext);
  const [prodDetail, setProdDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const {itemId} = useParams();
  console.log(itemId);

  const getElemento =  () => {
      setLoading(true) ;
      const  selectProd =  products.find((p) => p.id === parseInt(itemId));
      console.log(selectProd);
      setProdDetail(selectProd);
      setLoading(false);
   };

   useEffect (() => {
    getElemento();
   },[itemId]);   

   if (loading) {
      return(<h1>Loading ....</h1>)
   }

   return (
    <>
        <div className="card mb-3 mt-5 btn_card" key={prodDetail.id}>
            <div className="row g-0" >
              <div className="col-md-4">
                <img src={prodDetail.img}
                  className="img-fluid rounded-start" 
                  alt={prodDetail.title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{prodDetail.title}</h5>
                  <p className="card-text">{prodDetail.description}</p>
                  <p className="card-text"><small className="text-muted">$ {FormatPrice(prodDetail.price)} </small></p>
                  <button 
                      className="btn btn-primary"
                      type = "button"
                      onClick={ () => addToCart(prodDetail)  }
                      >
                        Add <FaShoppingCart />
                    </button>
                </div>
              </div>
            </div>
        </div>
    </>
  );
};

export default Detalle;