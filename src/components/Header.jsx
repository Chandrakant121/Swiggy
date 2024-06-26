import { useState } from "react"
import { Link } from "react-router-dom"
import { LOGO_URL } from "../utils/constatnts"
import useOnlineStatus from "../utils/useOnlineStatus"
import { useSelector } from "react-redux"

const Header = () => {

    const [btnName, setBtnName] = useState("Login")
    const status = useOnlineStatus()


    let changeBtn = () => {
        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
    }

    // subscribing to store using Selector 
    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src={LOGO_URL} alt="" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link className="link" to="">{status ? "" : "🔴"}</Link></li>
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/about">About Us</Link></li>
                    <li><Link className="link" to="/contact">Contact Us</Link></li>
                    <li><Link className="link" to="/cart">Cart {cartItems.length}</Link></li>
                    <li><button className="login" onClick={changeBtn}>{btnName}</button></li>
                </ul>
            </div>
        </div >
    )
}

export default Header