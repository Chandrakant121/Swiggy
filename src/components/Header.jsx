import { useState } from "react"
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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li><button className="login" onClick={changeBtn}>{btnName}</button></li>
                </ul>
            </div>
        </div >
    )
}

export default Header