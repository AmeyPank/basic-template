import React from "react";
import "./Style.css"
const Navbar = ()=>{
    return (
        <nav className="navbar">
            <h1>Blog</h1>
            <div className="links">
                <a href="#">Home</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                <a href="#">Projects</a>
            </div>

        </nav>
    )
}
export default Navbar;