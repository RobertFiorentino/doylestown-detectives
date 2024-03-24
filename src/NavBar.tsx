import React from "react"
import "./index.css"

export default function NavBar() {
    return (
        <nav className="navBar">
            <button>OK</button>
            <div className="navBar--bottom-container">
                <button>BACK</button>
                <button>HELP</button>
                <button>EXIT</button>
            </div>
        </nav>
    )
}
