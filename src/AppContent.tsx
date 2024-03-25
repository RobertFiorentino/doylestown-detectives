import React from "react"
import "./index.css"
import { StoryStep } from './StoryStep.tsx'

export default function AppContent(props: { storyStep: StoryStep }) {

    return (
        <div className="appContent">
            {props.storyStep.image && <img src={props.storyStep.image} className="appContent--image"/>}
            {props.storyStep.text && <h2>{props.storyStep.text}</h2>}
        </div>
    )
}
