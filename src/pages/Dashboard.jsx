import React,{ useContext } from 'react';
import {UserContext } from '../context/UserContext';

const Dashboard = () => {

  const {user,logout} = useContext(UserContext);
  console.log(user);

  return (
    <div>
       <h1>Dashboard</h1>
       <h2>{user ? "Usuario Existe " : " No Existe Usuario"}</h2>
    </div>
  )
}

export default Dashboard;