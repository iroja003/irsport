import React from 'react';
import {Link } from 'react-router-dom';
import Productos from '../pages/Productos';

/**

        <div className="card text-center">
          <img src={categorias.img} alt={categorias.title} className="card-img-top card_img card_img" />
          <div className="card-body">
              <h5 className="card-title">{categorias.title}</h5>
              <p className="card-text">{categorias.description}</p>
              <a href="#" className="btn btn-primary">Detalle</a>
          </div>
        </div>

              <Link to={`/detail/${id}`} className="detail-button">Ver detalles</Link>

              <Link to={`/productos`} className="btn btn-primary btn_card">Detalle </Link>

*/

const CardCateg = ({categorias}) => {
  return (
    <>
        <div className="card text-center">
          <img src={categorias.img} alt={categorias.title} className="card-img-top card_img" />
           <div className="card-body">
              <h5 className="card-title">{categorias.title}</h5>
              <p className="card-text">{categorias.description}</p>
              <Link to={"/productos"} className="btn btn-primary btn_card">Detalle </Link>
          </div>
        </div>
    </>
  );
};

export default CardCateg;