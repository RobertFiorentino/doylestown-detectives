import React from "react";
import "./index.css"

export interface ChoiceObject {
    choices: string[],
    correctIndex: number
}

export interface ChoiceBoxProps {
    choiceObject: ChoiceObject;
    handleChoice: (correctChoice: boolean) => void;
}

export default function ChoiceBox({ choiceObject, handleChoice }: ChoiceBoxProps) {
    console.log(`choice object: ${choiceObject}`)
    const buttons = choiceObject.choices.map((choice, index) => (
        <button className="choice--button" onClick={() => handleChoice(index === choiceObject.correctIndex)} key={index}>
            {choice}
        </button>
        ));
    return (
        <div className="choiceBox">
            {buttons}
        </div>
    )
}
