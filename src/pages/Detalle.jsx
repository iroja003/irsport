//
import React, { useContext  } from 'react'
import { useParams } from 'react-router-dom';
//
import { ProductContext } from '../context/ProductContext';
//
const Detalle = () => {
  
  const {itemId} = useParams();
  console.log(itemId);
  const {products, addToCart } = useContext(ProductContext);
  const element = products.filter((p) => p.id === itemId );
  console.log(element.length);

  return (
    <>
      { element.length > 0 ?
      <div className="container" key={element[0].id}>
        <div className="card mb-3 prod-det">
            <div className="row g-0" >
              <div className="col-md-4">
                <img src="" 
                  className="img-fluid rounded-start" 
                  alt={element[0].title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{element[0].title}</h5>
                  <p className="card-text">{element[0].description}</p>
                  <p className="card-text"><small className="text-muted">{element[0].price}</small></p>
                  <button 
                      className="btn btn-primary btn_card"
                      onClick={ () => addToCart (element[0].id, element[0].precio, element[0].title, element[0].img)}
                      >
                        Add Carro
                    </button>
                </div>
              </div>
            </div>
        </div>
      </div> : <div></div>
    }      
    </>
  );
};

export default Detalle;