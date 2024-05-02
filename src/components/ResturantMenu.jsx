import Shimmer from "./Shimmer"
import '../../src/App.css';
import { useParams } from "react-router-dom"
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";
import { IMG_URL } from "../utils/constatnts";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams()
    const resInfo = useResturantMenu(resId)

    const [showIndex, setShowindex] = useState(null)

    if (resInfo === null) { return <Shimmer /> }

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        .filter((c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

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
                    <img className="menu-logo" src={IMG_URL + cloudinaryImageId} alt="Not rendered" />
                </div>
            </div>

            {/* Building accordions */}

            <div >
                {
                    categories.map((category, index) =>
                        <ResturantCategory
                            key={category?.card?.card?.title}
                            data={category}
                            showItems={index == showIndex ? true : false}
                            setShowindex={() => setShowindex(index)}
                        />)
                }
            </div>
        </div >
    )
}

export default RestaurantMenu