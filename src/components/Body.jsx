import { useState } from "react"
import { RestaurantCard } from "./RestorantCard"
import lists from "../utils/mockData"

const Body = () => {
    // Super powerfull local state variable => useState hook 
    // Lists is variable we can pass default value tothis variable => empty
    const [list, setLists] = useState(lists)

    const filterData = () => {
        const filteredList = lists.filter((res) => { return res.rating > 4 })
        setLists(filteredList)
    }


    return (
        <div className='body'>
            <div className="filter">
                <button className="filter-btn" onClick={filterData}>Top Rated Resturant</button>
            </div>
            <div className="res-container">
                {
                    list.map((restaurant) => {
                        return <RestaurantCard key={list.id} resData={restaurant} />
                    })
                }
            </div>
        </div >
    )
}

export default Body