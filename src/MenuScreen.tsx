import React from "react"
import "./index.css"
import { StoryStep } from './StoryStep.tsx'
import { Mission, libraryMission } from "./Mission.tsx"

interface MenuScreenProps {
    storyStep: StoryStep;
    handleClick: (mission: Mission) => void | null;
}

export default function MenuScreen({ storyStep, handleClick }: MenuScreenProps) {

    return (
        <div className="menuScreen">
            {storyStep.text && <h2>{storyStep.text}</h2>}
            <div className="menu--container">
                <div className="menu--container--buttons">
                    <ButtonWithSubheading
                        buttonText="The Case Of The Sticky Fingers"
                        subheadingText="Doylestown Boro Shops"
                        onClick={() => console.log("sticky fingers")} />
                    <ButtonWithSubheading
                        buttonText="Mercer's Mystery"
                        subheadingText="Mercer's Museum, Michener, Library"
                        onClick={() => console.log("mercer's mystery")} />
                    <ButtonWithSubheading
                        buttonText="The Library Litterbug!"
                        subheadingText="Doylestown Library"
                        onClick={() => handleClick(libraryMission)} />
                </div>
                <div className="menu--container--bottom">
                    <button className="menu--bottom-button">Contact Us!</button>
                </div>
            </div>
        </div>
    )
}

const ButtonWithSubheading: React.FC<{
    buttonText: string;
    subheadingText: string;
    onClick: () => void;
}> = ({ buttonText, subheadingText, onClick }) => {
    return (
        <div>
            <button className="menu--button" onClick={onClick}>{buttonText}</button>
            <div className="menu--button--subheading">{subheadingText}</div>
        </div>
    );
}