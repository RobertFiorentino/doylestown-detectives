import "./index.css"
import { StoryStep } from './StoryStep.tsx'
import ChoiceBox from './ChoiceBox.tsx'
import TileGame from './TileGame.tsx'
import Video from './Video.tsx'

export interface AppContentProps {
    storyStep: StoryStep;
    handleChoice: (correctChoice: boolean) => void;
    handleWinning: (replaceText: boolean) => void;
    goToNextStep: () => void | null;
}

export default function AppContent(props: AppContentProps) {
    console.log('Props:', JSON.stringify(props, null, 2));
    return (
        <div className="appContent">
            {props.storyStep.video && <Video videoSource={props.storyStep.video.videoSource}
                                             subtitles={props.storyStep.video.subtitles}
                                             handleVideoEnding={props.goToNextStep} />}
            {props.storyStep.image && <img src={`/images/${props.storyStep.image}`} className="appContent--image" />}
            {props.storyStep.tileGameObject && <TileGame tileGameObject={props.storyStep.tileGameObject} handleWinning={props.handleWinning} />}
            {props.storyStep.text && <h2>{props.storyStep.text}</h2>}
            {props.storyStep.choiceObject && <ChoiceBox choiceObject={props.storyStep.choiceObject} handleChoice={props.handleChoice} />}
        </div>
    )
}
