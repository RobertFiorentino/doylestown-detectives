import React from "react"
import "./index.css"
import { StoryStep } from './StoryStep.tsx'

export default function AppContent(props: { storyStep: StoryStep }) {

    return (
        <div className="appContent">
            {/* Consider moving video into a component */}
            {props.storyStep.videoId && <iframe
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    overflow: 'hidden'
                }}
            src={`https://www.youtube.com/embed/${props.storyStep.videoId}?autoplay=1&controls=0&enablejsapi=1`}
            title="YouTube video player"
            allow="autoplay; clipboard-write; encrypted-media"
            ></iframe>}
            {props.storyStep.image && <img src={props.storyStep.image} className="appContent--image"/>}
            {props.storyStep.text && <h2>{props.storyStep.text}</h2>}
        </div>
    )
}
