import React from 'react';
//
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';


const CardProducts = ({productos}) => {
  return (
    <>
    <div className="card text-center">
          <img src={productos.img} alt={productos.title} className="card-img-top card_img_prod" />
          <div className="icon-container">
             <AiOutlineHeart className='icon_favorito'/>
          </div>
          <AiOutlineHeart />
          <div className="card-body">
              <h5 className="card-title">{productos.title}</h5>
              <p className="card-text">{productos.description}</p>
              <a href="#" className="btn btn-primary btn_card">Add Carrito</a>
          </div>
        </div>

    </>
  )
}

export default CardProducts