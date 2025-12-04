import { useContext } from "react"
import { AppContext } from "../context/AppContextProvider"
import Spinner from "./Spinner"
import Card from "./Card"

function Blogs () {
    const {loading, posts} = useContext(AppContext)
    return(
    <div className="blogs">
        {loading ? 
        (<Spinner/>) :
         (posts.length === 0 ?
          (<div> <h3>No Posts Found...</h3></div>) :
           (posts.map ( (post) => (<Card/>)))
           )}
    </div>
    )
}
export default Blogs