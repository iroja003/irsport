import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CardProducts from '../components/CardProducts';
import { FavoriteContext} from '../context/FavoriteContext';
import { ProductContext } from '../context/ProductContext';

const Productos = () => {

  const { products, categ  }  = useContext(ProductContext);
  console.log("categoria : "+ categ);
  const { favorites }  = useContext(FavoriteContext);
  console.log(products);
   
  return (
    <>   
    <section className="container p-4">
      <div className="row" >
      {
        products.filter((p) => p.categoria === categ )
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