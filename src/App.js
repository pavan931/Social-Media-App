import React, { useContext } from 'react'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { createBrowserRouter,Navigate,RouterProvider } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import { DarkModeContext } from './context/darkModeContext'
import { AuthContext } from './context/authContext'

function App() {

// const  {currentUser} = useContext(AuthContext)

const {currentUser} = useContext(AuthContext)

const {darkMode} = useContext(DarkModeContext)

console.log(darkMode);

  const Layout = ()=>{
    return(
      <div className='theme-dark'>
        <NavBar/> 
        <div style={{display:"flex"}}>
          <LeftBar/>
          <div style={{flex:6}}>
          <Outlet/>
          </div>
          <RightBar/>
        </div>

      </div>
    )
  }

  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>;

    }
    return children
  }

  const router = createBrowserRouter([
  
    {
      path:"/",
      element:(
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
      ),
      
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile",
          element:<Profile/>
        }
      ]
      
    },
    {
      path:"/login",
      element:<Login/>
      },
    {
      path:"/register",
      element:<Register/>
    }
  
  ])
  
  return (
    
<div>
  <RouterProvider router={router}/>
</div>
    
   
  )
}

export default App