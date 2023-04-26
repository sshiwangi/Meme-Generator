import React from "react"
import "../App.css"

export default function Header() {
    return (
        <header className="header">
            <nav className="nav-bar">
                <div className="nav-bar-item-container"> 
                    <div className="meme-icon">
                        <img className="header-img" src={require("../images/meme.png")}/>
                    </div>
                    <div className="header-title">Meme Generator</div>
                </div>
                 
            </nav>
        </header>
    )
}