import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import './Home.css';

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
  {loading ? (
    <Spinner />
  ) : posts.length > 0 ? (
    <div className="product-grid">
      {posts.map((post) => (
        <Product key={post.id} post={post} />
      ))}
    </div>
  ) : (
    <div className="no-data">
      <p>No Data Found</p>
    </div>
  )}
</div>

    )
}
export default Home