import "./Filter.css"
import { filterData } from "../data";

function Filter () {
    
    return (
        <div className="filter-container">
            {filterData.map ( (data) => {
                return (
                    <button key={data.id}>{data.title}</button>
                )
            })}
        </div>
    )
}
export default Filter;