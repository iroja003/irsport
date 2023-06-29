import { useEffect } from "react";
import { createContext, useState } from "react";

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React

export const UserContext = createContext();

//
const initialStateUser  = localStorage.getItem("user" ) ? JSON.parse(localStorage.getItem("user")) : null; 
//
const initialStateUsers = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []; 

const UserProvider = ({children}) => { 
  //
  // Create an instance of Notyf
  const notyf = new Notyf();
  //
  const [user, setUser  ] = useState(initialStateUser);
  const [users, setUsers] = useState(initialStateUsers);

  //
  const getUsers = async () => {
    const res   = await fetch("users.json");
    const users = await res.json();
    setUsers(users); 
  };
  //
  useEffect (() => {
      localStorage.setItem("users",JSON.stringify(users));
   },[users]);
 
  // 
    useEffect (() => {
    if ( users.length === 0  ) {
      getUsers();
    }
   },[]);

   useEffect (() => {
    if (user) {
      localStorage.setItem("user",JSON.stringify(user));
    }
 },[user]);

  const login = (email, password) => {
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
   const register = (user) => {
      const userDataB = users.find((u) => u.email === user.email );
      if (userDataB) return userDataB;
      setUser(user);
      setUsers([...users, user])

    };

   const logout = () => { 
     setUser(null);
     console.log(user);
     localStorage.removeItem("user");
   };

   const updUser = (user) => {
    setUser(user);
    const usersUpd = users.map((u) => u.id === parseInt(user.id) ? user : u );
    setUsers(usersUpd);
    notyf.success("Usuario [ "+user.name+" ] , Actualizado");
   };

   return (
      <UserContext.Provider value={{ user, login, logout, register, updUser }}>
        {children}
      </UserContext.Provider>
    );  
};

export default UserProvider;
