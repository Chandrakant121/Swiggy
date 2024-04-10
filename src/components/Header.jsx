import { useState } from "react"
import { Link } from "react-router-dom"
import { LOGO_URL } from "../utils/constatnts"

const Header = () => {

    const [btnName, setBtnName] = useState("Login")


    let changeBtn = () => {
        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
    }

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src={LOGO_URL} alt="" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link className="Link" to="/">Home</Link></li>
                    <li><Link className="Link" to="/about">About Us</Link></li>
                    <li><Link className="Link" to="/contact">Contact Us</Link></li>
                    <li><Link className="Link" to="/cart">Cart</Link></li>
                    <li><button className="login" onClick={changeBtn}>{btnName}</button></li>
                </ul>
            </div>
        </div >
    )
}

export default Header