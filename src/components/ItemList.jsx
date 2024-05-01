import { IMG_URL } from "../utils/constatnts"

const ItemList = ({ items }) => {
    console.log(items)
    return <div>
        {
            items.map(item => <div key={item.card.info.id}>
                <div className="recommended-item">
                    <div>
                        <h2>{item.card.info.name}</h2>
                        <h3>₹ - {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</h3>
                        <span>{item.card.info.description}</span>
                    </div>

                    <div className="img-div">
                        <img className="item-logo" src={IMG_URL + item.card.info.imageId} alt="Not rendered" />
                        <button className="add-btn">Add+</button>
                    </div>
                </div>
            </div>)
        }

    </div >
}

export default ItemList