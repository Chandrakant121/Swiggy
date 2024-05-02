import { useState } from "react"
import ItemList from "./ItemList"


const ResturantCategory = ({ data, showItems, setShowindex }) => {

    const handleClick = () => {
        setShowindex()
    }

    return <div className="recommended-menu">
        {/* Header */}
        <div className="recommended-title" onClick={handleClick}>
            <h3>{data.card?.card?.title}({data.card.card.itemCards.length})</h3>
            <div>⬇️</div>
        </div>

        {/* Body */}
        {showItems && <ItemList items={data.card.card.itemCards} />}

    </div>
}

export default ResturantCategory