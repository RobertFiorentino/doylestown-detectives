import React, { useState } from "react"
import "./index.css"
import NavBar from "./NavBar.tsx"
import AppContent from "./AppContent.tsx"
import MenuScreen from "./MenuScreen.tsx"
//import { StoryStep, StoryStepType, getStoryStep } from "./StoryStep.tsx"
import { sampleMission, Mission } from "./Mission.tsx"

export default function App() {

    //const [storyStep, setStoryStep] = React.useState<StoryStep>(getStoryStep(StoryStepType.Choice))
    // TODO: Pull mission from MenuScreen select
    const [mission, setMission] = useState<Mission>(() => sampleMission);

    const currentStoryStep = mission.getCurrentStep();

    function handleChoice(correctChoice: boolean) {
        console.log(`The choice was ${correctChoice}`)
    }

    function handleOk() {
        mission.goToNextStep();
        setMission({ ...mission});
    }

    function handleBack() {
        mission.goToPreviousStep();
        setMission({ ...mission});
    }

    return (
        <main className="root">
            <div className="app--container">
                {currentStoryStep.step === "menu" && <MenuScreen storyStep={currentStoryStep} />}
                {currentStoryStep.step !== "menu" && <AppContent {...{ storyStep: currentStoryStep, handleChoice }} />}
                {!currentStoryStep.isNavHidden &&<NavBar handleOk={handleOk} handleBack={handleBack}/>}
            </div>
        </main>
    )
}
