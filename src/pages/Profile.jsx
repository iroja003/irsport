import React from 'react'

const Profile = () => {
  return (
    <>
        <div className="container">
            <h5>PROFILE</h5>
            <form  className="form-check-input ">
                <input type="text"     placeholder="Name"     value={name}     onChange={ (e) => setName(e.target.value)} />
                <input type="email"    placeholder="Email"    value={email}    onChange={ (e) => setEmail(e.target.value)} />
                <input type="tel"      placeholder="Phone"    value={phone}    onChange={ (e) => setPhone(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={ (e) => setPassword(e.target.value)} />
                <button
                  type="submit"
                  className="btn btn-primary"               
              >
                 Upd. Profile 
              </button>

            </form>    
        </div>
    </>
  )
}

export default Profile