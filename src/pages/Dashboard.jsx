import React,{ useContext } from 'react';
import {UserContext } from '../context/UserContext';
// iconos
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { RiUserLine } from 'react-icons/ri';
// iconos


const Dashboard = () => {

  const {user,logout} = useContext(UserContext);
  console.log(user);
  //
  return (
    <>
       <div className="container profile m-1">
          <div className="d-flex align-items-center justify-content-between flex-md-row ">
                <h1>DASHBOARD</h1>
          </div>
          <div className="card d-flex justify-content-center align-items-center text-center" >
              <img src="/src/assets/img/avatar_01.jpeg" alt="avatar" className="card-img-top img_avatar" />
              <div className="card-body">
                  <hr></hr>
                  <p className="card-text"><RiUserLine /> : {user.name}</p>
                  <p className="card-text"><AiOutlineMail/> : {user.email}</p>
                  <p className="card-text"><AiOutlinePhone/> : {user.phone}</p>
                  <hr></hr>
                  <div className="d-flex justify-content-between gap-4">
                      <button
                        className="btn btn-primary btn_card"
                        type="button"
                        >
                        Editar
                      </button>
                  </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard;