import { useLocation, useNavigation } from "react-router-dom"
import Header from "../components/Header"
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

function Category () {
    const navigation = useNavigation()
    const location = useLocation()
    const category = location.pathname.split('/').at(-1)
    return (
        <div className="cateogry">
            <Header />
            <div className="caterogy-page-content">

                <button  onClick={() =>navigation(-1) }>Back</button>

                <h2>Blogs on <span>{Category}</span> </h2>
            </div>
            <Blogs/>
            <Pagination />
        </div>
    )
}
export default Category