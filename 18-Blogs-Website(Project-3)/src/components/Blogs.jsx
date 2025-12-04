import './Blogs.css'
import { useContext } from "react"
import { AppContext } from "../context/AppContextProvider"
import Spinner from "./Spinner"

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
                <div className="card" key={post.id}>
                    <div className="title">
                        <h3>{post.title}</h3>
                    </div>


                    <div className="author">
                        <p>By <span>{post.author}</span> on <span>{post.category}</span></p>
                    </div>


                    <div className="date">
                        <p>Posted on {post.date}</p>
                    </div>

                    <div className="content">
                        <p>{post.content}</p>
                    </div>

                    <div className="tags">
                        {post.tags.map ( (tag, index) => {
                            return <span key={index}>{`#${tag }`}</span>
                        } )}
                    </div>
                </div>
            )
           }))
           )}
    </div>
    )
}
export default Blogs