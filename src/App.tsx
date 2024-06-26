import { useState } from "react"
import "./index.css"
import NavBar from "./NavBar.tsx"
import AppContent from "./AppContent.tsx"
import MenuScreen from "./MenuScreen.tsx"
import InterstitialScreen from "./InterstitialScreen.tsx";
import { Mission, menuMission } from "./Mission.tsx"

export default function App() {

    const [mission, setMission] = useState<Mission>(() => menuMission);

    const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

    const [showInterstitial, setShowInterstitial] = useState(false);

    const currentStoryStep = mission.getCurrentStep();

    const style = currentStoryStep.centerVertically ? { justifyContent: 'center' } : {}

    const disableOk = currentStoryStep.disableOk ||
               currentStoryStep.step === "video" ||
            ((currentStoryStep.step === "choice" || currentStoryStep.step === "tile-game") && !answeredCorrectly)

    const handleSkip = currentStoryStep.step === "video" ? handleOk : null;

    const [interstitialText, setInterstitialText] = useState("")

    // TODO: save state to device and pull from there

    function handleChoice(correctChoice: boolean) {
        console.log(`The choice was ${correctChoice}`)
        if (correctChoice) {
            setAnsweredCorrectly(true)
            handleOk()
        } else {
            setInterstitialText("That answer is incorrect. Do not guess - press the Back button to see the question again or the Help button if you need a hint.")
            toggleInterstitial()
        }
    }

    function handleWinning(replaceText: boolean) {
        setAnsweredCorrectly(true);
        if (replaceText) {
            currentStoryStep.text = currentStoryStep.winningText
        }
    }

    function handleOk() {
        // TODO: Go back to menu or something on the last step of the missions
        console.log(`currentstepindex: ${mission.currentStepIndex}, stepsLength: ${mission.steps.length}`)
        if (mission.currentStepIndex >= mission.steps.length - 1) {
            handleExit()
        } else {
            mission.goToNextStep();
            updateCurrentMission()
        }
    }

    function handleBack() {
        mission.goToPreviousStep();
        updateCurrentMission()
    }

    function handleHelp() {
        setInterstitialText(currentStoryStep.helpText ?? "Go back to the last step or ask a library worker for directions to the section you're looking for.")
        toggleInterstitial()
    }

    function handleExit() {
        setMission(menuMission)
    }

    function updateCurrentMission() {
        setMission({ ...mission});
        setAnsweredCorrectly(false)
    }

    function toggleInterstitial() {
        setShowInterstitial(!showInterstitial);
    }

    function chooseMission(mission: Mission) {
        setMission(mission)
    }

    return (
        <main className="root">
            <div className="app--container">
                {showInterstitial && <InterstitialScreen onClose={toggleInterstitial} text={interstitialText} />}
                {currentStoryStep.step === "menu" && <MenuScreen storyStep={currentStoryStep} handleClick={chooseMission} />}
                <div className="app--content-container" style={style}>
                    {currentStoryStep.step !== "menu" && <AppContent {...{ storyStep: currentStoryStep, handleChoice, handleWinning, goToNextStep: handleOk }} />}
                </div>
                {!currentStoryStep.isNavHidden &&<NavBar handleOk={handleOk}
                                                         handleBack={mission.currentStepIndex != 0 ? handleBack : undefined}
                                                         handleSkip={handleSkip ?? undefined}
                                                         handleHelp={currentStoryStep.helpText ? handleHelp : undefined}
                                                         handleExit={handleExit}
                                                         disableOk={disableOk}/>}
            </div>
        </main>
    )
}
