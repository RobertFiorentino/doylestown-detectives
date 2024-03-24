import React from "react"
import "./index.css"
import NavBar from "./NavBar.tsx"

export default function App() {

    const [storyStep, setStoryStep] = React.useState({
        step: "intro",
        isNavHidden: false
    })

    return (
        <main className="root">
            <div className="app--container">
                <h1>app</h1>
                {!storyStep.isNavHidden &&<NavBar />}
            </div>
        </main>
    )
}
