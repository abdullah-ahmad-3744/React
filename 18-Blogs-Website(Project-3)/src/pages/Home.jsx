import Blogs from "../components/Blogs"
import Header from "../components/Header"
import Pagination from "../components/Pagination"
import './Home.css'
function Home() {
    return (
        <div className="home">
            <Header />
            <Blogs />
            <Pagination />
        </div>
    )
}
export default Home