import React from 'react';
//
import { Link } from 'react-router-dom';
//
import Logo from '../assets/img/Logo1.png';

import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaCopyright, FaUserPlus } from 'react-icons/fa';

import {FaCcVisa, FaCcMastercard, FaPaypal} from 'react-icons/fa';

const MiFooter = () => {
  return (
      <>
      <div className="container-fluid box_footer">
        <div className="row p-3 pb-2 bg-primary s_footer">
        <div className="col-xs-12 col-md-6 col-lg-3">
            <div className='logo_footer'>
                <Link to="/"><img src={Logo} width='40px' height='40px' /></Link>
                <p className="h3">IR Sports</p>    
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className='h5'>Siguenos en :</p>
             <div className="d-flex gap-3 align-items-center">
                <FaFacebookF />
                <FaTwitter   />
                <FaInstagram />
                <FaYoutube   />
             </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className='h5 mb-2'>Formas de Pago</p>
            <div className="d-flex gap-3 align-items-center">
              <FaCcVisa      />
              <FaCcMastercard/>
              <FaPaypal      />
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className='h5'>IR Sports CL</p>
            <div className="text-white text-decoration-none mb-2 link_footer">
                <Link to='/register'><FaUserPlus />Registrate</Link>
            </div>
            <div className="text-white text-decoration-none mb-2 link_footer">
                <a href="#" className="text-white text-decoration-none">Cómo Comprar</a>
            </div>
          </div>
          <div className="col-xs-12 pt-3">
            <p className="text-white text-center"> <FaCopyright /> IR Sports - All rights reserved &copy; 2023</p>
          </div>
        </div>
      </div>
      </>  
  );
};

export default MiFooter;