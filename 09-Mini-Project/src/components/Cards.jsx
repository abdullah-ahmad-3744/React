import "./Cards.css"
import { apiUrl } from "../data";
import { useEffect } from "react";

function Cards () {


    useEffect ( () => {
        async function fetchedData(params) {
            const apiResponse = await fetch(apiUrl)
            const jsonData = await apiResponse.json()
            console.log("Api Data", jsonData);
            
        }
        fetchedData()
    },[])
    
    return (
        <div className="cards-container">

        </div>
    )
}
export default Cards;