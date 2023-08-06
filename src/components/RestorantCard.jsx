import { CDN_URL } from "../utils/constatnts"

export const RestaurantCard = (props) => {
  const { resName, cuisine, rating, cost, deliveryTime } = props.resData
  return (
    <div className='res-card'>
      <img className='res-logo' src={CDN_URL} alt="Loading" />
      <h3>{resName}</h3>
      <h4><b>{cuisine}</b></h4>
      <h4><b>{rating}</b> Rating</h4>
      <h4><b>{cost} </b> Rs</h4>
      <h4><b>{deliveryTime}</b> minute</h4>
    </div>
  )
}