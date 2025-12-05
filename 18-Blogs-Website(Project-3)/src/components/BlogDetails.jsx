import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";

function BlogDetails ({post}) {
    return (
        <div className="blog-details">
            <NavLink to={`/blog/${post.id}`} >
            <span>{post.title}</span>
            </NavLink>
            <p>By <span>{post.author} </span> on {" "}
            <NavLink  to={`/categories/${post.category.replaceAll('-', ' ')}`}>
                <span>{post.category}</span>
            </NavLink>
            </p>

            <p>Posted on <span>{post.date}</span> </p>

            <p>{post.content}</p>

            <div className="tags">
                {post.tags.map( (tag, index) => {
                    return (
                        <NavLink to={`/tags/${tag.replaceAll('-', ' ')}`} key={index} >
                            <span>#{tag}</span>
                        </NavLink>
                    )
                } )}
            </div>
        </div>
    )
}
export default BlogDetails