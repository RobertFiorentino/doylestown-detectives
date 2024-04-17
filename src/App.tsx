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

    const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

    const currentStoryStep = mission.getCurrentStep();

    const style = currentStoryStep.centerVertically ? { justifyContent: 'center' } : {}

    const disableOk = currentStoryStep.disableOk ||
            ((currentStoryStep.step === "choice" || currentStoryStep.step === "tile-game") && !answeredCorrectly)

    // TOOD: add showingInterstitial variable

    // TODO: save state to device and pull from there

    function handleChoice(correctChoice: boolean) {
        console.log(`The choice was ${correctChoice}`)
        if (correctChoice) {
            setAnsweredCorrectly(true)
            handleOk()
        }
    }

    function handleWinning(replaceText: boolean) {
        setAnsweredCorrectly(true);
        if (replaceText) {
            currentStoryStep.text = currentStoryStep.winningText
        }
    }

    function handleOk() {
        // TODO: Add skip logic
        // TODO: Go back to menu or something on the last step of the missions
        mission.goToNextStep();
        updateCurrentMission()
    }

    function handleBack() {
        mission.goToPreviousStep();
        updateCurrentMission()
    }

    function updateCurrentMission() {
        setMission({ ...mission});
        setAnsweredCorrectly(false)
    }

    return (
        <main className="root">
            <div className="app--container">
                {/* TODO: add showingInterstitial for help/wrong answer logic similar to menuscreen logic */}
                {currentStoryStep.step === "menu" && <MenuScreen storyStep={currentStoryStep} />}
                <div className="app--content-container" style={style}>
                    {currentStoryStep.step !== "menu" && <AppContent {...{ storyStep: currentStoryStep, handleChoice, handleWinning }} />}
                </div>
                {!currentStoryStep.isNavHidden &&<NavBar handleOk={handleOk} handleBack={handleBack} disableOk={disableOk}/>}
            </div>
        </main>
    )
}
