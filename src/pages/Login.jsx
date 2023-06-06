import React from 'react';
import { useContext,  useState  } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

import {  AiOutlineMail, AiTwotoneLock  } from 'react-icons/ai';

const Login = () => {

    const {login} = useContext(UserContext);
	const navigate = useNavigate();

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
    
	const handleSubmit = async(e) => { 
		 e.preventDefault();
	const user = await login(email, password);
    console.log(user);
	if (user) {
			setEmail("");
			setPassword("");
			return navigate("/dashboard");
	} else {
           alert("Correo y/o contraseña incorrecta");      			
	}
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