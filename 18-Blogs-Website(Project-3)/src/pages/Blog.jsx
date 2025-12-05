import { useContext, useEffect, useState } from "react"
import Header from "../components/Header"
import { useLocation, useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContextProvider"
import { baseUrl } from "../baseUrl"

function Blog () {
    const [blog,setBlog] = useState(null)
    const [relatedBlogs, setRelatedBlogs] = useState([])
    const {loading , setLoading} = useContext(AppContext)
    const navigation = useNavigate();
    const location = useLocation()
    const blogId = location.pathname.split('/').at(-1)
    async function fetchRelatedBlogs() {
        setLoading(true)
        let url = `${baseUrl}?blogId=${blogId}`
        try {
            const apiResonse = await fetch(url)
            const data = await apiResonse.json()
            setBlog(data.blog)
            setRelatedBlogs(data.relatedBlogs)
        } catch (error) {
            console.log("Error in fetching related blogs")
            setBlog(null)
            setRelatedBlogs([])
        }
    }


    useEffect ( () => {
        if (blogId) {
            fetchRelatedBlogs()
        }
    }, [location.pathname])
    return (
        <div className="blog">
            <Header />
            <div className="blog-content">

                <div className="button">
                    <button onClick={() => navigation(-1)}>Back</button>
                </div>

                {loading ? (<p>Loading</p>) :
                 blog ? 
                 (<div>
                    <BlogDetails post = {blog}/>
                    <h2>Related Blogs</h2>
                    {relatedBlogs.map( (post) => {
                        return(
                            <div key={post.id}>
                                <BlogDetails post = {blog}/>
                            </div>
                        )
                    })}
                 </div>) :
                  (<p>No Blog Found</p>)}


            </div>
        </div>
    )
}
export default Blog