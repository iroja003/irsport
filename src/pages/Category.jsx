import React, { useEffect, useState } from 'react';
import CardCateg from '../components/CardCateg';

const Category = () => {

  //
  const [categoria, setCategoria] = useState([]);
  // getCategorias()  
  const getCategorias= async() => {
        const res  = await fetch('/categorias.json');
        const data = await res.json();
        setCategoria(data);
        console.log(data);

      };

  useEffect ( ()=>{
      getCategorias();  
  },[]);

 
  return (
   <>
    <section className="container_card">
      {
            categoria.map((c) =>  (      
             <div className="card_i" key={c.id}>
                <CardCateg  categorias={c} />
              </div> 
                    ))
      }
    </section>
   </>
  )
}

export default Category