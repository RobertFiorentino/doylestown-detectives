import React from "react"
import "./index.css"

export default function NavBar() {

    function ok() {
        console.log("ok!")
    }

    return (
        <nav className="navBar">
            <button onClick={ok}>OK</button>
            <div className="navBar--bottom-container">
                <button>BACK</button>
                <button>HELP</button>
                <button>EXIT</button>
            </div>
        </nav>
    )
}
