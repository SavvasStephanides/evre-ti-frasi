import { describe, expect, test } from "vitest";
import GameFactory from "../modules/GameFactory";

describe("GameFactory", () => {
    test("getNewGameFromPhrase should return a new game with correct details from phrase", () => {
        let gameFactory = new GameFactory()
        let gameId = 4
        let phrase = {
            "file": "0180ed4a-45d6-44a3-b3ae-bcc48a7513dd.png",
            "title": "Η ΚΟΥΤΣΗ ΜΑΡΙΑ"
        }

        let game = gameFactory.getNewGameFromPhrase(gameId, phrase)        
        
        expect(game.id).toBe(4)
        game.title = "Η ΚΟΥΤΣΗ ΜΑΡΙΑ"
        expect(game.boxes.length).toBe(3)
        expect(game.boxes[0].length).toBe(1)
        expect(game.boxes[1].length).toBe(6)
        expect(game.boxes[2].length).toBe(5)

        let expectedBoxes = [
            ["Η"],
            ["Κ", "Ο", "Υ", "Τ", "Σ", "Η"],
            ["Μ", "Α", "Ρ", "Ι","Α"]
        ]

        for (let wordIndex = 0 ; wordIndex < expectedBoxes.length ; wordIndex++){
            for(let letterIndex = 0 ; letterIndex < expectedBoxes[wordIndex].length ; letterIndex++){
                expect(game.boxes[wordIndex][letterIndex].solution).toBe(expectedBoxes[wordIndex][letterIndex])
                expect(game.boxes[wordIndex][letterIndex].label).toBe("")
            }
        }

        expect(game.cursor.word).toBe(0)
        expect(game.cursor.letter).toBe(0)

        expect(game.hintsUsed.description).toBe(false)
        expect(game.hintsUsed.revealLargestWord).toBe(false)
        expect(game.hintsUsed.revealFirstLetters).toBe(false)
    })
})