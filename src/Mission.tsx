import { StoryStep } from './StoryStep';

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
        {
            step: "video",
            image: "https://tapinto-production.s3.amazonaws.com/uploads/articles/im/best_crop_fe6a7fc41e67683a6201_IMG_9780.JPG",
            videoId: "i3JqgCmjLsk",
            text: "Travel to Evolution Candy and press the OK button to contact the detectives."
        },
        {
            step: "image",
            image: "https://tapinto-production.s3.amazonaws.com/uploads/articles/im/best_crop_fe6a7fc41e67683a6201_IMG_9780.JPG",
            text: "Travel to Evolution Candy and press the OK button to contact the detectives."
        },
        {
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
    ]
)
