import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();


const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([]);
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
     
    return(
           <ProductContext.Provider value ={{ products }}>
             {children}
           </ProductContext.Provider> 
    );
};

export default ProductProvider;