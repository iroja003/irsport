import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
//
import Home  from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NotFound  from './pages/NotFound';
import Category  from './pages/Category';
import Carrito   from './pages/Carrito';
import Productos from './pages/Productos';
import Detalle   from './pages/Detalle';
//
import IrNavbar from './components/IrNavbar';
import MiFooter from './components/MiFooter';
//
//
const App = () => {
   const {user} = useContext(UserContext);
   console.log(user);
   
  return (
    <div className='container-fluid' >
      <IrNavbar /> 
      <Routes>
        <Route path='/'                 element={<Home />}  />
        <Route path='/category'         element={<Category />} />
        <Route path='/carrito'          element={<Carrito />} />
        <Route path='/login'            element={ <Login />} />
        <Route path='/register'         element={<Register />} />
        <Route path='/dashboard'        element={ user ? <Dashboard />: <Navigate to="/login" />  } />
        <Route path='/producto/:itemId' element={<Detalle/>} />
        <Route path='/productos'        element={<Productos />} />
        <Route path='/*'                element={<NotFound />}  />
      </Routes>
      <MiFooter />
    </div>
  );
};

export default App;