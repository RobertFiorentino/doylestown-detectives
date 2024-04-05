import { useState } from "react";

export type TileValue = number | string | JSX.Element;

export interface TileGameObject {
    customTiles?: TileValue[];
    startingCombination?: TileValue[]
    correctCombination: TileValue[];
}

// TODO: Test out string and image tiles
export default function TileGame({ tileGameObject }: { tileGameObject: TileGameObject }) {

    // All possible options for the tiles
    const [tileValues] = useState<Array<TileValue>>(
        tileGameObject.customTiles ? tileGameObject.customTiles : generateDefaultTileValues(tileGameObject.correctCombination)
    );
    // The currently displayed tiles
    const [displayedValues, setDisplayedValues] = useState<Array<TileValue>>(
        tileGameObject.startingCombination
            ? tileGameObject.startingCombination
            : [...tileValues, ...Array.from({ length: tileGameObject.correctCombination.length - tileValues.length }, (_, i) => tileValues[i % tileValues.length])]
    );

    const [isGameWon, setIsGameWon] = useState(false);

    function handleTap(index: number) {
        setDisplayedValues((prevDisplayedValues) => {
            const nextIndex = (prevDisplayedValues[index] === tileValues[tileValues.length - 1]) ? 0 : tileValues.indexOf(prevDisplayedValues[index]) + 1;
            const updatedDisplayedValues = [...prevDisplayedValues];
            updatedDisplayedValues[index] = tileValues[nextIndex];
            if (JSON.stringify(updatedDisplayedValues) === JSON.stringify(tileGameObject.correctCombination)) {
                setIsGameWon(true);
            }
            return updatedDisplayedValues;
        });
    }

    function renderTiles() {
        return displayedValues.map((value, index) => (
            <button key={index} className="tileGame--button" onClick={() => handleTap(index)}>
                {value}
            </button>
        ));
    };

    return (
        <div className="tileGame--container">
            {renderTiles()}
            {isGameWon && <div className="win-message">Congratulations! You've won!</div>}
        </div>
    )
}

function generateDefaultTileValues(correctCombination: TileValue[]): TileValue[] {
    if (correctCombination.every((val) => typeof val === "number")) {
        // If correctCombination has numbers, generate tileValues as 0 through 9
        return Array.from({ length: 10 }, (_, i) => i);
    } else if (correctCombination.every((val) => typeof val === "string" && val.length === 1)) {
        // If correctCombination has single character strings, generate tileValues as A through Z
        return Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    } else {
        // Default to an array of empty strings
        return Array(correctCombination.length).fill("");
    }
}
