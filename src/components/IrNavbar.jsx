import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/Logo1.png';
//
import { FaHome,  FaShoppingCart, FaUser, FaUserPlus } from 'react-icons/fa';
import { UserContext } from '../context/UserContext';
import { Button } from 'bootstrap';
/*
FaSistrix, FaFileContract
FaInfoCircle,
            <Link to="/about"   ><FaInfoCircle /> About</Link>
*/

const IrNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user,logout } = useContext(UserContext);
  return (
    <>
        <header className='cabecera navbar-inverse bg-primary'>
          <div className="cabecera_logo navbar-brand">
            <Link to="/"><img src={Logo} width='40px' height='40px' /></Link>
             <h1>IR Sports</h1>    
             <div>
                  <p>{user ?  user.name : ""} </p>   
             </div>
          </div>
          <div className={`cabecera_items ${isOpen && "open"}`}>
            <Link to="/"        ><FaHome /> Home</Link>
            <Link to="/category">Category</Link>
            <Link to="/carrito" ><FaShoppingCart /> 0</Link>
            <Link to="/login"   ><FaUser /> Login   </Link>
            <Link to="/register"><FaUserPlus /> Register</Link>
            {
              user ? <button onClick={logout}  className="btn btn-primary"> Logout </button> : ""
            }
          </div>
          <div className={`cabecera_toggle  ${isOpen && "open"}`}  onClick={() => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
          </div>
        </header>
    </>
  )
}

export default IrNavbar;