import "./Filter.css"
function Filter ({filterData, setCategory}) {

    function  filterHandler (title) {
        setCategory(title)
    }
    
    
    return (
        <div className="filter-container">
            {filterData.map ( (data) => {
                return (
                    <button key={data.id}  onClick={ () => filterHandler(data.title) }>{data.title}</button>
                )
            })}
        </div>
    )
}
export default Filter;