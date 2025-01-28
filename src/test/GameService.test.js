import { describe, expect, test } from "vitest";
import GameService from "../modules/GameService";

describe("GameService", () => {
    test("getLetterBoxStatus returns BLANK when box label is blank", () => {
        let game = { "id": 2, "title": "Ο ΜΟΥΧΤΗΣ ΕΠΕΘΑΝΕ", "image": "/src/lib/phrase-images/9a2af229-3baf-4441-8154-766dd21da66c.png", "boxes": [[{ "label": "", "solution": "Ο" }], [{ "label": "Μ", "solution": "Μ" }, { "label": "Ι", "solution": "Ο" }, { "label": "", "solution": "Υ" }, { "label": "", "solution": "Χ" }, { "label": "", "solution": "Τ" }, { "label": "", "solution": "Η" }, { "label": "", "solution": "Σ" }], [{ "label": "", "solution": "Ε" }, { "label": "", "solution": "Π" }, { "label": "", "solution": "Ε" }, { "label": "", "solution": "Θ" }, { "label": "", "solution": "Α" }, { "label": "", "solution": "Ν" }, { "label": "", "solution": "Ε" }]], "cursor": { "word": 0, "letter": 0 }, "hintsUsed": { "description": false, "revealLargestWord": false, "revealFirstLetters": false } }
        let gameService = new GameService(game)

        let status = gameService.getLetterBoxStatus(0, 0)
        expect(status).toBe("BLANK")
    })

    test("getLetterBoxStatus returns CORRECT when box label is equal to the solution", () => {
        let game = { "id": 2, "title": "Ο ΜΟΥΧΤΗΣ ΕΠΕΘΑΝΕ", "image": "/src/lib/phrase-images/9a2af229-3baf-4441-8154-766dd21da66c.png", "boxes": [[{ "label": "", "solution": "Ο" }], [{ "label": "Μ", "solution": "Μ" }, { "label": "Ι", "solution": "Ο" }, { "label": "", "solution": "Υ" }, { "label": "", "solution": "Χ" }, { "label": "", "solution": "Τ" }, { "label": "", "solution": "Η" }, { "label": "", "solution": "Σ" }], [{ "label": "", "solution": "Ε" }, { "label": "", "solution": "Π" }, { "label": "", "solution": "Ε" }, { "label": "", "solution": "Θ" }, { "label": "", "solution": "Α" }, { "label": "", "solution": "Ν" }, { "label": "", "solution": "Ε" }]], "cursor": { "word": 0, "letter": 0 }, "hintsUsed": { "description": false, "revealLargestWord": false, "revealFirstLetters": false } }
        let gameService = new GameService(game)

        let status = gameService.getLetterBoxStatus(1, 0)
        expect(status).toBe("CORRECT")
    })

    test("getLetterBoxStatus returns WRONG when box label is not equal to the solution", () => {
        let game = { "id": 2, "title": "Ο ΜΟΥΧΤΗΣ ΕΠΕΘΑΝΕ", "image": "/src/lib/phrase-images/9a2af229-3baf-4441-8154-766dd21da66c.png", "boxes": [[{ "label": "", "solution": "Ο" }], [{ "label": "Μ", "solution": "Μ" }, { "label": "Ι", "solution": "Ο" }, { "label": "", "solution": "Υ" }, { "label": "", "solution": "Χ" }, { "label": "", "solution": "Τ" }, { "label": "", "solution": "Η" }, { "label": "", "solution": "Σ" }], [{ "label": "", "solution": "Ε" }, { "label": "", "solution": "Π" }, { "label": "", "solution": "Ε" }, { "label": "", "solution": "Θ" }, { "label": "", "solution": "Α" }, { "label": "", "solution": "Ν" }, { "label": "", "solution": "Ε" }]], "cursor": { "word": 0, "letter": 0 }, "hintsUsed": { "description": false, "revealLargestWord": false, "revealFirstLetters": false } }
        let gameService = new GameService(game)

        let status = gameService.getLetterBoxStatus(1, 1)
        expect(status).toBe("WRONG")
    })

    test("revealLargestWord fills the largest word and sets hintsUsed.revealLargestWord to true", () => {
        let game = { "id": 2, "title": "Ο ΜΟΥΧΤΗΣ ΕΠΕΘΑΝΕΝ", "image": "/src/lib/phrase-images/9a2af229-3baf-4441-8154-766dd21da66c.png", "boxes": [[{ "label": "", "solution": "Ο" }], [{ "label": "", "solution": "Μ" }, { "label": "", "solution": "Ο" }, { "label": "", "solution": "Υ" }, { "label": "", "solution": "Χ" }, { "label": "", "solution": "Τ" }, { "label": "", "solution": "Η" }, { "label": "", "solution": "Σ" }], [{ "label": "", "solution": "Ε" }, { "label": "", "solution": "Π" }, { "label": "", "solution": "Ε" }, { "label": "", "solution": "Θ" }, { "label": "", "solution": "Α" }, { "label": "", "solution": "Ν" }, { "label": "", "solution": "Ε" }, { "label": "", "solution": "Ν" }]], "cursor": { "word": 0, "letter": 0 }, "hintsUsed": { "description": false, "revealLargestWord": false, "revealFirstLetters": false } }
        let gameService = new GameService(game)
        gameService.revealLargestWord()

        expect(game.boxes[0][0].label).toBe("")

        expect(game.boxes[1][0].label).toBe("")
        expect(game.boxes[1][1].label).toBe("")
        expect(game.boxes[1][2].label).toBe("")
        expect(game.boxes[1][3].label).toBe("")
        expect(game.boxes[1][4].label).toBe("")
        expect(game.boxes[1][5].label).toBe("")
        expect(game.boxes[1][6].label).toBe("")

        expect(game.boxes[2][0].label).toBe("Ε")
        expect(game.boxes[2][1].label).toBe("Π")
        expect(game.boxes[2][2].label).toBe("Ε")
        expect(game.boxes[2][3].label).toBe("Θ")
        expect(game.boxes[2][4].label).toBe("Α")
        expect(game.boxes[2][5].label).toBe("Ν")
        expect(game.boxes[2][6].label).toBe("Ε")
        expect(game.boxes[2][7].label).toBe("Ν")

        expect(game.hintsUsed.revealLargestWord).toBe(true)
    })

    test("revealFirstLetters fills the first letters of each word word and sets hintsUsed.revealFirstLetters to true", () => {
        let game = { "id": 2, "title": "Ο ΜΟΥΧΤΗΣ ΕΠΕΘΑΝΕΝ", "image": "/src/lib/phrase-images/9a2af229-3baf-4441-8154-766dd21da66c.png", "boxes": [[{ "label": "", "solution": "Ο" }], [{ "label": "", "solution": "Μ" }, { "label": "", "solution": "Ο" }, { "label": "", "solution": "Υ" }, { "label": "", "solution": "Χ" }, { "label": "", "solution": "Τ" }, { "label": "", "solution": "Η" }, { "label": "", "solution": "Σ" }], [{ "label": "", "solution": "Ε" }, { "label": "", "solution": "Π" }, { "label": "", "solution": "Ε" }, { "label": "", "solution": "Θ" }, { "label": "", "solution": "Α" }, { "label": "", "solution": "Ν" }, { "label": "", "solution": "Ε" }, { "label": "", "solution": "Ν" }]], "cursor": { "word": 0, "letter": 0 }, "hintsUsed": { "description": false, "revealLargestWord": false, "revealFirstLetters": false } }
        let gameService = new GameService(game)
        gameService.revealFirstLetters()

        expect(game.boxes[0][0].label).toBe("Ο")

        expect(game.boxes[1][0].label).toBe("Μ")
        expect(game.boxes[1][1].label).toBe("")
        expect(game.boxes[1][2].label).toBe("")
        expect(game.boxes[1][3].label).toBe("")
        expect(game.boxes[1][4].label).toBe("")
        expect(game.boxes[1][5].label).toBe("")
        expect(game.boxes[1][6].label).toBe("")

        expect(game.boxes[2][0].label).toBe("Ε")
        expect(game.boxes[2][1].label).toBe("")
        expect(game.boxes[2][2].label).toBe("")
        expect(game.boxes[2][3].label).toBe("")
        expect(game.boxes[2][4].label).toBe("")
        expect(game.boxes[2][5].label).toBe("")
        expect(game.boxes[2][6].label).toBe("")
        expect(game.boxes[2][7].label).toBe("")

        expect(game.hintsUsed.revealFirstLetters).toBe(true)
    })

    test("allLettersInWordAreCorrect returns true if all letters match the solution in a word", () => {
        let game = { "id": 2, "title": "Ο ΜΟΥΧΤΗΣ ΕΠΕΘΑΝΕΝ", "image": "/src/lib/phrase-images/9a2af229-3baf-4441-8154-766dd21da66c.png", "boxes": [[{ "label": "", "solution": "Ο" }], [{ "label": "Μ", "solution": "Μ" }, { "label": "Ο", "solution": "Ο" }, { "label": "Υ", "solution": "Υ" }, { "label": "Χ", "solution": "Χ" }, { "label": "Τ", "solution": "Τ" }, { "label": "Η", "solution": "Η" }, { "label": "Σ", "solution": "Σ" }], [{ "label": "", "solution": "Ε" }, { "label": "", "solution": "Π" }, { "label": "", "solution": "Ε" }, { "label": "", "solution": "Θ" }, { "label": "", "solution": "Α" }, { "label": "", "solution": "Ν" }, { "label": "", "solution": "Ε" }, { "label": "", "solution": "Ν" }]], "cursor": { "word": 0, "letter": 0 }, "hintsUsed": { "description": false, "revealLargestWord": false, "revealFirstLetters": false } }
        let gameService = new GameService(game)

        let check = gameService.allLettersInWordAreCorrect(1)

        expect(check).toBe(true)
    })

    test("allLettersInWordAreCorrect returns false if not all letters match the solution in a word", () => {
        let game = { "id": 2, "title": "Ο ΜΟΥΧΤΗΣ ΕΠΕΘΑΝΕΝ", "image": "/src/lib/phrase-images/9a2af229-3baf-4441-8154-766dd21da66c.png", "boxes": [[{ "label": "", "solution": "Ο" }], [{ "label": "Μ", "solution": "Μ" }, { "label": "Ο", "solution": "Ο" }, { "label": "O", "solution": "Υ" }, { "label": "Χ", "solution": "Χ" }, { "label": "Τ", "solution": "Τ" }, { "label": "Η", "solution": "Η" }, { "label": "Σ", "solution": "Σ" }], [{ "label": "", "solution": "Ε" }, { "label": "", "solution": "Π" }, { "label": "", "solution": "Ε" }, { "label": "", "solution": "Θ" }, { "label": "", "solution": "Α" }, { "label": "", "solution": "Ν" }, { "label": "", "solution": "Ε" }, { "label": "", "solution": "Ν" }]], "cursor": { "word": 0, "letter": 0 }, "hintsUsed": { "description": false, "revealLargestWord": false, "revealFirstLetters": false } }
        let gameService = new GameService(game)

        let check = gameService.allLettersInWordAreCorrect(1)

        expect(check).toBe(false)
    })

    test("isSolved returns true if all letter labels match the solutions in a phrase", () => {
        let game = { "id": 2, "title": "Ο ΜΟΥΧΤΗΣ ΕΠΕΘΑΝΕΝ", "image": "/src/lib/phrase-images/9a2af229-3baf-4441-8154-766dd21da66c.png", "boxes": [[{ "label": "Ο", "solution": "Ο" }], [{ "label": "Μ", "solution": "Μ" }, { "label": "Ο", "solution": "Ο" }, { "label": "Υ", "solution": "Υ" }, { "label": "Χ", "solution": "Χ" }, { "label": "Τ", "solution": "Τ" }, { "label": "Η", "solution": "Η" }, { "label": "Σ", "solution": "Σ" }], [{ "label": "Ε", "solution": "Ε" }, { "label": "Π", "solution": "Π" }, { "label": "Ε", "solution": "Ε" }, { "label": "Θ", "solution": "Θ" }, { "label": "Α", "solution": "Α" }, { "label": "Ν", "solution": "Ν" }, { "label": "Ε", "solution": "Ε" }, { "label": "Ν", "solution": "Ν" }]], "cursor": { "word": 0, "letter": 0 }, "hintsUsed": { "description": false, "revealLargestWord": false, "revealFirstLetters": false } }
        let gameService = new GameService(game)

        let check = gameService.isSolved()

        expect(check).toBe(true)
    })

    test("isSolved returns false if not all letter labels match the solutions in a phrase", () => {
        let game = { "id": 2, "title": "Ο ΜΟΥΧΤΗΣ ΕΠΕΘΑΝΕΝ", "image": "/src/lib/phrase-images/9a2af229-3baf-4441-8154-766dd21da66c.png", "boxes": [[{ "label": "Η", "solution": "Ο" }], [{ "label": "Μ", "solution": "Μ" }, { "label": "Ο", "solution": "Ο" }, { "label": "Υ", "solution": "Υ" }, { "label": "Χ", "solution": "Χ" }, { "label": "Τ", "solution": "Τ" }, { "label": "Η", "solution": "Η" }, { "label": "Σ", "solution": "Σ" }], [{ "label": "Ε", "solution": "Ε" }, { "label": "Π", "solution": "Π" }, { "label": "Ε", "solution": "Ε" }, { "label": "Θ", "solution": "Θ" }, { "label": "Α", "solution": "Α" }, { "label": "Ν", "solution": "Ν" }, { "label": "Ε", "solution": "Ε" }, { "label": "Ν", "solution": "Ν" }]], "cursor": { "word": 0, "letter": 0 }, "hintsUsed": { "description": false, "revealLargestWord": false, "revealFirstLetters": false } }
        let gameService = new GameService(game)

        let check = gameService.isSolved()

        expect(check).toBe(false)
    })
})