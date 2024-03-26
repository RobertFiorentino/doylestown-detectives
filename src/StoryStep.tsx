export interface StoryStep {
    step: string,
    isNavHidden?: boolean,
    image?: string,
    videoId?: string,
    text?: string
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

export function getStoryStep(storyString: string) {
    switch (storyString) {
        case "videoImageTextStoryStep":
            return videoImageTextStoryStep;
            break;
        case "imageTextStoryStep":
            return imageTextStoryStep;
            break;
        default: return videoImageTextStoryStep;
    }
}