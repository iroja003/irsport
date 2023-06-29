import React from 'react';
import { useContext,  useState  } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

import {  AiOutlineMail, AiTwotoneLock  } from 'react-icons/ai';
import Swal from 'sweetalert2';

const Login = () => {

    const {login} = useContext(UserContext);
	const navigate = useNavigate();

	const [email   , setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error   , setError]= useState(false);
    
	const handleSubmit = (e) => { 
		
		e.preventDefault();
		
		setError(false);

		if ( !email.trim() ) {
			setError(true);
			return Swal.fire({
				icon:"error",
				title:"Error-01: Rellenar Campos",
				text:"Falta completar email"
			});
		};

		const user = login(email, password);
		console.log(user);
		if (user) {
				setEmail("");
				setPassword("");
				return navigate("/dashboard");
		}
		Swal.fire({
			icon:"error",
			title:"Error-02: Datos Incorrectos",
			text:"Usuario no Existe, Favor Registrarse"
		});
		return navigate("/register");
  };

  return (
    <>
	<div className="container form form_login">
		<form onSubmit={handleSubmit}>
		<p>Bienvenido a IR Sports</p>
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
			<label> <AiTwotoneLock /> Password</label>
			<input 
			     type="password" 
				 placeholder='********'
				 value={password}				
				 onChange ={(e) => setPassword(e.target.value)} 
			 />
		</div>
		<div className="input-container">
			<button type='submit' className="btn btn-primary">Login</button>
     	</div>
		</form>
	</div>
    </>
  );
};

export default Login;