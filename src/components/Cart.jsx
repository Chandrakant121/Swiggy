import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/redux/slice/cartSlice"


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        dispatch(clearCart(item))
    }

    return <div className="cart-container" >
        <button className="clear-btn" onClick={handleAddItem}>Clear cart</button>
        {cartItems.length === 0 && <h1>Cart is empty. Add items to the cart</h1>}
        <div className="cart">
            <ItemList items={cartItems}></ItemList>
        </div>

    </div >
}

export default Cart