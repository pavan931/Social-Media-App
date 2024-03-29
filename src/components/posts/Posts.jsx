import React from 'react'
import Post from '../post/Post'
import "./posts.css"
function Posts() {

  const posts = [
    {
      id:1,
      name:"Pavan Das",
      userId:1,
      profilePic:"https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
      img:"https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
      {
    id:2,
    name:"Pavan Das",
    userId:2,
    profilePic:"https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc : " consequatur numquam fugit officiis ab earum aliquid repellat suscipit modi dicta iusto porro pariatur repudiandae."
  },
  ]

  return (
    <div className='posts'>
      {posts.map(post=>
       
          <Post post = {post} key={post.id}/>
        
      )}
    </div>
  )
}

export default Posts