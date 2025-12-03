import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
export const AppContext = createContext()

function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)



    async function fetchData(page = 1) {
        setLoading(true)
        let url = `${baseUrl}?page=${page}`
        try {
            let apiResponse = await fetch(baseUrl)
            let data = await apiResponse.json()
            console.log(data)
        } catch (error) {

        }
    }
    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchData
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}

export default AppContextProvider
