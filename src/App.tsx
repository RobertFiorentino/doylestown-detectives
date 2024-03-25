import React from "react"
import "./index.css"
import NavBar from "./NavBar.tsx"
import AppContent from "./AppContent.tsx"
import { StoryStep } from "./StoryStep.tsx"

export default function App() {

    const [storyStep, setStoryStep] = React.useState<StoryStep>({
        step: "intro",
        isNavHidden: false,
        image: "https://tapinto-production.s3.amazonaws.com/uploads/articles/im/best_crop_fe6a7fc41e67683a6201_IMG_9780.JPG",
        videoId: "i3JqgCmjLsk",
        text: "Travel to Evolution Candy and press the OK button to contact the detectives."
    })

    return (
        <main className="root">
            <div className="app--container">
                <AppContent storyStep={storyStep} />
                {!storyStep.isNavHidden &&<NavBar />}
            </div>
        </main>
    )
}
