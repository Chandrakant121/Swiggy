import ItemList from "./ItemList"


const ResturantCategory = (props) => {
    // console.log("props", props.data.card.card.title)
    let data = props.data.card.card
    return <div className="recommended-menu">
        {/* Header */}
        <div className="recommended-title">
            <h2>{data.title}({data.itemCards.length})</h2>
            <div>⬇️</div>
        </div>

        {/* Body */}
        <ItemList items={props.data.card.card.itemCards} />

    </div>
}

export default ResturantCategory