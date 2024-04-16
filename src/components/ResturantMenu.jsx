import Shimmer from "./Shimmer"
import '../../src/App.css';
import { useParams } from "react-router-dom"
import useResturantMenu from "../utils/useResturantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams()
    const resInfo = useResturantMenu(resId)

    if (resInfo === null) { return <Shimmer /> }

    let menuCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    let { name, cuisines, costForTwoMessage, avgRating, totalRatingsString, city, areaName, cloudinaryImageId } = resInfo?.cards[2]?.card?.card?.info

    return (
        <div div className="menu" >
            <div className="menuCard">
                <div className="menu-img-div">
                    <div>
                        <h1>{name}</h1>
                        <h3>{avgRating}{" Star"} ({totalRatingsString}) - {costForTwoMessage}</h3>
                        <p className="cuisines">{cuisines.join(', ')}</p>
                        <p>{city}{" - "}{areaName}</p>
                    </div>
                    <img className="menu-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="Not rendered" />
                </div>
            </div>

            <div className="recommended-menu">
                <ul>
                    {menuCards.map(item =>
                        <li key={item.card.info.id} >{item.card.info.name} -{" Rs."}
                            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                        </li>)}
                </ul>
            </div>
        </div >
    )
}

export default RestaurantMenu