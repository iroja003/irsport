import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
//
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React
//
export const ProductContext = createContext();

// Create an instance of Notyf
const notyf = new Notyf();

// Provider
const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const [carrito , setCarrito ] = useState([]);
    const [categ   , setCateg   ] = useState("");
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

    const addToCart = ({id, price, title, img}) => { 
          const itemFoundIndex = carrito.findIndex((p) => p.id === parseInt(id) );
          console.log(itemFoundIndex);
          const prodCarro = {id, price, title, img, count:1} ;

          if (itemFoundIndex >= 0) {
            carrito[itemFoundIndex].count++;
            setCarrito([...carrito]);
          } else {
            setCarrito([...carrito, prodCarro]);
          }
          notyf.success("producto Agregado al Carro de Compras");
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

// 4. Total carrito
    const totalCarro     = carrito.reduce((valorAntes, {count, price}) => valorAntes + price*count,0 );
//
    return(
           <ProductContext.Provider value ={{ products, setProducts, categ, setCateg, carrito, setCarrito, addToCart, incrementItem, decrementItem, totalCarro }}>
             {children}
           </ProductContext.Provider> 
    );
};

export default ProductProvider;