import { useEffect, useState } from "react"
import RestaurantCard from "./RestorantCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
// import lists from "../utils/mockData"

const Body = () => {
    const [resturantList, setresturantList] = useState([])
    const [filteredResturant, setFilteredResturant] = useState([])

    const [searchText, SetsearchText] = useState("")

    const filterData = () => {
        const filteredList = resturantList.filter((res) => { return res.info.avgRating > 4 })
        setFilteredResturant(filteredList)
    }

    const searchBtn = () => {
        const filteredResturant = resturantList.filter((res) => {
            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setFilteredResturant(filteredResturant)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8899131&lng=77.6471693&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const json = await data.json()
            // Optional Chaining
            console.log(resturantList)
            setresturantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        resturantList.length === 0 ? (<Shimmer />) : (
            <div className='body'>
                <div className="filter">
                    <button className="filter-btn" onClick={filterData}>Top Rated Resturant</button>
                    <div className="search">
                        <input type="text"
                            className="search-box"
                            value={searchText}
                            onChange={(e) => {
                                SetsearchText(e.target.value)
                            }}
                        />
                        <button className="search-btn" onClick={searchBtn}>Search</button>
                    </div>
                </div>
                <div className="res-container">
                    {
                        filteredResturant.map((restaurant) => {
                            return <Link className="Link" key={restaurant.info.id} to={"/resturants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                        })
                    }
                </div>
            </div >
        )
    )
}

export default Body