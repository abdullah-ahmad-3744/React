import { useLocation, useNavigate, useNavigation } from "react-router-dom"
import Header from "../components/Header"
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

function Category () {
    const navigate = useNavigate()
    const location = useLocation()
    const category = location.pathname.split('/').at(-1)
    return (
        <div className="cateogry">
            <Header />
            <div className="caterogy-page-content">

                <button  onClick={() =>navigate(-1) }>Back</button>

                <h2>Blogs on <span>{category}</span> </h2>
            </div>
            <Blogs/>
            <Pagination />
        </div>
    )
}
export default Category