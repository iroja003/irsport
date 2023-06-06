import React from 'react';
/**

        <div className="card text-center">
          <img src={categorias.img} alt={categorias.title} className="card-img-top card_img card_img" />
          <div className="card-body">
              <h5 className="card-title">{categorias.title}</h5>
              <p className="card-text">{categorias.description}</p>
              <a href="#" className="btn btn-primary">Detalle</a>
          </div>
        </div>


*/

const CardCateg = ({categorias}) => {
  return (
    <>
        <div className="card text-center">
          <img src={categorias.img} alt={categorias.title} className="card-img-top card_img" />
          <div className="card-body">
              <h5 className="card-title">{categorias.title}</h5>
              <p className="card-text">{categorias.description}</p>
              <a href="#" className="btn btn-primary btn_card">Detalle</a>
          </div>
        </div>
    </>
  );
};

export default CardCateg;