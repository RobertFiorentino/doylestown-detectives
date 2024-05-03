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
            video: {
                videoSource: "Library-Scene-1.mp4",
                subtitles: [
                    { startTime: 3, endTime: 5, text: "Aaaachoo!" },
                    { startTime: 6, endTime: 8.2, text: "Finn! Can you cover your mouth?" },
                    { startTime: 8.4, endTime: 11.3, text: "I'm sorry my allergies are killing me right now." },
                    { startTime: 11.3, endTime: 13.8, text: "Let's return your overdue books and get out of here." },
                    { startTime: 14, endTime: 15.8, text: "Yeah...it might take a bit." },
                    { startTime: 19, endTime: 20, text: "Excusez moi." },
                    { startTime: 20, endTime: 21.5, text: "Aaaachoo!" },
                    { startTime: 22, endTime: 23.5, text: "Thank you for your service." },
                    { startTime: 23.6, endTime: 26.7, text: "Hold on mister. You have late fees!" },
                    { startTime: 29.5, endTime: 30.5, text: "WOAH!" },
                    { startTime: 31, endTime: 32.7, text: "That's more than my allowance." },
                    { startTime: 33, endTime: 36, text: "That's more than your allowance for 2.7 years." },
                    { startTime: 36.2, endTime: 38.2, text: "Hey, can we work something out?" },
                    { startTime: 38.3, endTime: 40.2, text: "Are there any mysteries you need solved?" },
                    { startTime: 40.5, endTime: 42.2, text: "Well now that you mention it..." },
                    { startTime: 42.2, endTime: 44.7, text: "There has been a string of vandalism here lately." },
                    { startTime: 45, endTime: 47.6, text: "But how could you help? Who are you?" },
                    { startTime: 48, endTime: 49.1, text: "We're..." },
                    { startTime: 49.2, endTime: 53.5, text: "THE DOYLESTOWN DETECTIVES!" }
                  ]
            }
        },
        {
            step: "image",
            image: "library-mission.png",
            music: "Mission-Theme.mp3"
        },        {
            step: "video",
            video: {
                videoSource: "Library-Scene-2.mp4",
                subtitles: [
                    { startTime: 2.7, endTime: 4, text: "Ummm...." },
                    { startTime: 4, endTime: 5.7, text: "Ok..." },
                    { startTime: 5.7, endTime: 8.5, text: "Someone has been destroying the artwork around the library." },
                    { startTime: 8.5, endTime: 12, text: "If you can figure out who, we'll call it even on the late fees." },
                    { startTime: 12.1, endTime: 14.6, text: "The Doylestown Detectives are on it!" },
                    { startTime: 14.8, endTime: 16.9, text: "Do you have any clues?" },
                    { startTime: 17, endTime: 21, text: "Take a look at the ladybugs and bees. It's a mess over there!" }
                  ]
            }
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
            video: {
                videoSource: "tempscene.mp4"
            }
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
            //videoId: "",
            text: "placeholder - finds magazine"
        },
        {
            step: "image",
            image: "magazines_far.jpg",
            text: "Go to the Magazines section and press OK."
        },
        {
            step: "video",
            //videoId: "",
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
            //videoId: "",
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
            //videoId: "",
            text: "placeholder - finale"
        },
        {
            step: "image",
            image: "",
            text: "placeholder - mission complete"
        }
    ]
)
