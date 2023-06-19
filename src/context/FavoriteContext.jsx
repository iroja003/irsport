import React, { useState, createContext } from "react";

export const FavoriteContext = createContext();

const FavoriteProvider = ({children}) => { 
    
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (itemId) => {

        if (favorites.some(item => item === itemId)) {
            setFavorites(favorites.filter(item => item != itemId));
        } else {
            setFavorites([...favorites, itemId]);            
        }
    };

    return (
        <FavoriteContext.Provider value={{favorites, addFavorite}} >
            {children}
        </FavoriteContext.Provider>
    );
 };

 export default FavoriteProvider;