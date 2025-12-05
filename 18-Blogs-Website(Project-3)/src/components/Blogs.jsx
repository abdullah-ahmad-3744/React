import './Blogs.css'
import { useContext } from "react"
import { AppContext } from "../context/AppContextProvider"
import Spinner from "./Spinner"
import BlogDetails from '../components/BlogDetails'

function Blogs () {
    const {loading, posts} = useContext(AppContext)
    return(
    <div className="blogs">
        {loading ? 
        (<Spinner/>) :
         (posts.length === 0 ?
          (<div> <h3>No Posts Found...</h3></div>) :
           (posts.map ( (post) => {
            return (
                <BlogDetails key = {post.id} post = {post}/>
            )
           }))
           )}
    </div>
    )
}
export default Blogs