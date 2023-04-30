import React from "react";

export default function Navbar(){
    return (
        <nav className="navbar">
                <div className="toggle">
                    <ion-icon name="menu"></ion-icon>
                </div>
                <div className="search-box">
                    <ion-icon name="search"></ion-icon>
                    <input type="text" placeholder="Search Word..." id="search-input"/>
                    <ion-icon name="arrow-forward-circle-sharp" className="search-btn" id="search-btn"></ion-icon>
                </div>
                <div className="user-box">
                    <img src= "images/giphy.gif" alt="Dictionary GIF"/>
                </div>
        </nav>
    )
}