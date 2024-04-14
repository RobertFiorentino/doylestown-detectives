import "./index.css"
import { StoryStep } from './StoryStep.tsx'
import ChoiceBox from './ChoiceBox.tsx'
import TileGame from './TileGame.tsx'

export interface AppContentProps {
    storyStep: StoryStep;
    handleChoice: (correctChoice: boolean) => void;
}

export default function AppContent(props: AppContentProps) {
    console.log('Props:', JSON.stringify(props, null, 2));
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
                src={`https://www.youtube.com/embed/${props.storyStep.videoId}?autoplay=1&controls=0`}
                title="YouTube video player"
                allow="autoplay; clipboard-write; encrypted-media"
            ></iframe>}
            {props.storyStep.image && <img src={`/images/${props.storyStep.image}`} className="appContent--image" />}
            {props.storyStep.tileGameObject && <TileGame tileGameObject={props.storyStep.tileGameObject} />}
            {props.storyStep.text && <h2>{props.storyStep.text}</h2>}
            {props.storyStep.choiceObject && <ChoiceBox choiceObject={props.storyStep.choiceObject} handleChoice={props.handleChoice} />}
        </div>
    )
}
