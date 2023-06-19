import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const [carrito, setCarrito  ] = useState([])
// getProducts
    const getProducts = async () => { 
        const res    = await fetch("/products.json")  ;
        const dbProd = await res.json();
        console.log(dbProd);
        setProducts(dbProd) ;
     };

     useEffect (() => {
        getProducts();
     },[]);
    
    // Funcionalidad Carro de Compra
    // 1. Agregar al Carro
    const addTocart = ({id, precio, nombre, img}) => { 
          const itemFoundIndex = carrito.findIndex((p) => p.id === id );
          const prodCarro = {id, precio, nombre, img, count:1} ;

          if (itemFoundIndex >= 0) {
            carrito[itemFoundIndex].count++;
            setCarrito([...carrito]);
          } else {
            setCarrito([...carrito, prodCarro]);
          }
     } ;
    // 2. Incrementar un Articulo
    const incrementItem = (i) => {
          carrito[i].count++;
          setCarrito([...carrito]);
    };

    // 3. Decrementar un Articulo

    const decrementItem = (i) => {
        const {count} = carrito[i];
        if (count === 1) {
            carrito.splice(i,1);
        } else {
            carrito[i].count--;
        }
        setCarrito([...carrito]);
    }

    return(
           <ProductContext.Provider value ={{ products,carrito, setCarrito, addTocart, incrementItem, decrementItem }}>
             {children}
           </ProductContext.Provider> 
    );
};

export default ProductProvider;