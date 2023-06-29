//
import React, { useContext} from 'react';
import { ProductContext } from '../context/ProductContext';
import { FormatPrice } from '../Utilitarios/Utilitario';
//

const Carrito = () => {
  const {carrito, incrementItem, decrementItem, totalCarro } = useContext(ProductContext);
  
  return (
    <>
      <div className="container carrito">
          { totalCarro !== 0 ? <h3>Detalle</h3> : null}
          {  carrito.map((p,i) => (
          <div key={p.id}>
              <table className="tabla table table-striped table-hover text-center widt:100%">
                <thead>
                  <tr>
                    <th scope='col'>Producto</th>
                    <th scope='col'>Nombre  </th>
                    <th scope='col'>Precio  </th>
                    <th scope='col'>Cantidad</th>
                    <th scope='col'>Total   </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <th scope='row'>
                          <div className="pt-2">
                            <img src={p.img} alt={p.title} width="100" className="m-2" />
                          </div>
                      </th>
                      <td className="m-3 p-3 text-center">
                          {p.title}
                      </td>
                      <td className="m-3 p-3 text-center">
                         $ {FormatPrice(p.price)}
                      </td>
                      <td className="m-3 p-3 text-center">
                          <div className="p-3">
                            <button type='button' className="btn btn-primary m-2" onClick={() =>incrementItem(i)}>+</button>
                            <span>{p.count}</span>
                            <button type='button' className="btn btn-danger  m-2" onClick={() =>decrementItem(i)}>-</button>
                          </div>
                      </td>
                      <td className="p-3 m-3 text-center">
                          <div className="p-4">
                            <h6><span>$ {FormatPrice(p.price*p.count)}</span> </h6> 
                          </div>
                      </td>
                  </tr>
                </tbody>
              </table>  
              </div>
              ))}
              <h5> <span> Total $  { FormatPrice(totalCarro)} </span></h5>
      </div>
    </>
  )
};

export default Carrito;