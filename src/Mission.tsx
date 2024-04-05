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
        getStoryStep(StoryStepType.TileGame)
    ]
)
