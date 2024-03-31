import React from "react";
import "./index.css"

export default function ChoiceBox({ choices }: { choices: string[] }) {
    console.log(`choices: ${choices}`)
    const buttons = choices.map(choice => <button className="choice--button">{choice}</button>)
    return (
        <div className="choiceBox">
            {buttons}
        </div>
    )
}
