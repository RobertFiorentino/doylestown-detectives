export interface StoryStep {
    step: string,
    isNavHidden?: boolean,
    image?: string,
    videoId?: string,
    text?: string
}

export enum StoryStepType {
    MenuScreen,
    VideoImageText,
    ImageText
}

export function getStoryStep(storyStep: StoryStepType): StoryStep {
    switch (storyStep) {
        case StoryStepType.MenuScreen:
            return menuScreenStoryStep;
            break;
        case StoryStepType.VideoImageText:
            console.log("video image")
            return videoImageTextStoryStep;
            break;
        case StoryStepType.ImageText:
            console.log("text image")
            return imageTextStoryStep;
            break;
    }
}

const menuScreenStoryStep: StoryStep = {
    step: "menu",
    isNavHidden: true,
    image: "",
    videoId: "",
    text: "Choose your adventure, Secret Seeker!"
}

const videoImageTextStoryStep: StoryStep = {
    step: "intro",
    isNavHidden: false,
    image: "https://tapinto-production.s3.amazonaws.com/uploads/articles/im/best_crop_fe6a7fc41e67683a6201_IMG_9780.JPG",
    videoId: "i3JqgCmjLsk",
    text: "Travel to Evolution Candy and press the OK button to contact the detectives."
}

const imageTextStoryStep: StoryStep = {
    step: "intro",
    isNavHidden: false,
    image: "https://tapinto-production.s3.amazonaws.com/uploads/articles/im/best_crop_fe6a7fc41e67683a6201_IMG_9780.JPG",
    videoId: "",
    text: "Travel to Evolution Candy and press the OK button to contact the detectives."
}