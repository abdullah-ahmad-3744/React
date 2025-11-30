import { Outlet } from 'react-router-dom'
import './Home.css'

function Home () {
    return (
        <div className="haome-page-container">
            <Outlet />
            <h1>Home Page</h1>
        </div>
    )
}
export default Home