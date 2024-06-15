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

export const menuMission = createMission(
    [
        {
            step: "menu",
            isNavHidden: true
        }
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
            text: "Go to the middle of the library by these gold panels. Find the the bees and ladybugs on the wall where the arrow's pointing and press OK.",
            helpText: "Show the picture to a library staff member and ask where the gold panels are."
        },
        {
            step: "image",
            image: "bees.jpg",
            text: "Look at the bees above the posters on the wall. How many bees (not ladybugs) do you see? Press OK when you have the answer.",
            helpText: "If you don't know where the bee and ladybug wall is, it's the left wall as you walk toward the childrens play area in the back corner of the library. Ask a staff member if you have trouble finding it."
        },
        {
            step: "choice",
            text: "Look at the bees above the posters on the wall. How many bees (not ladybugs) do you see?",
            helpText: "Remember to only count the bee decorations above the poster. If you aren't in the right spot, hit the Back button '<'.",
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
                videoSource: "Library-Scene-3.mp4",
                subtitles: [
                    { startTime: 2.5, endTime: 3.3, text: "Ummm...." },
                    { startTime: 3.8, endTime: 5.3, text: "These kids look pretty sus." },
                    { startTime: 5.3, endTime: 7.2, text: "There must be more clues..." },
                    { startTime: 8.0, endTime: 10.7, text: "Freeze! Where were you the night of the 18th?!" },
                    { startTime: 11.1, endTime: 14.5, text: "I'm this many yeows old!" },
                    { startTime: 15, endTime: 16.8, text: "...Likely story." },
                    { startTime: 17.0, endTime: 19.7, text: "Stop hassling babies. Look at this!" },
                    { startTime: 19.8, endTime: 21.7, text: "Is that...glue?" },
                    { startTime: 22.0, endTime: 24.7, text: "No, it came from the bee statue. It's honey!" },
                    { startTime: 25.1, endTime: 27.3, text: "Well that's one thing you're not allergic to." },
                    { startTime: 27.6, endTime: 31.2, text: "You're right, I stopped sneezing. Hmmm..." },
                    { startTime: 31.3, endTime: 33.5, text: "Hey look! There's a trail." },
                    { startTime: 33.5, endTime: 35.2, text: "Guess the crook didn't eat all the honey." },
                    { startTime: 35.3, endTime: 40, text: "Maybe he's not eating it at all. Let's follow that trail to the front entrance." },
                    { startTime: 40.6, endTime: 43.1, text: "And hey! I've got my eye on you." },
                    { startTime: 43.3, endTime: 47, text: "I'm a pwincess!" }
                  ]
            }
        },
        {
            step: "image",
            image: "penny_machine_far.jpg",
            text: "Go near the library entrance to the Press A Penny machine.",
            helpText: "Go to the main library entrance facing the Mercer Museum castle. Ask a staff member for help if you have trouble finding it."
        },
        {
            step: "image",
            image: "penny_machine_near.jpg",
            text: "Look at the picture on the machine. What is written on this coin? Press OK when you have the answer.",
            helpText: "There is a 4-letter word written on the center coin on the Press A Penny sign. Look at the arrow in the picture to see where. In the picture the word has been removed, you have to solve what it is!"
        },
        {
            step: "choice",
            text: "Look at the picture on the machine. What is written on this coin?",
            helpText: "If you need to see what the question is asking, tap the Back button '<' to see the image again. There is a 4-letter word written on the center coin on the Press A Penny sign.",
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
            video: {
                videoSource: "Library-Scene-4.mp4",
                subtitles: [
                    { startTime: 0, endTime: 2.7, text: "The trail leads to this penny press machine." },
                    { startTime: 2.8, endTime: 4.5, text: "Oh I remember these things." },
                    { startTime: 4.5, endTime: 8.3, text: "I wonder why the culprit wanted a big stretched out penny." },
                    { startTime: 8.3, endTime: 10.1, text: "Hey, look at this!" },
                    { startTime: 10.3, endTime: 13.6, text: "From the wear on this crank it looks like they used it a lot lately." },
                    { startTime: 14, endTime: 16.3, text: "I wonder what they're doing with all those coins..." },
                    { startTime: 17.5, endTime: 20.6, text: "Hey look! I found this really skinny book under the machine." },
                    { startTime: 21, endTime: 23.2, text: "West! That magazine is our next clue!" },
                    { startTime: 23.7, endTime: 25.0, text: "What's a magazine?" },
                    { startTime: 25.2, endTime: 26.73, text: "Ugh. Gen Alpha." },
                    { startTime: 27.2, endTime: 31.5, text: "Hey, it's ripped! Only a few pages of this magazine thing are here." },
                    { startTime: 32, endTime: 36, text: "Let's get to the magazine section to find the rest of it!" }
                  ]
            }
        },
        {
            step: "image",
            image: "magazines_far.jpg",
            text: "Go to the Magazines section and press OK.",
            helpText: "The magazines section is across from the golden panels from the beginning of the case, in the Fiction area. If you have trouble, ask a library staff member for directions."
        },
        {
            step: "video",
            video: {
                videoSource: "Library-Scene-5.mp4",
                subtitles: [
                    { startTime: 0, endTime: 2.2, text: "Looking...looking...aha!" },
                    { startTime: 2.1, endTime: 3.8, text: "Here's the rest of the magazine." },
                    { startTime: 4.2, endTime: 5.9, text: "Bird Watching Monthly?" },
                    { startTime: 6.0, endTime: 9, text: "Oh no! Bird feathers make me..." },
                    { startTime: 9.1, endTime: 10.2, text: "Achoo!!" },
                    { startTime: 10.3, endTime: 12.1, text: "It's not a real bird, Finn." },
                    { startTime: 12.6, endTime: 15.0, text: "There must be something around here..." },
                    { startTime: 15.5, endTime: 18.4, text: "Hey! What do you think you're doing?" },
                    { startTime: 18.4, endTime: 19.5, text: "Excuse me??" },
                    { startTime: 19.5, endTime: 21.4, text: "Where are your parents?" },
                    { startTime: 21.5, endTime: 23.8, text: "That's a really good question..." },
                    { startTime: 24.1, endTime: 25.0, text: "Achoo!" },
                    { startTime: 25, endTime: 27, text: "Finn! Where did you go?" },
                    { startTime: 28.5, endTime: 30.2, text: "Can you sneeze a little louder?" },
                    { startTime: 30.6, endTime: 33, text: "Um...Achoo?" }
                  ]
            }
        },
        {
            step: "image",
            image: "magazines_near.jpg",
            text: "Stand under the Magazines sign and press OK.",
            helpText: "Try to stand so when you look up at the Magazines sign, it looks just like the picture. So you may need to actually be one step back rather than right under it."
        },
        {
            step: "image",
            image: "book_shelf_far.jpg",
            text: "Turn left and walk up to this book shelf then press OK.",
            helpText: "If you're not sure which way to look, first face the big windows on the wall behind the magazines, then look left."
        },
        {
            step: "image",
            image: "book_shelf_near.jpg",
            text: "Find the missing letters in this sign and press OK.",
            helpText: "The little sign on the right will have letters, just like the sign on the left. In this picture the letters have been removed on purpose, that's what you have to solve!"
        },
        {
            step: "tile-game",
            centerVertically: true,
            text: "Touch the letters on the screen to match the letters in the right sign.",
            helpText: "Find the four letters under 'Fiction' in the right sign on the end of the shelf. It will be two letters, a dash, and two more letters. Now tap the first letter here 'A' until it gets to the correct letter. Hint: The first letter is R! Once all four letters are correct, the OK button will be able to be pressed to continue.",
            winningText: "Correct! Press OK to continue ⬇️",
            tileGameObject: {
                startingCombination: ["A", "B", "C", "D"],
                correctCombination: ["R", "Y", "S", "I"]
            }
        },
        {
            step: "video",
            video: {
                videoSource: "Library-Scene-6.mp4",
                subtitles: [
                    { startTime: 0, endTime: 1.5, text: "Finn! Where are you?" },
                    { startTime: 1.9, endTime: 3.3, text: "(Achoo!)" },
                    { startTime: 3.4, endTime: 5.9, text: "Finn! Ok I need a better view." },
                    { startTime: 6.8, endTime: 8.4, text: "Could you please cover your mouth?" },
                    { startTime: 8.4, endTime: 11.0, text: "You're gonna knock the bookshelves over with that sneeze." },
                    { startTime: 11.2, endTime: 13.3, text: "You're gonna knock them over with your climbing!" },
                    { startTime: 13.3, endTime: 15.4, text: "Whatever. Did you find anything?" },
                    { startTime: 15.6, endTime: 16.5, text: "Almost..." },
                    { startTime: 16.8, endTime: 19.7, text: "Ry...(sniff sniff)...Sa...(sniff)" },
                    { startTime: 19.7, endTime: 21.5, text: "Se...Achoo!" },
                    { startTime: 21.7, endTime: 25.7, text: "A feather. And it's stuck in `Secrets of Clockmaking`." },
                    { startTime: 25.9, endTime: 28.1, text: "That's it! The final piece of the puzzle!" },
                    { startTime: 28.2, endTime: 29.5, text: "Yes! We did it!" },
                    { startTime: 29.5, endTime: 30.9, text: "Wait, what do we do now?" },
                    { startTime: 30.9, endTime: 33.7, text: "Isn't it obvious? We follow my nose." },
                    { startTime: 34, endTime: 36.3, text: "I'm gonna need a nap after this mystery." },
                    { startTime: 36.8, endTime: 37.3, text: "Achoo!" },
                    { startTime: 39.8, endTime: 41.6, text: "I told you not to climb the shelves!" },
                    { startTime: 41.6, endTime: 44, text: "Me? It was your sneeze that knocked them over." },
                    { startTime: 44, endTime: 46, text: "Let's get out of here. Achoo!" }
                  ]
            }
        },
        {
            step: "image",
            image: "clock_far.jpg",
            text: "Go to the children's play area. Look for a gold clock on the wall that is surrounded by a bird.",
            helpText: "Go past those gold panels and bees from the beginning of the case and go to the children's area. Ask a library staff member if you need more directions."
        },
        {
            step: "image",
            image: "clock_near.jpg",
            text: "What type of bird is at the bottom of the clock? Press OK when you know the answer.",
            helpText: "If you don't know where this is, hit the Back button '<' to see the image again and look where the arrow is pointing, near the window."
        },
        {
            step: "choice",
            text: "What type of bird is at the bottom of the clock? Press OK when you're ready to answer.",
            helpText: "If you didn't find the clock, press the Back button '<' and try to find it. Ask a library staff member if you still need help finding it.",
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
            video: {
                videoSource: "Library-Scene-7.mp4",
                subtitles: [
                    { startTime: 0.7, endTime: 3.2, text: "There it...Achoo!...is!" },
                    { startTime: 3.3, endTime: 5, text: "The culprit's grand plan!" },
                    { startTime: 5.1, endTime: 8.3, text: "A peacock clock? What's this all about?" },
                    { startTime: 8.4, endTime: 9.8, text: "Trace your steps backwards." },
                    { startTime: 10.1, endTime: 13.0, text: "The culprit was looking up how to make a clock." },
                    { startTime: 13.1, endTime: 16.1, text: "Then he went to the bird magazine for a picture of a peacock." },
                    { startTime: 16.2, endTime: 18.8, text: "Right! But feathers weren't enough." },
                    { startTime: 18.8, endTime: 22, text: "They needed metal to make the frame of the clock." },
                    { startTime: 22.1, endTime: 23.2, text: "The Penny Press Machine!" },
                    { startTime: 23.3, endTime: 28, text: "But you can't just smush feathers and metal together and hope it forms a clock." },
                    { startTime: 28.2, endTime: 30.4, text: "Right...they'd need something sticky." },
                    { startTime: 29.9, endTime: 31.9, text: "Something like...?" },
                    { startTime: 32.2, endTime: 34, text: "Honey! From the bees!" },
                    { startTime: 34.2, endTime: 37.8, text: "We've got the evidence but we still don't have a motive or suspect." },
                    { startTime: 38, endTime: 41.4, text: "Think about it...when did I first start sneezing?" },
                    { startTime: 41.8, endTime: 44.7, text: "Right before we returned my overdue books." },
                    { startTime: 44.8, endTime: 46.3, text: "When you were behind - GASP!" },
                    { startTime: 46.4, endTime: 49.8, text: "That's right! The guy with blue feathers in his bag!" },
                    { startTime: 50, endTime: 53.7, text: "We have evidence and a suspect, but not a motive yet..." },
                    { startTime: 54, endTime: 57.2, text: "Oh I got this one. It takes an artist to know one." },
                    { startTime: 57.4, endTime: 61.9, text: "The culprit didn't like the art already here. He must have thought his was better." },
                    { startTime: 62.4, endTime: 67.2, text: "Evidence, suspect, motive, opportunity, we cracked the case!" }
                  ]
            }
        },
        {
            step: "video",
            video: {
                videoSource: "Library-Scene-8.mp4",
                subtitles: [
                    { startTime: 0.1, endTime: 2.4, text: "Ok monsieur, enjoy your books!" },
                    { startTime: 2.8, endTime: 6.1, text: "Don't let him take out anything else! HE is the culprit!" },
                    { startTime: 6.3, endTime: 8.3, text: "Moi?? J'accuse!" },
                    { startTime: 8.4, endTime: 10.5, text: "Hmm...Do you have any proof?" },
                    { startTime: 10.7, endTime: 13.2, text: "Yeah we just did a whole montage about it." },
                    { startTime: 14, endTime: 16.1, text: "It probably wasn't him." },
                    { startTime: 16.2, endTime: 18.4, text: "He doesn't look like a real artist." },
                    { startTime: 18.6, endTime: 23.3, text: "Right...he could never create the masterpieces that decorate these walls!" },
                    { startTime: 23.5, endTime: 26.2, text: "You call zis art? Eez nothing!" },
                    { startTime: 26.4, endTime: 28, text: "I am a ze real artist!" },
                    { startTime: 29.8, endTime: 32.7, text: "Oh no, ACHOO!" },
                    { startTime: 32.9, endTime: 37.4, text: "Oh I handle all sorts of thankless people, but I draw the line at defacing books!" },
                    { startTime: 39.8, endTime: 42.4, text: "No! Le library card!" },
                    { startTime: 43.5, endTime: 46.1, text: "Well thanks to the Doylestown Detectives we caught the culprit." },
                    { startTime: 46.2, endTime: 49.8, text: "Yeah, and he probably knocked over a bunch of book shelves too!" },
                    { startTime: 49.8, endTime: 50.5, text: "West!" },
                    { startTime: 50.7, endTime: 51.7, text: "What? It's possible." },
                    { startTime: 52, endTime: 55.2, text: "Consider your late fees erased. Is there anything else I can do for you?" },
                    { startTime: 55.5, endTime: 61, text: "Um, do you have any allergy medicine?" }
                  ]
            }
        },
        {
            step: "image",
            image: "library-mission-complete.png",
            music: "Mission-Theme.mp3"
        }
    ]
)
