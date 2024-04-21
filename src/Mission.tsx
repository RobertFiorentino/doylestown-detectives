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
            step: "video",
            videoId: "placeholder",
            text: "placeholder - intro video"
        },
        {
            step: "image",
            image: "placeholder"
        },        {
            step: "video",
            videoId: "placeholder",
            text: "placeholder - explain case"
        },
        {
            step: "image",
            image: "gold_panels.jpg",
            text: "Go to the middle of the library by these gold panels. Find the the bees and ladybugs on the wall where the arrow's pointing and press OK."
        },
        {
            step: "image",
            image: "bees.jpg",
            text: "Look at the bees above the posters on the wall. How many bees (not ladybugs) do you see?"
        },
        {
            step: "choice",
            text: "Look at the bees above the posters on the wall. How many bees (not ladybugs) do you see?",
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
            videoId: "",
            text: "placeholder - finds honey!"
        },
        {
            step: "image",
            image: "penny_machine_far.jpg",
            text: "Go near the library entrance to the Press A Penny machine.",
            helpText: "Go to the main library entrance facing the Mercer Museum castle."
        },
        {
            step: "image",
            image: "penny_machine_near.jpg",
            text: "Look at the picture on the machine. What is written on this coin?"
        },
        {
            step: "choice",
            text: "Look at the picture on the machine. What is written on this coin?",
            choiceObject: {
                choices: [
                    "BOOK",
                    "LOVE",
                    "PAGE",
                    "READ"
                ],
                correctIndex: 3
            }
        },
        {
            step: "video",
            videoId: "",
            text: "placeholder - finds magazine"
        },
        {
            step: "image",
            image: "magazines_far.jpg",
            text: "Go to the Magazines section and press OK."
        },
        {
            step: "video",
            videoId: "",
            text: "placeholder - notices shelf"
        },
        {
            step: "image",
            image: "magazines_near.jpg",
            text: "Stand directly under the Magazines sign and press OK."
        },
        {
            step: "image",
            image: "book_shelf_far.jpg",
            text: "Turn left and walk up to this book shelf then press OK."
        },
        {
            step: "image",
            image: "book_shelf_near.jpg",
            text: "Find the missing letters in this sign and press OK."
        },
        {
            step: "tile-game",
            centerVertically: true,
            text: "Touch the letters on the screen to match the letters in the right sign.",
            winningText: "Correct! Press OK to continue.",
            tileGameObject: {
                startingCombination: ["A", "B", "C", "D"],
                correctCombination: ["R", "Y", "S", "I"]
            }
        },
        {
            step: "video",
            videoId: "",
            text: "placeholder - finds book"
        },
        {
            step: "image",
            image: "clock_far.jpg",
            text: "Go to the children's play area. Look for a gold clock on the wall that is surrounded by a bird."
        },
        {
            step: "image",
            image: "clock_near.jpg",
            text: "What type of bird is at the bottom of the clock?"
        },
        {
            step: "choice",
            text: "What type of bird is at the bottom of the clock?",
            choiceObject: {
                choices: [
                    "Flamingo",
                    "Peacock",
                    "Chicken",
                    "Penguin"
                ],
                correctIndex: 1
            }
        },
        {
            step: "video",
            videoId: "",
            text: "placeholder - finale"
        },
        {
            step: "image",
            image: "",
            text: "placeholder - mission complete"
        }
    ]
)
