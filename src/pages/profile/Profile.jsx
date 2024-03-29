import "./profile.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import XIcon from '@mui/icons-material/X';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from "../../components/posts/Posts"

function Profile() {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="cover" />
        <img src="https://images.pexels.com/photos/4691234/pexels-photo-4691234.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="profilePic" />
        
      </div>
        <div className="profileContainer">
        <div className="uInfo">
        <div className="left">
          <a href="https://www.facebook.com/">
            <FacebookIcon fontSize="large"/>
          </a>
          <a href="https://www.instagram.com">
            <InstagramIcon fontSize="large"/>
          </a>
          <a href="https://www.instagram.com">
            <XIcon fontSize="large"/>
          </a>
          <a href="https://www.instagram.com">
            <LinkedInIcon fontSize="large"/>
          </a>
          <a href="https://www.instagram.com">
            <PinterestIcon fontSize="large"/>
          </a>
        </div>
        <div className="center">
          <span>Pavan Das</span>
          <div className="info">
            <div className="item">
              <PlaceIcon/>
              <span>USA</span>
            </div>
            <div className="item">
              <LanguageIcon/>
              <span>lama.dev</span>
            </div>
            

          </div>
          <button>Follow</button>
        </div>
        <div className="right">
          <EmailIcon/>
          <MoreVertIcon/>
        </div>
      </div>
      <Posts/>
        </div>

        
        </div>
    
  )
}

export default Profile