import React from 'react';
import Category from './Category';
//import MiCarrusel from '../components/MiCarrusel';
/*
      <section>
         <MiCarrusel />
      </section>

*/

const Home = () => {
  return (
   <>
      <div className ="container-fluid mihero">
        <div className="wrap">
          <div className="box">
            <h1>IR SPORTS</h1>
            <p>El impulso que necesitas para alcanzar tus metas deportivas.</p>
            <p>La tienda donde la pasión y el rendimiento se unen.</p>
            <div className="botones">
              <a href="#" className="btn1">About    </a>
              <a href="#" className="btn2">Contactos</a>					
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Home;