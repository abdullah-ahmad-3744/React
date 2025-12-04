import { useContext } from "react"
import { AppContext } from "../context/AppContextProvider"

function Pagination () {
    const {page,totalPages,PageChangeHandler} = useContext(AppContext)
    return (
        <div className="pagination">
            <div className="buttons">
                {page > 1 &&
                (<button onClick={() => PageChangeHandler(page-1)}>Previous</button>)
                }
                {page < totalPages &&
                (<button  onClick={() => PageChangeHandler (page+1)}>Next</button>)
                }
                <div className="text">
                    <p> Page {page}of {totalPages}</p>
                </div>
            </div>
        </div>
    )
}

export default Pagination