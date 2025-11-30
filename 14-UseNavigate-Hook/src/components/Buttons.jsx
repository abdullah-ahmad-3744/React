import { useNavigate } from 'react-router-dom'
import './Buttons.css'
function Buttons () {

    const navigate = useNavigate ()

    function HomePageNavigator () {
        navigate("/")

    }

    function AboutPageNavigator () {
        navigate("/about")
    }

    function ServicesPageNavigator () {
        navigate ("/services")
    }

    function SupportPageNavigator () {
        navigate("/support")
    }

    return( 
        <div className="buttons">
            <button  onClick={HomePageNavigator}>Go To Home Page</button>
            <button  onClick={AboutPageNavigator}>Go to About Page</button>
            <button  onClick={ServicesPageNavigator}>Go to Services Page</button>
            <button  onClick={SupportPageNavigator}>Go to Support Page</button>
        </div>
    )
}
export default Buttons