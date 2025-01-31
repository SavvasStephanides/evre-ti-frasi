import { describe, expect, test } from "vitest";
import GameFactory from "../modules/GameFactory";

describe("GameFactory", () => {
    test("getNewGameFromPhrase should return a new game with correct details from phrase", () => {
        let gameFactory = new GameFactory()
        let gameId = 4
        let phrase = {
            "file": "0180ed4a-45d6-44a3-b3ae-bcc48a7513dd.png",
            "title": "Η ΚΟΥΤΣΗ ΜΑΡΙΑ",
            "hint": "Άγνωστο πρόσωπο"
        }

        let game = gameFactory.getNewGameFromPhrase(gameId, phrase)        
        
        expect(game.id).toBe(4)
        expect(game.title).toBe("Η ΚΟΥΤΣΗ ΜΑΡΙΑ")
        expect(game.hint).toBe("Άγνωστο πρόσωπο")
        expect(game.letterPoints.length).toBe(12)

        let expectedPoints = [
            {w: 0, l: 0, label: "", solution: "Η"},
            {w: 1, l: 0, label: "", solution: "Κ"},
            {w: 1, l: 1, label: "", solution: "Ο"},
            {w: 1, l: 2, label: "", solution: "Υ"},
            {w: 1, l: 3, label: "", solution: "Τ"},
            {w: 1, l: 4, label: "", solution: "Σ"},
            {w: 1, l: 5, label: "", solution: "Η"},
            {w: 2, l: 0, label: "", solution: "Μ"},
            {w: 2, l: 1, label: "", solution: "Α"},
            {w: 2, l: 2, label: "", solution: "Ρ"},
            {w: 2, l: 3, label: "", solution: "Ι"},
            {w: 2, l: 4, label: "", solution: "Α"}
        ]

        game.letterPoints.forEach((point, index) => {
            let expectedPoint = expectedPoints[index]
            expect(point.w).toBe(expectedPoint.w)
            expect(point.l).toBe(expectedPoint.l)
            expect(point.label).toBe(expectedPoint.label)
            expect(point.solution).toBe(expectedPoint.solution)
        })

        expect(game.cursor).toBe(0)

        expect(game.hintsUsed.description).toBe(false)
        expect(game.hintsUsed.revealLargestWord).toBe(false)
        expect(game.hintsUsed.revealFirstLetters).toBe(false)

        expect(game.hasEnded).toBe(false)
    })
})