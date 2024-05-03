import { ChoiceObject } from "./ChoiceBox.tsx"
import { TileGameObject } from "./TileGame.tsx"
import { VideoProps } from "./Video.tsx"

export interface StoryStep {
    step: string,
    centerVertically?: boolean,
    isNavHidden?: boolean,
    disableOk?: boolean,
    image?: string,
    video?: VideoProps,
    text?: string,
    winningText?: string,
    helpText?: string,
    music?: string,
    choiceObject?: ChoiceObject,
    tileGameObject?: TileGameObject,
    suppressGoToNextStep?: boolean
}

// TODO: change this type to be the type shown in the steps (e.g. choice) and create a new enum for premades
export enum StoryStepType {
    MenuScreen,
    VideoImageText,
    ImageText,
    Choice,
    TileGame
}

export function getStoryStep(storyStep: StoryStepType): StoryStep {
    console.log(`Start StoryStep ${storyStep}`)
    switch (storyStep) {
        case StoryStepType.MenuScreen:
            return menuScreenStoryStep;
            break;
        case StoryStepType.VideoImageText:
            return videoImageTextStoryStep;
            break;
        case StoryStepType.ImageText:
            return imageTextStoryStep;
            break;
        case StoryStepType.Choice:
            return choiceStoryStep;
            break;
        case StoryStepType.TileGame:
            return tileGameStoryStep;
            break;
    }
}

const menuScreenStoryStep: StoryStep = {
    step: "menu",
    isNavHidden: true,
    text: "Choose your adventure, Secret Seeker!"
}

const videoImageTextStoryStep: StoryStep = {
    step: "video",
    image: "https://tapinto-production.s3.amazonaws.com/uploads/articles/im/best_crop_fe6a7fc41e67683a6201_IMG_9780.JPG",
    video: {
       videoSource: "Library-Scene-2.mp4"
    },
    text: "Travel to Evolution Candy and press the OK button to contact the detectives."
}

const imageTextStoryStep: StoryStep = {
    step: "image",
    image: "https://tapinto-production.s3.amazonaws.com/uploads/articles/im/best_crop_fe6a7fc41e67683a6201_IMG_9780.JPG",
    text: "Travel to Evolution Candy and press the OK button to contact the detectives."
}

const choiceStoryStep: StoryStep = {
    step: "choice",
    text: "Look at the rainbow flag painted on the ground. What color is the fourth stripe?",
    choiceObject: {
        choices: [
            "Red",
            "Pink",
            "Blue",
            "Yellow"
        ],
        correctIndex: 1
    }
}

const tileGameStoryStep: StoryStep = {
    step: "tile-game",
    centerVertically: true,
    text: "Touch the numbers on the screen to enter the year the Historical Society made this monument",
    tileGameObject: {
        startingCombination: [1, 9, 6, 8],
        correctCombination: [1, 9, 6, 9]
    }
}