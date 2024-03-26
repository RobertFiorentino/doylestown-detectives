import React from "react"
import "./index.css"
import NavBar from "./NavBar.tsx"
import AppContent from "./AppContent.tsx"
import { StoryStep, getStoryStep } from "./StoryStep.tsx"

export default function App() {

    const [storyStep, setStoryStep] = React.useState<StoryStep>(getStoryStep("imageTextStoryStep"))

    return (
        <main className="root">
            <div className="app--container">
                <AppContent storyStep={storyStep} />
                {!storyStep.isNavHidden &&<NavBar />}
            </div>
        </main>
    )
}
