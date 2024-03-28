import { useState } from "react"
import RestaurantCard from "./RestorantCard"
import lists from "../utils/mockData"

const Body = () => {
    const [list, setLists] = useState(lists)

    const filterData = () => {
        const filteredList = lists.filter((res) => { return res.info.avgRating > 4 })
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
                        return <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    })
                }
            </div>
        </div >
    )
}

export default Body