import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { UserContext } from '../context/UserContext';
// iconos
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { RiLockPasswordLine, RiUserLine } from 'react-icons/ri';
//

const Profile = () => {
  const {user, updUser} = useContext(UserContext);
  const [name    , setName]     = useState("");
  const [email   , setEmail]    = useState("");
  const [phone   , setPhone]    = useState("");
  const [password, setPassword] = useState("");

  useEffect( () => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setPassword(user.password);
  }, []);

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    updUser({
        name:name,
        email: email,
        phone:phone,
        password: password,
        id:user.id
    });
  };

  //
  return (
    <>
        <div className="container form form_profile">
            <form  onSubmit={handleSubmit}>
                <h5>PROFILE</h5>
                <div className="input-container">
                    <label><RiUserLine/> Nombre y Apellido</label>
                    <input type="text"     placeholder="Name"     value={name}     onChange={ (e) => setName(e.target.value)} />
                </div>
                <div className="input-container">
                    <label><AiOutlineMail /> Correo </label>
                    <input type="email"    placeholder="Email"    value={email}    onChange={ (e) => setEmail(e.target.value)} />
                </div>
                <div className="input-container">
                    <label><AiOutlinePhone />Phone</label>
                    <input type="tel"      placeholder="Phone"    value={phone}    onChange={ (e) => setPhone(e.target.value)} />
                </div>
                <div className="input-container">
                    <label><RiLockPasswordLine/> Password</label>
                    <input type="password" placeholder="Password" value={password} onChange={ (e) => setPassword(e.target.value)} />
                </div>
                <div className="input-container">
                    <button
                      type="submit"
                      className="btn btn-primary"               
                    >
                        Upd. Profile 
                    </button>
              </div>
            </form>    
        </div>
    </>
  )
}

export default Profile