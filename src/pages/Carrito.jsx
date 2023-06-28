//
import React from 'react';
import { ProductContext } from '../context/ProductContext';
//

const Carrito = () => {
  const {carrito, increment, decrement} = useContext(ProductContext);
  const totalCarro = carrito.reduce((a, {count, price})=> a + price * count,0) ;

  return (
    <>
      <div className="container">
          <h3>Detalle</h3>
          {  carrito.map((p,i) => (
          <div key={p.id}>
              <table className="table text-center">
                <thead>
                  <tr>
                    <th scope='col'>Producto</th>
                    <th scope='col'>Cantidad</th>
                    <th scope='col'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <th scope='row'>
                          <div className="pt-2">
                            <img src={p.img} alt={p.title} width="100" className="m-2" />
                          </div>
                      </th>
                      <td>
                          <div className="pt-3">
                            <button type='button' className="m-2" onClick={() =>increment(i)}>+</button>
                            <button type='button' className="m-2" onClick={() =>decrement(i)}>-</button>
                          </div>
                      </td>
                      <td>
                          <div className="pt-4">
                            Sub-Total$ 99.999
                          </div>
                      </td>
                  </tr>
                </tbody>
              </table>  
              </div>
              ))}
              <h4> Total $ <span> {totalCarro} </span></h4>
      </div>
    </>
  )
};

export default Carrito;