import React, { useContext } from 'react'
import "./comments.css"
import {AuthContext} from "../../context/authContext"
function Comments() {

    const {currentUser} = useContext(AuthContext)
const comments = [
    {
        id:1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        name:"Pavan Das",
        userId:1,
        profilePic:"https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id:2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        name:"Pavan Das",
        userId:2,
        profilePic:"https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      }
      
]

  return (
    <div className='comments'>
        <div className="write">
            <img src={currentUser.profilePic} alt=''/>
            <input type='text' placeholder='write a comment'/>
            <button>Send</button>
        </div>
       { comments.map(comment =>
            
                <div className="comment">
                   <img src={comment.profilePic} alt=''/>
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>1 hour ago</span>
                </div>
            
        )
    }
        </div>
  )
}

export default Comments