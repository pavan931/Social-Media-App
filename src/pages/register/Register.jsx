import React from 'react'
import "./register.css"
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div className='register'>
        <div className='card'>
                <div className='left'>
                    <h1>Register</h1>
                    <form>
                        <input type='text' placeholder='Username'/>
                        <input type='email' placeholder='Email'/>
                        <input type='password' placeholder='Password'/>
                        <input type='text' placeholder='Name'/>
                        <button>Register</button>
                    </form>
                    </div>
                    <div className='right'>
                <h1>Lama Social.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Vel officia alias expedita 
                     libero aperiam voluptatum in
                      odio minus consequuntur. Neque voluptas voluptatem aliquid
                     beatae</p>
                     <span>Do you have an account?</span>

                     <Link to="/login"><button>Login</button></Link>
                     </div>
                
            </div>

        </div>
    
  )
}

export default Register