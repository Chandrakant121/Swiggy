
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info
  return (
    <div className="res-card">
      <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} alt="Not rendered" />
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} min</h4>
    </div>
  )
}

export default RestaurantCard