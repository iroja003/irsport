import React, { useContext } from 'react';
//
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FavoriteContext } from '../context/FavoriteContext';


const CardProducts = ({productos, favorite}) => {
    
  const {addFavorite} = useContext(FavoriteContext) ;      

  return (
    <>
    <div className="card text-center">
          <img src={productos.img} alt={productos.title} className="card-img-top card_img_prod" />
          <div className="icon-container">
            { favorite ? 
             <AiFillHeart    className='icon_favorito' role="button" onClick={() => addFavorite(productos.id)}/> 
             :
             <AiOutlineHeart className='icon_favorito' role="button" onClick={() => addFavorite(productos.id)}/> 
            }
          </div>
          <div className="card-body">
              <h5 className="card-title">{productos.title}</h5>
              <p className="card-text">{productos.description}</p>
              <hr></hr>
              <h6 className="card-title"> Precio : {productos.price}</h6>
              <button 
                className="btn btn-primary btn_card"
                onClick={ ()=> addToCart()  }
                >
                  Add Carro
              </button>
          </div>
    </div>
   </>
  )
}

export default CardProducts