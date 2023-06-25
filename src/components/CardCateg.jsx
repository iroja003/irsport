import React, { useContext } from 'react';
//
import {useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const CardCateg = ({categorias}) => {
// <Link to={"/productos"} onClick= {handleClick()} className="btn btn-primary btn_card">Detalle </Link>
//
   const {setCateg} = useContext(ProductContext);
   const navigate = useNavigate(); 
//
  const  handleClick = (dato) => {
       setCateg(dato);
       navigate('/productos');
  };
//
  return (
    <>
        <div className="card text-center">
          <img src={categorias.img} alt={categorias.title} className="card-img-top card_img" />
           <div className="card-body">
              <h5 className="card-title">{categorias.title}</h5>
              <p className="card-text">{categorias.description}</p>
              <button
                  className="btn btn-primary btn_card"               
                  type="button"
                  onClick= { () => handleClick(categorias.title)} 
              >
                 Detalle 
              </button>
          </div>
        </div>
    </>
  );
};

export default CardCateg;