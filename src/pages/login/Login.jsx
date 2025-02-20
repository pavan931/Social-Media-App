import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
function Login() {

  const  {login} = useContext(AuthContext)


 const handleLogin = ()=>{
  login()
 } 
  return (
    <div className='login'>
        <div className='card'>
            <div className='left'>
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Vel officia alias expedita 
                     libero aperiam voluptatum in
                      odio minus consequuntur. Neque voluptas voluptatem aliquid
                     beatae</p>
                     <span>Don't you have an account?</span>
                     <Link to="/register"><button>Register</button></Link>
                     </div>
                <div className='right'>
                    <h1>Login</h1>
                    <form>
                        <input type='text' placeholder='Username'/>
                        <input type='password' placeholder='password'/>
                        <button onClick={handleLogin} >Login</button>
                    </form>
                
            </div>

        </div>
    </div>
  )
}

export default Login