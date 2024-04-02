import { useEffect, useState } from "react"
import RestaurantCard from "./RestorantCard"
import Shimmer from "./Shimmer"
// import lists from "../utils/mockData"

const Body = () => {
    const [resturantList, setresturantList] = useState([])

    const filterData = () => {
        const filteredList = resturantList.filter((res) => { return res.info.avgRating > 4 })
        setresturantList(filteredList)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8899131&lng=77.6471693&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const json = await data.json()
            // Optional Chaining
            setresturantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        catch (err) {
            console.log(err)
        }
    }

    if (resturantList.length === 0) {
        return <Shimmer />
    }

    return (
        <div className='body'>
            <div className="filter">
                <button className="filter-btn" onClick={filterData}>Top Rated Resturant</button>
            </div>
            <div className="res-container">
                {
                    resturantList.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    })
                }
            </div>
        </div >
    )
}

export default Body