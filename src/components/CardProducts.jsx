import React, { useContext } from 'react';
//
import { useNavigate   } from 'react-router-dom'; 
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
//
import { FavoriteContext} from '../context/FavoriteContext';
import { ProductContext } from '../context/ProductContext';
//
import { FormatPrice    } from '../Utilitarios/Utilitario';
//
import {FaShoppingCart} from 'react-icons/fa';

const CardProducts = ({productos, favorite}) => {
  
  const {addToCart} = useContext(ProductContext);
  const {addFavorite} = useContext(FavoriteContext) ;      
  const navigate = useNavigate();

  /**                   onClick={ () => addToCart(productos.id, productos.price, productos.title, productos.img)  } */

  return (
    <>
    <div className="card text-center" key={productos.id}>
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
              <h6 className="card-title"> $ {FormatPrice(productos.price)}</h6>
              <div className="d-flex justify-content-between gap-4">
                  <button
                    className="btn btn-primary btn_card"
                    type="button"
                    onClick={() =>  navigate(`/producto/${productos.id}`) }
                    >
                    Ver Más
                  </button>
                  <button 
                    className="btn btn-primary btn_card"
                    type="button"
                    onClick={ () => addToCart(productos.id, productos.price, productos.title, productos.img)  }
                    >
                      Add <FaShoppingCart />
                  </button>
              </div>
          </div>
    </div>
   </>
  )
}

export default CardProducts