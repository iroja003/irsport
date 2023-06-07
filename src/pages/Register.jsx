import React, { useState } from 'react';
import { useContext } from 'react';


// iconos
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { RiLockPasswordLine, RiUserLine } from 'react-icons/ri';
import { UserContext } from '../context/UserContext';

const handleSubmit = async(e) => { 
   e.preventDefault();
   console.log(e);
};

const Register = () => {

   const {register} = useContext(UserContext);

   //	const navigate = useNavigate();

    const [name      , setName      ] = useState("");
	const [email     , setEmail     ] = useState("");
	const [phone     , setPhone     ] = useState("");
	const [password  , setPassword  ] = useState("");
	const [repassword, setRepassword] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e);  
    };
  
  return (
    <>
	<div className="container form form_registro">
		<form onSubmit={handleSubmit} >
		<p>Registrar en IR Sports</p>
		<div className="box_img"></div>
		<div className="input-container">
			<label> <RiUserLine /> Nombre y Apellido</label>
			<input 
			   type="text" 
			   placeholder='nombre y apellido ...' 
			   value={name}
			   onChange ={(e) => setName(e.target.value)} 
			   />
		</div>
		<div className="input-container">
			<label> <AiOutlinePhone />Telefono</label>
			<input 
			   type="text" 
			   placeholder='+99 999999999...' 
			   value={phone}
			   onChange ={(e) => setPhone(e.target.value)} 
			   />
		</div>
		<div className="input-container">
			<label> <AiOutlineMail /> Email</label>
			<input 
			   type="email" 
			   placeholder='tucorreo@micorreo.com' 
			   value={email}
			   onChange ={(e) => setEmail(e.target.value)} 
			   />
		</div>
		<div className="input-container">
			<label> <RiLockPasswordLine/> Password</label>
			<input 
			     type="password" 
				 placeholder='clave ...'
             value={password}
			   onChange ={(e) => setPassword(e.target.value)} 
			 />
		</div>
		<div className="input-container">
			<label> <RiLockPasswordLine/> Repita Password</label>
			<input 
   		     type="password" 
				 placeholder='repita clave ..'
             value={repassword}
			   onChange ={(e) => setRepassword(e.target.value)} 
			 />
		</div>
		<div className="input-container input_boton">
			<button type='submit' className="btn btn-primary">Registrar</button>
     	</div>
		</form>
	</div>
    </>
  )
}

export default Register;