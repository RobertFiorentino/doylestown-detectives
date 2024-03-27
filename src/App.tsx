import React from "react"
import "./index.css"
import NavBar from "./NavBar.tsx"
import AppContent from "./AppContent.tsx"
import MenuScreen from "./MenuScreen.tsx"
import { StoryStep, StoryStepType, getStoryStep } from "./StoryStep.tsx"

export default function App() {

    const [storyStep, setStoryStep] = React.useState<StoryStep>(getStoryStep(StoryStepType.MenuScreen))

    return (
        <main className="root">
            <div className="app--container">
                {storyStep.step === "menu" && <MenuScreen storyStep={storyStep} />}
                {storyStep.step !== "menu" && <AppContent storyStep={storyStep} />}
                {!storyStep.isNavHidden &&<NavBar />}
            </div>
        </main>
    )
}
