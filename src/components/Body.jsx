import RestaurantCard from "./RestorantCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import useBodyResdata from "../utils/useBodyResdata"
// import lists from "../utils/mockData"

const Body = () => {

    const { resturantList, filteredResturant, filterData, searchBtn, searchText, SetsearchText } = useBodyResdata()
    const onlineStatus = useOnlineStatus()

    if (onlineStatus == false) {
        return (
            <h1 className="offline">Looks like you are Offline !! Please check your internet connection</h1>)
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
                            return <Link className="link" key={restaurant.info.id} to={"/resturants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                        })
                    }
                </div>
            </div >
        )
    )
}

export default Body