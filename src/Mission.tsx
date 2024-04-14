import { StoryStep, StoryStepType, getStoryStep } from './StoryStep';

export interface Mission {
    steps: StoryStep[];
    currentStepIndex: number;
    getCurrentStep(): StoryStep;
    goToNextStep(): void;
    goToPreviousStep(): void;
}

export function createMission(steps: StoryStep[]): Mission {
    return {
        steps,
        currentStepIndex: 0,
        getCurrentStep() {
            return this.steps[this.currentStepIndex];
        },
        goToNextStep() {
            if (this.currentStepIndex < this.steps.length - 1) {
                this.currentStepIndex++;
            }
        },
        goToPreviousStep() {
            if (this.currentStepIndex > 0) {
                this.currentStepIndex--;
            }
        },
    };
}

export const sampleMission = createMission(
    [
        getStoryStep(StoryStepType.ImageText),
        getStoryStep(StoryStepType.Choice),
        getStoryStep(StoryStepType.VideoImageText),
        getStoryStep(StoryStepType.TileGame)
    ]
)

export const libraryMission = createMission(
    [
        {
            step: "image",
            image: "gold_panels.jpg",
            text: "Go to the middle of the library by these gold panels. Find the the bees and ladybugs on the wall where the arrow's pointing and hit OK."
        },
        {
            step: "image",
            image: "ladybugs.jpg",
            text: "Look at the ladybugs above the posters on the wall. How many ladybugs (not bees) do you see?"
        },
        {
            step: "choice",
            text: "Look at the ladybugs above the posters on the wall. How many ladybugs (not bees) do you see?",
            choiceObject: {
                choices: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                correctIndex: 2
            }
        },
        {
            step: "video",
            videoId: "i3JqgCmjLsk",
            text: "Correct!"
        }
    ]
)
