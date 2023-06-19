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
    <section className="container p-4">
      <div className="row">
      {
            categoria.map((c) =>  (      
             <div className="col-lg-3 col-md-6 col-sm-12" key={c.id}>
                <CardCateg  categorias={c} />
              </div> 
                    ))
      }
      </div>
    </section>
   </>
  )
}

export default Category