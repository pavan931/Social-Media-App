import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import "./home.css"
function Home() {
  return (
   <div className="home">
   <Stories/>
   <Posts/>
   </div>
  )
}

export default Home