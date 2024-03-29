import React, { useContext } from 'react'
import "./navBar.css"
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';



function NavBar() {
  const {toggle,darkMode} = useContext(DarkModeContext)

  const{currentUser} = useContext(AuthContext)
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/" style={{textDecoration:"none"}}>
        <span>lamasocial</span>
        </Link>
        <HomeIcon/>
        {darkMode ? <DarkModeIcon onClick={toggle}/> : <WbSunnyIcon onClick={toggle}/>}
        <GridViewIcon/>
        <div className='search'>
          <SearchIcon/>
          <input type='text' placeholder='search'/>
        </div>
      </div>
      <div className='right'>
        <PersonIcon/>
        <EmailIcon/>
        <NotificationsIcon/>
        <div className='user'>
          <img src="https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=''/>
          <span>Pavan Das</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar