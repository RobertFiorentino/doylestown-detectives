import React from "react"
import "./index.css"
import { StoryStep } from './StoryStep.tsx'

export default function MenuScreen(props: { storyStep: StoryStep }) {

    return (
        <div className="menuScreen">
            {props.storyStep.text && <h2>{props.storyStep.text}</h2>}
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
                        buttonText="Book It!"
                        subheadingText="Doylestown Library"
                        onClick={() => console.log("book it")} />
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