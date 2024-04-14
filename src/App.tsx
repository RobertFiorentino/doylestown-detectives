import { useState } from "react"
import "./index.css"
import NavBar from "./NavBar.tsx"
import AppContent from "./AppContent.tsx"
import MenuScreen from "./MenuScreen.tsx"
//import { StoryStep, StoryStepType, getStoryStep } from "./StoryStep.tsx"
import { Mission, libraryMission } from "./Mission.tsx"

export default function App() {

    // TODO: Pull mission from MenuScreen select
    const [mission, setMission] = useState<Mission>(() => libraryMission);

    const currentStoryStep = mission.getCurrentStep();

    function handleChoice(correctChoice: boolean) {
        console.log(`The choice was ${correctChoice}`)
        if (correctChoice) {
            handleOk()
        }
    }

    function handleOk() {
        // TODO: Add skip logic
        mission.goToNextStep();
        setMission({ ...mission});
    }

    function handleBack() {
        mission.goToPreviousStep();
        setMission({ ...mission});
    }

    const style = currentStoryStep.centerVertically ? { justifyContent: 'center' } : {}

    return (
        <main className="root">
            <div className="app--container">
                {currentStoryStep.step === "menu" && <MenuScreen storyStep={currentStoryStep} />}
                <div className="app--content-container" style={style}>
                    {currentStoryStep.step !== "menu" && <AppContent {...{ storyStep: currentStoryStep, handleChoice }} />}
                </div>
                {!currentStoryStep.isNavHidden &&<NavBar handleOk={handleOk} handleBack={handleBack}/>}
            </div>
        </main>
    )
}
