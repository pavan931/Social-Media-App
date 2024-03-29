import React, { useContext } from 'react'
import "./stories.css"
import { AuthContext } from '../../context/authContext'

function Stories() {

    const  {currentUser} = useContext(AuthContext)

    const stories = [{
        id:1,
        name:"Pavan Das",
        profilePic:"https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:2,
        name:"Pavan Das",
        profilePic:"https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:3,
        name:"Pavan Das",
        profilePic:"https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:4,
        name:"Pavan Das",
        profilePic:"https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }]

  return (
    <div className='stories'>
        <div className="story">
                    <img src={currentUser.profilePic} alt=''/>
                    <span>{currentUser.name}</span>
                    <button>+</button>
                </div>
        {
            stories.map((story)=>{
                return(
                <div className="story" key={story.id}>
                    <img src={story.profilePic} alt=''/>
                    <span>{story.name}</span>
                </div>)
            })
        }
    </div>
  )
}

export default Stories