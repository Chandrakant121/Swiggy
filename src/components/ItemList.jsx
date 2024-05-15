import { useDispatch } from "react-redux"
import { IMG_URL } from "../utils/constatnts"
import { addItem } from "../utils/redux/slice/cartSlice"

const ItemList = ({ items }) => {
    
    const dispatch = useDispatch()
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return <div>
        {
            items.map(item => <div key={item.card.info.id}>
                <div className="recommended-item">
                    <div>
                        <h3>{item.card.info.name}</h3>
                        <h4>₹ - {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</h4>
                        <span>{item.card.info.description}</span>
                    </div>

                    <div className="img-div">
                        <img className="item-logo" src={IMG_URL + item.card.info.imageId} alt="Not rendered" />
                        <button className="add-btn" onClick={() => handleAddItem(item)} >Add+</button>
                    </div>
                </div>
            </div>)
        }

    </div >
}

export default ItemList