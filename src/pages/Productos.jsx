import React, { useContext } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CardProducts from '../components/CardProducts';
import { FavoriteContext} from '../context/FavoriteContext';
import { ProductContext } from '../context/ProductContext';

const Productos = () => {

  const { products, categ  }  = useContext(ProductContext);
  console.log("categoria : "+ categ);
  const { favorites }  = useContext(FavoriteContext);
  console.log(products);
  const [buscaTexto, setBuscatexto] = useState("");
   
  return (
    <>   
    <section className="container p-4">
      <input 
          type="text" name="" id="" 
          placeholder="Buscar......"  
          value={buscaTexto}
          onChange={ (e) => setBuscatexto(e.target.value)}
          />
      <div className="row" >
      {
        products.filter((p) => p.categoria === categ && p.title.toLowerCase().includes(buscaTexto.toLowerCase()))
        .map((p) =>  (      
             <div className="col-lg-4 col-md-6 col-sm-12 p-1" key={p.id}>
                <CardProducts  productos={p}  favorite={favorites.some(itemFav => itemFav == p.id )} />
              </div> 
            ))
      }
      </div>
    </section>
    </>
  )
}

export default Productos