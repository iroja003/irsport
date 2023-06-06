import { useEffect } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext()

const getUsers = async () => {
  const res  = await fetch("users.json");
  const users = await res.json();
  return users; 
}

const initialStateUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null; 

const UserProvider = ({children}) => { 
  const [user, setUser] = useState(initialStateUser);
  
    useEffect (() => {
    if (user) {
      localStorage.setItem("user",JSON.stringify(user));
    }
   },[user]);

  const login = async (email, password) => {
      const users = await getUsers();
      const userData = users.find((ele) => ele.email.toLowerCase() === email.toLowerCase() && ele.password === password);
      console.log(userData);
    
      if (userData) {
        setUser(userData);
        console.log(user);
        } else {
        setUser(null);
      }
      return (userData);
    };
//
   
   const register = () => { };

   const logout = () => { 
     setUser(null);
     console.log(user);
     localStorage.removeItem("user");
   };

   return (
      <UserContext.Provider value={{ user, login, logout, register }}>
        {children}
      </UserContext.Provider>
    );  
};

export default UserProvider;
