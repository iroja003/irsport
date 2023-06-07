import React, { useContext } from 'react';
import CardProducts from '../components/CardProducts';
import { ProductContext } from '../context/ProductContext';

const Productos = () => {

  const {products} = useContext(ProductContext);
   console.log(products);


  return (
    <>   
    <section className="container_card">
      {
        products.filter(p => p.categoria === "Fútbol")
        .map((p) =>  (      
             <div className="card_i" key={p.id}>
                <CardProducts  productos={p} />
              </div> 
                    ))
      }
    </section>
    </>
  )
}

export default Productos