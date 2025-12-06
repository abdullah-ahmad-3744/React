import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

function Home() {
    const apiUrl = 'https://fakestoreapi.com/products';
    const [loading, setLoading] = useState(false)
    const [posts , setPosts] = useState([])


     async function fetchApiData() {
        setLoading(true)

            try {
                const apiResponse = await fetch(apiUrl);
                const data = await apiResponse.json()
                setPosts(data)
            } catch (error) {
                console.log("Error in Fetching data...", error)
                setPosts([])
            }
            setLoading(false)
        }

        useEffect ( () => {
            fetchApiData()
        }, [])
        return (
        <div className="home">
            {loading ? (<Spinner/>) :
             posts.length > 0 ? 
             (<div>
                {posts.map ((post) => {
                    return (
                        <Product key={post.id}  post ={post}/>
                    )
                })}
             </div>) : 
             (<div> <p>No Post Found</p></div>)}
        </div>
    )
}
export default Home