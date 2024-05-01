import { useState } from "react"
import ItemList from "./ItemList"


const ResturantCategory = (props) => {

    const [showItmes, setShowitms] = useState(false)

    const handleClick = () => {
        setShowitms(!showItmes)
    }

    let data = props.data.card.card
    return <div className="recommended-menu">
        {/* Header */}
        <div className="recommended-title" onClick={handleClick}>
            <h2>{data.title}({data.itemCards.length})</h2>
            <div>⬇️</div>
        </div>

        {/* Body */}
        {showItmes && <ItemList items={props.data.card.card.itemCards} />}

    </div>
}

export default ResturantCategory