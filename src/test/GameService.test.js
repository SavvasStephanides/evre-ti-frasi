import { describe, expect, test } from "vitest";
import GameService from "../modules/GameService";

describe("GameService", () => {
    test("getLetterBoxStatus returns BLANK when box label is blank", () => {
        let game = { "id": 3, "title": "Η ΑΘΑΣΙΑ ΤΗΣ ΑΙΣΙΕ ΑΝ ΕΣΙΕΙ ΑΘΑΣΙΑ ΑΣ ΕΣΙΕΙ", "image": "/src/lib/phrase-images/3151de9b-6cfd-4df0-a4f6-d1053da3b8d6.jpeg", "letterPoints": [{ "w": 0, "l": 0, "solution": "Η", "label": "" }, { "w": 1, "l": 0, "solution": "Α", "label": "Α" }, { "w": 1, "l": 1, "solution": "Θ", "label": "Θ" }, { "w": 1, "l": 2, "solution": "Α", "label": "Α" }, { "w": 1, "l": 3, "solution": "Σ", "label": "Σ" }, { "w": 1, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 1, "l": 5, "solution": "Α", "label": "Α" }, { "w": 2, "l": 0, "solution": "Τ", "label": "Τ" }, { "w": 2, "l": 1, "solution": "Η", "label": "Η" }, { "w": 2, "l": 2, "solution": "Σ", "label": "Σ" }, { "w": 3, "l": 0, "solution": "Α", "label": "Α" }, { "w": 3, "l": 1, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 2, "solution": "Σ", "label": "Σ" }, { "w": 3, "l": 3, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 4, "solution": "Ε", "label": "Ε" }, { "w": 4, "l": 0, "solution": "Α", "label": "Α" }, { "w": 4, "l": 1, "solution": "Ν", "label": "Ν" }, { "w": 5, "l": 0, "solution": "Ε", "label": "Ε" }, { "w": 5, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 5, "l": 2, "solution": "Ι", "label": "Ι" }, { "w": 5, "l": 3, "solution": "Ε", "label": "Ε" }, { "w": 5, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 6, "l": 0, "solution": "Α", "label": "Α" }, { "w": 6, "l": 1, "solution": "Θ", "label": "Θ" }, { "w": 6, "l": 2, "solution": "Α", "label": "Α" }, { "w": 6, "l": 3, "solution": "Σ", "label": "Σ" }, { "w": 6, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 6, "l": 5, "solution": "Α", "label": "Α" }, { "w": 7, "l": 0, "solution": "Α", "label": "Α" }, { "w": 7, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 8, "l": 0, "solution": "Ε", "label": "Ε" }, { "w": 8, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 8, "l": 2, "solution": "Ι", "label": "Ι" }, { "w": 8, "l": 3, "solution": "Ε", "label": "Ε" }, { "w": 8, "l": 4, "solution": "Ι", "label": "Ι" }], "cursor": 34, "hintsUsed": { "description": true, "revealLargestWord": true, "revealFirstLetters": true } }
        let gameService = new GameService(game)

        let status = gameService.getLetterBoxStatus(0, 0)
        expect(status).toBe("BLANK")
    })

    test("getLetterBoxStatus returns CORRECT when box label is equal to the solution", () => {
        let game = { "id": 3, "title": "Η ΑΘΑΣΙΑ ΤΗΣ ΑΙΣΙΕ ΑΝ ΕΣΙΕΙ ΑΘΑΣΙΑ ΑΣ ΕΣΙΕΙ", "image": "/src/lib/phrase-images/3151de9b-6cfd-4df0-a4f6-d1053da3b8d6.jpeg", "letterPoints": [{ "w": 0, "l": 0, "solution": "Η", "label": "Η" }, { "w": 1, "l": 0, "solution": "Α", "label": "Α" }, { "w": 1, "l": 1, "solution": "Θ", "label": "Θ" }, { "w": 1, "l": 2, "solution": "Α", "label": "Α" }, { "w": 1, "l": 3, "solution": "Σ", "label": "Σ" }, { "w": 1, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 1, "l": 5, "solution": "Α", "label": "Α" }, { "w": 2, "l": 0, "solution": "Τ", "label": "Τ" }, { "w": 2, "l": 1, "solution": "Η", "label": "Η" }, { "w": 2, "l": 2, "solution": "Σ", "label": "Σ" }, { "w": 3, "l": 0, "solution": "Α", "label": "Α" }, { "w": 3, "l": 1, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 2, "solution": "Σ", "label": "Σ" }, { "w": 3, "l": 3, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 4, "solution": "Ε", "label": "Ε" }, { "w": 4, "l": 0, "solution": "Α", "label": "Α" }, { "w": 4, "l": 1, "solution": "Ν", "label": "Ν" }, { "w": 5, "l": 0, "solution": "Ε", "label": "Ε" }, { "w": 5, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 5, "l": 2, "solution": "Ι", "label": "Ι" }, { "w": 5, "l": 3, "solution": "Ε", "label": "Ε" }, { "w": 5, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 6, "l": 0, "solution": "Α", "label": "Α" }, { "w": 6, "l": 1, "solution": "Θ", "label": "Θ" }, { "w": 6, "l": 2, "solution": "Α", "label": "Α" }, { "w": 6, "l": 3, "solution": "Σ", "label": "Σ" }, { "w": 6, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 6, "l": 5, "solution": "Α", "label": "Α" }, { "w": 7, "l": 0, "solution": "Α", "label": "Α" }, { "w": 7, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 8, "l": 0, "solution": "Ε", "label": "Ε" }, { "w": 8, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 8, "l": 2, "solution": "Ι", "label": "Ι" }, { "w": 8, "l": 3, "solution": "Ε", "label": "Ε" }, { "w": 8, "l": 4, "solution": "Ι", "label": "Ι" }], "cursor": 34, "hintsUsed": { "description": true, "revealLargestWord": true, "revealFirstLetters": true } }
        let gameService = new GameService(game)

        let status = gameService.getLetterBoxStatus(0, 0)
        expect(status).toBe("CORRECT")
    })

    test("getLetterBoxStatus returns WRONG when box label is not equal to the solution", () => {
        let game = { "id": 3, "title": "Η ΑΘΑΣΙΑ ΤΗΣ ΑΙΣΙΕ ΑΝ ΕΣΙΕΙ ΑΘΑΣΙΑ ΑΣ ΕΣΙΕΙ", "image": "/src/lib/phrase-images/3151de9b-6cfd-4df0-a4f6-d1053da3b8d6.jpeg", "letterPoints": [{ "w": 0, "l": 0, "solution": "Η", "label": "Ο" }, { "w": 1, "l": 0, "solution": "Α", "label": "Α" }, { "w": 1, "l": 1, "solution": "Θ", "label": "Θ" }, { "w": 1, "l": 2, "solution": "Α", "label": "Α" }, { "w": 1, "l": 3, "solution": "Σ", "label": "Σ" }, { "w": 1, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 1, "l": 5, "solution": "Α", "label": "Α" }, { "w": 2, "l": 0, "solution": "Τ", "label": "Τ" }, { "w": 2, "l": 1, "solution": "Η", "label": "Η" }, { "w": 2, "l": 2, "solution": "Σ", "label": "Σ" }, { "w": 3, "l": 0, "solution": "Α", "label": "Α" }, { "w": 3, "l": 1, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 2, "solution": "Σ", "label": "Σ" }, { "w": 3, "l": 3, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 4, "solution": "Ε", "label": "Ε" }, { "w": 4, "l": 0, "solution": "Α", "label": "Α" }, { "w": 4, "l": 1, "solution": "Ν", "label": "Ν" }, { "w": 5, "l": 0, "solution": "Ε", "label": "Ε" }, { "w": 5, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 5, "l": 2, "solution": "Ι", "label": "Ι" }, { "w": 5, "l": 3, "solution": "Ε", "label": "Ε" }, { "w": 5, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 6, "l": 0, "solution": "Α", "label": "Α" }, { "w": 6, "l": 1, "solution": "Θ", "label": "Θ" }, { "w": 6, "l": 2, "solution": "Α", "label": "Α" }, { "w": 6, "l": 3, "solution": "Σ", "label": "Σ" }, { "w": 6, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 6, "l": 5, "solution": "Α", "label": "Α" }, { "w": 7, "l": 0, "solution": "Α", "label": "Α" }, { "w": 7, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 8, "l": 0, "solution": "Ε", "label": "Ε" }, { "w": 8, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 8, "l": 2, "solution": "Ι", "label": "Ι" }, { "w": 8, "l": 3, "solution": "Ε", "label": "Ε" }, { "w": 8, "l": 4, "solution": "Ι", "label": "Ι" }], "cursor": 34, "hintsUsed": { "description": true, "revealLargestWord": true, "revealFirstLetters": true } }
        let gameService = new GameService(game)

        let status = gameService.getLetterBoxStatus(0, 0)
        expect(status).toBe("WRONG")
    })

    test("revealLargestWord fills the largest word and sets hintsUsed.revealLargestWord to true", () => {
        let game = { "id": 3, "title": "Η ΑΘΑΣΙΑ ΤΗΣ ΑΙΣΙΕ ΑΝ ΕΣΙΕΙ ΑΘΑΣΙΑ ΑΣ ΕΣΙΕΙ", "image": "/src/lib/phrase-images/3151de9b-6cfd-4df0-a4f6-d1053da3b8d6.jpeg", "letterPoints": [{ "w": 0, "l": 0, "solution": "Η", "label": "" }, { "w": 1, "l": 0, "solution": "Α", "label": "" }, { "w": 1, "l": 1, "solution": "Θ", "label": "" }, { "w": 1, "l": 2, "solution": "Α", "label": "" }, { "w": 1, "l": 3, "solution": "Σ", "label": "" }, { "w": 1, "l": 4, "solution": "Ι", "label": "" }, { "w": 1, "l": 5, "solution": "Α", "label": "" }, { "w": 2, "l": 0, "solution": "Τ", "label": "" }, { "w": 2, "l": 1, "solution": "Η", "label": "" }, { "w": 2, "l": 2, "solution": "Σ", "label": "" }, { "w": 3, "l": 0, "solution": "Α", "label": "" }, { "w": 3, "l": 1, "solution": "Ι", "label": "" }, { "w": 3, "l": 2, "solution": "Σ", "label": "" }, { "w": 3, "l": 3, "solution": "Ι", "label": "" }, { "w": 3, "l": 4, "solution": "Ε", "label": "" }, { "w": 4, "l": 0, "solution": "Α", "label": "" }, { "w": 4, "l": 1, "solution": "Ν", "label": "" }, { "w": 5, "l": 0, "solution": "Ε", "label": "" }, { "w": 5, "l": 1, "solution": "Σ", "label": "" }, { "w": 5, "l": 2, "solution": "Ι", "label": "" }, { "w": 5, "l": 3, "solution": "Ε", "label": "" }, { "w": 5, "l": 4, "solution": "Ι", "label": "" }, { "w": 6, "l": 0, "solution": "Α", "label": "" }, { "w": 6, "l": 1, "solution": "Θ", "label": "" }, { "w": 6, "l": 2, "solution": "Α", "label": "" }, { "w": 6, "l": 3, "solution": "Σ", "label": "" }, { "w": 6, "l": 4, "solution": "Ι", "label": "" }, { "w": 6, "l": 5, "solution": "Α", "label": "" }, { "w": 7, "l": 0, "solution": "Α", "label": "" }, { "w": 7, "l": 1, "solution": "Σ", "label": "" }, { "w": 8, "l": 0, "solution": "Ε", "label": "" }, { "w": 8, "l": 1, "solution": "Σ", "label": "" }, { "w": 8, "l": 2, "solution": "Ι", "label": "" }, { "w": 8, "l": 3, "solution": "Ε", "label": "" }, { "w": 8, "l": 4, "solution": "Ι", "label": "" }], "cursor": 0, "hintsUsed": { "description": false, "revealLargestWord": false, "revealFirstLetters": false } }
        let gameService = new GameService(game)
        gameService.revealLargestWord()


        let expectedPoints = [
            {
                "w": 0,
                "l": 0,
                "solution": "Η",
                "label": ""
            },
            {
                "w": 1,
                "l": 0,
                "solution": "Α",
                "label": "Α"
            },
            {
                "w": 1,
                "l": 1,
                "solution": "Θ",
                "label": "Θ"
            },
            {
                "w": 1,
                "l": 2,
                "solution": "Α",
                "label": "Α"
            },
            {
                "w": 1,
                "l": 3,
                "solution": "Σ",
                "label": "Σ"
            },
            {
                "w": 1,
                "l": 4,
                "solution": "Ι",
                "label": "Ι"
            },
            {
                "w": 1,
                "l": 5,
                "solution": "Α",
                "label": "Α"
            },
            {
                "w": 2,
                "l": 0,
                "solution": "Τ",
                "label": ""
            },
            {
                "w": 2,
                "l": 1,
                "solution": "Η",
                "label": ""
            },
            {
                "w": 2,
                "l": 2,
                "solution": "Σ",
                "label": ""
            },
            {
                "w": 3,
                "l": 0,
                "solution": "Α",
                "label": ""
            },
            {
                "w": 3,
                "l": 1,
                "solution": "Ι",
                "label": ""
            },
            {
                "w": 3,
                "l": 2,
                "solution": "Σ",
                "label": ""
            },
            {
                "w": 3,
                "l": 3,
                "solution": "Ι",
                "label": ""
            },
            {
                "w": 3,
                "l": 4,
                "solution": "Ε",
                "label": ""
            },
            {
                "w": 4,
                "l": 0,
                "solution": "Α",
                "label": ""
            },
            {
                "w": 4,
                "l": 1,
                "solution": "Ν",
                "label": ""
            },
            {
                "w": 5,
                "l": 0,
                "solution": "Ε",
                "label": ""
            },
            {
                "w": 5,
                "l": 1,
                "solution": "Σ",
                "label": ""
            },
            {
                "w": 5,
                "l": 2,
                "solution": "Ι",
                "label": ""
            },
            {
                "w": 5,
                "l": 3,
                "solution": "Ε",
                "label": ""
            },
            {
                "w": 5,
                "l": 4,
                "solution": "Ι",
                "label": ""
            },
            {
                "w": 6,
                "l": 0,
                "solution": "Α",
                "label": ""
            },
            {
                "w": 6,
                "l": 1,
                "solution": "Θ",
                "label": ""
            },
            {
                "w": 6,
                "l": 2,
                "solution": "Α",
                "label": ""
            },
            {
                "w": 6,
                "l": 3,
                "solution": "Σ",
                "label": ""
            },
            {
                "w": 6,
                "l": 4,
                "solution": "Ι",
                "label": ""
            },
            {
                "w": 6,
                "l": 5,
                "solution": "Α",
                "label": ""
            },
            {
                "w": 7,
                "l": 0,
                "solution": "Α",
                "label": ""
            },
            {
                "w": 7,
                "l": 1,
                "solution": "Σ",
                "label": ""
            },
            {
                "w": 8,
                "l": 0,
                "solution": "Ε",
                "label": ""
            },
            {
                "w": 8,
                "l": 1,
                "solution": "Σ",
                "label": ""
            },
            {
                "w": 8,
                "l": 2,
                "solution": "Ι",
                "label": ""
            },
            {
                "w": 8,
                "l": 3,
                "solution": "Ε",
                "label": ""
            },
            {
                "w": 8,
                "l": 4,
                "solution": "Ι",
                "label": ""
            }
        ]

        game.letterPoints.forEach((point, index) => {
            let expectedPoint = expectedPoints[index]
            expect(point.w).toBe(expectedPoint.w)
            expect(point.l).toBe(expectedPoint.l)
            expect(point.label).toBe(expectedPoint.label)
            expect(point.solution).toBe(expectedPoint.solution)
        })

        expect(game.hintsUsed.revealLargestWord).toBe(true)
    })

    test("revealLargestWord moves the cursor to the first unsolved letter", () => {
        let game = {
            "id": 3,
            "title": "ΜΕΓΑΛΗ ΜΙΚΡΗ",
            "image": "/src/lib/phrase-images/3151de9b-6cfd-4df0-a4f6-d1053da3b8d6.jpeg",
            "letterPoints": [
                {
                    "w": 0,
                    "l": 0,
                    "solution": "Μ",
                    "label": ""
                },
                {
                    "w": 0,
                    "l": 1,
                    "solution": "Ε",
                    "label": ""
                },
                {
                    "w": 0,
                    "l": 2,
                    "solution": "Γ",
                    "label": ""
                },
                {
                    "w": 0,
                    "l": 3,
                    "solution": "Α",
                    "label": ""
                },
                {
                    "w": 0,
                    "l": 4,
                    "solution": "Λ",
                    "label": ""
                },
                {
                    "w": 0,
                    "l": 5,
                    "solution": "Η",
                    "label": ""
                },
                {
                    "w": 1,
                    "l": 0,
                    "solution": "Μ",
                    "label": ""
                },
                {
                    "w": 1,
                    "l": 1,
                    "solution": "Ι",
                    "label": ""
                },
                {
                    "w": 1,
                    "l": 2,
                    "solution": "Κ",
                    "label": ""
                },
                {
                    "w": 1,
                    "l": 3,
                    "solution": "Ρ",
                    "label": ""
                },
                {
                    "w": 1,
                    "l": 4,
                    "solution": "Η",
                    "label": ""
                }
            ],
            "cursor": 0,
            "hintsUsed": {
                "description": false,
                "revealLargestWord": false,
                "revealFirstLetters": false
            }
        }
        let gameService = new GameService(game)
        gameService.revealLargestWord()

        let expectedCursor = 6
        let actualCursor = game.cursor

        expect(actualCursor).toBe(expectedCursor)
    })

    test("revealFirstLetters fills the first letters of each word word and sets hintsUsed.revealFirstLetters to true", () => {
        let game = { "id": 3, "title": "Η ΑΘΑΣΙΑ ΤΗΣ ΑΙΣΙΕ ΑΝ ΕΣΙΕΙ ΑΘΑΣΙΑ ΑΣ ΕΣΙΕΙ", "image": "/src/lib/phrase-images/3151de9b-6cfd-4df0-a4f6-d1053da3b8d6.jpeg", "letterPoints": [{ "w": 0, "l": 0, "solution": "Η", "label": "" }, { "w": 1, "l": 0, "solution": "Α", "label": "" }, { "w": 1, "l": 1, "solution": "Θ", "label": "" }, { "w": 1, "l": 2, "solution": "Α", "label": "" }, { "w": 1, "l": 3, "solution": "Σ", "label": "" }, { "w": 1, "l": 4, "solution": "Ι", "label": "" }, { "w": 1, "l": 5, "solution": "Α", "label": "" }, { "w": 2, "l": 0, "solution": "Τ", "label": "" }, { "w": 2, "l": 1, "solution": "Η", "label": "" }, { "w": 2, "l": 2, "solution": "Σ", "label": "" }, { "w": 3, "l": 0, "solution": "Α", "label": "" }, { "w": 3, "l": 1, "solution": "Ι", "label": "" }, { "w": 3, "l": 2, "solution": "Σ", "label": "" }, { "w": 3, "l": 3, "solution": "Ι", "label": "" }, { "w": 3, "l": 4, "solution": "Ε", "label": "" }, { "w": 4, "l": 0, "solution": "Α", "label": "" }, { "w": 4, "l": 1, "solution": "Ν", "label": "" }, { "w": 5, "l": 0, "solution": "Ε", "label": "" }, { "w": 5, "l": 1, "solution": "Σ", "label": "" }, { "w": 5, "l": 2, "solution": "Ι", "label": "" }, { "w": 5, "l": 3, "solution": "Ε", "label": "" }, { "w": 5, "l": 4, "solution": "Ι", "label": "" }, { "w": 6, "l": 0, "solution": "Α", "label": "" }, { "w": 6, "l": 1, "solution": "Θ", "label": "" }, { "w": 6, "l": 2, "solution": "Α", "label": "" }, { "w": 6, "l": 3, "solution": "Σ", "label": "" }, { "w": 6, "l": 4, "solution": "Ι", "label": "" }, { "w": 6, "l": 5, "solution": "Α", "label": "" }, { "w": 7, "l": 0, "solution": "Α", "label": "" }, { "w": 7, "l": 1, "solution": "Σ", "label": "" }, { "w": 8, "l": 0, "solution": "Ε", "label": "" }, { "w": 8, "l": 1, "solution": "Σ", "label": "" }, { "w": 8, "l": 2, "solution": "Ι", "label": "" }, { "w": 8, "l": 3, "solution": "Ε", "label": "" }, { "w": 8, "l": 4, "solution": "Ι", "label": "" }], "cursor": 0, "hintsUsed": { "description": false, "revealLargestWord": false, "revealFirstLetters": false } }
        let gameService = new GameService(game)
        gameService.revealFirstLetters()

        let expectedPoints = [
            {
                "w": 0,
                "l": 0,
                "solution": "Η",
                "label": "Η"
            },
            {
                "w": 1,
                "l": 0,
                "solution": "Α",
                "label": "Α"
            },
            {
                "w": 1,
                "l": 1,
                "solution": "Θ",
                "label": ""
            },
            {
                "w": 1,
                "l": 2,
                "solution": "Α",
                "label": ""
            },
            {
                "w": 1,
                "l": 3,
                "solution": "Σ",
                "label": ""
            },
            {
                "w": 1,
                "l": 4,
                "solution": "Ι",
                "label": ""
            },
            {
                "w": 1,
                "l": 5,
                "solution": "Α",
                "label": ""
            },
            {
                "w": 2,
                "l": 0,
                "solution": "Τ",
                "label": "Τ"
            },
            {
                "w": 2,
                "l": 1,
                "solution": "Η",
                "label": ""
            },
            {
                "w": 2,
                "l": 2,
                "solution": "Σ",
                "label": ""
            },
            {
                "w": 3,
                "l": 0,
                "solution": "Α",
                "label": "Α"
            },
            {
                "w": 3,
                "l": 1,
                "solution": "Ι",
                "label": ""
            },
            {
                "w": 3,
                "l": 2,
                "solution": "Σ",
                "label": ""
            },
            {
                "w": 3,
                "l": 3,
                "solution": "Ι",
                "label": ""
            },
            {
                "w": 3,
                "l": 4,
                "solution": "Ε",
                "label": ""
            },
            {
                "w": 4,
                "l": 0,
                "solution": "Α",
                "label": "Α"
            },
            {
                "w": 4,
                "l": 1,
                "solution": "Ν",
                "label": ""
            },
            {
                "w": 5,
                "l": 0,
                "solution": "Ε",
                "label": "Ε"
            },
            {
                "w": 5,
                "l": 1,
                "solution": "Σ",
                "label": ""
            },
            {
                "w": 5,
                "l": 2,
                "solution": "Ι",
                "label": ""
            },
            {
                "w": 5,
                "l": 3,
                "solution": "Ε",
                "label": ""
            },
            {
                "w": 5,
                "l": 4,
                "solution": "Ι",
                "label": ""
            },
            {
                "w": 6,
                "l": 0,
                "solution": "Α",
                "label": "Α"
            },
            {
                "w": 6,
                "l": 1,
                "solution": "Θ",
                "label": ""
            },
            {
                "w": 6,
                "l": 2,
                "solution": "Α",
                "label": ""
            },
            {
                "w": 6,
                "l": 3,
                "solution": "Σ",
                "label": ""
            },
            {
                "w": 6,
                "l": 4,
                "solution": "Ι",
                "label": ""
            },
            {
                "w": 6,
                "l": 5,
                "solution": "Α",
                "label": ""
            },
            {
                "w": 7,
                "l": 0,
                "solution": "Α",
                "label": "Α"
            },
            {
                "w": 7,
                "l": 1,
                "solution": "Σ",
                "label": ""
            },
            {
                "w": 8,
                "l": 0,
                "solution": "Ε",
                "label": "Ε"
            },
            {
                "w": 8,
                "l": 1,
                "solution": "Σ",
                "label": ""
            },
            {
                "w": 8,
                "l": 2,
                "solution": "Ι",
                "label": ""
            },
            {
                "w": 8,
                "l": 3,
                "solution": "Ε",
                "label": ""
            },
            {
                "w": 8,
                "l": 4,
                "solution": "Ι",
                "label": ""
            }
        ]

        expect(game.hintsUsed.revealFirstLetters).toBe(true)
    })

    test("revealFirstLetters moves the cursor to the first unsolved letter", () => {
        let game = {
            "id": 3,
            "title": "ΜΕΓΑΛΗ ΜΙΚΡΗ",
            "image": "/src/lib/phrase-images/3151de9b-6cfd-4df0-a4f6-d1053da3b8d6.jpeg",
            "letterPoints": [
                {
                    "w": 0,
                    "l": 0,
                    "solution": "Μ",
                    "label": ""
                },
                {
                    "w": 0,
                    "l": 1,
                    "solution": "Ε",
                    "label": ""
                },
                {
                    "w": 0,
                    "l": 2,
                    "solution": "Γ",
                    "label": ""
                },
                {
                    "w": 0,
                    "l": 3,
                    "solution": "Α",
                    "label": ""
                },
                {
                    "w": 0,
                    "l": 4,
                    "solution": "Λ",
                    "label": ""
                },
                {
                    "w": 0,
                    "l": 5,
                    "solution": "Η",
                    "label": ""
                },
                {
                    "w": 1,
                    "l": 0,
                    "solution": "Μ",
                    "label": ""
                },
                {
                    "w": 1,
                    "l": 1,
                    "solution": "Ι",
                    "label": ""
                },
                {
                    "w": 1,
                    "l": 2,
                    "solution": "Κ",
                    "label": ""
                },
                {
                    "w": 1,
                    "l": 3,
                    "solution": "Ρ",
                    "label": ""
                },
                {
                    "w": 1,
                    "l": 4,
                    "solution": "Η",
                    "label": ""
                }
            ],
            "cursor": 0,
            "hintsUsed": {
                "description": false,
                "revealLargestWord": false,
                "revealFirstLetters": false
            }
        }

        let gameService = new GameService(game)
        gameService.revealFirstLetters()

        let expectedCursor = 1
        let actualCursor = game.cursor

        expect(actualCursor).toBe(expectedCursor)
    })

    test("allLettersInWordAreCorrect returns true if all letters match the solution in a word", () => {
        let game = { "id": 3, "title": "Η ΑΘΑΣΙΑ ΤΗΣ ΑΙΣΙΕ ΑΝ ΕΣΙΕΙ ΑΘΑΣΙΑ ΑΣ ΕΣΙΕΙ", "image": "/src/lib/phrase-images/3151de9b-6cfd-4df0-a4f6-d1053da3b8d6.jpeg", "letterPoints": [{ "w": 0, "l": 0, "solution": "Η", "label": "" }, { "w": 1, "l": 0, "solution": "Α", "label": "" }, { "w": 1, "l": 1, "solution": "Θ", "label": "" }, { "w": 1, "l": 2, "solution": "Α", "label": "" }, { "w": 1, "l": 3, "solution": "Σ", "label": "" }, { "w": 1, "l": 4, "solution": "Ι", "label": "" }, { "w": 1, "l": 5, "solution": "Α", "label": "" }, { "w": 2, "l": 0, "solution": "Τ", "label": "" }, { "w": 2, "l": 1, "solution": "Η", "label": "" }, { "w": 2, "l": 2, "solution": "Σ", "label": "" }, { "w": 3, "l": 0, "solution": "Α", "label": "Α" }, { "w": 3, "l": 1, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 2, "solution": "Σ", "label": "Σ" }, { "w": 3, "l": 3, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 4, "solution": "Ε", "label": "Ε" }, { "w": 4, "l": 0, "solution": "Α", "label": "" }, { "w": 4, "l": 1, "solution": "Ν", "label": "" }, { "w": 5, "l": 0, "solution": "Ε", "label": "" }, { "w": 5, "l": 1, "solution": "Σ", "label": "" }, { "w": 5, "l": 2, "solution": "Ι", "label": "" }, { "w": 5, "l": 3, "solution": "Ε", "label": "" }, { "w": 5, "l": 4, "solution": "Ι", "label": "" }, { "w": 6, "l": 0, "solution": "Α", "label": "" }, { "w": 6, "l": 1, "solution": "Θ", "label": "" }, { "w": 6, "l": 2, "solution": "Α", "label": "" }, { "w": 6, "l": 3, "solution": "Σ", "label": "" }, { "w": 6, "l": 4, "solution": "Ι", "label": "" }, { "w": 6, "l": 5, "solution": "Α", "label": "" }, { "w": 7, "l": 0, "solution": "Α", "label": "" }, { "w": 7, "l": 1, "solution": "Σ", "label": "" }, { "w": 8, "l": 0, "solution": "Ε", "label": "" }, { "w": 8, "l": 1, "solution": "Σ", "label": "" }, { "w": 8, "l": 2, "solution": "Ι", "label": "" }, { "w": 8, "l": 3, "solution": "Ε", "label": "" }, { "w": 8, "l": 4, "solution": "Ι", "label": "" }], "cursor": 15, "hintsUsed": { "description": false, "revealLargestWord": false, "revealFirstLetters": false } }
        let gameService = new GameService(game)

        let check = gameService.allLettersInWordAreCorrect(3)

        expect(check).toBe(true)
    })

    test("allLettersInWordAreCorrect returns false if not all letters match the solution in a word", () => {
        let game = { "id": 3, "title": "Η ΑΘΑΣΙΑ ΤΗΣ ΑΙΣΙΕ ΑΝ ΕΣΙΕΙ ΑΘΑΣΙΑ ΑΣ ΕΣΙΕΙ", "image": "/src/lib/phrase-images/3151de9b-6cfd-4df0-a4f6-d1053da3b8d6.jpeg", "letterPoints": [{ "w": 0, "l": 0, "solution": "Η", "label": "" }, { "w": 1, "l": 0, "solution": "Α", "label": "" }, { "w": 1, "l": 1, "solution": "Θ", "label": "" }, { "w": 1, "l": 2, "solution": "Α", "label": "" }, { "w": 1, "l": 3, "solution": "Σ", "label": "" }, { "w": 1, "l": 4, "solution": "Ι", "label": "" }, { "w": 1, "l": 5, "solution": "Α", "label": "" }, { "w": 2, "l": 0, "solution": "Τ", "label": "" }, { "w": 2, "l": 1, "solution": "Η", "label": "" }, { "w": 2, "l": 2, "solution": "Σ", "label": "" }, { "w": 3, "l": 0, "solution": "Α", "label": "Ε" }, { "w": 3, "l": 1, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 2, "solution": "Σ", "label": "Σ" }, { "w": 3, "l": 3, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 4, "solution": "Ε", "label": "Ε" }, { "w": 4, "l": 0, "solution": "Α", "label": "" }, { "w": 4, "l": 1, "solution": "Ν", "label": "" }, { "w": 5, "l": 0, "solution": "Ε", "label": "" }, { "w": 5, "l": 1, "solution": "Σ", "label": "" }, { "w": 5, "l": 2, "solution": "Ι", "label": "" }, { "w": 5, "l": 3, "solution": "Ε", "label": "" }, { "w": 5, "l": 4, "solution": "Ι", "label": "" }, { "w": 6, "l": 0, "solution": "Α", "label": "" }, { "w": 6, "l": 1, "solution": "Θ", "label": "" }, { "w": 6, "l": 2, "solution": "Α", "label": "" }, { "w": 6, "l": 3, "solution": "Σ", "label": "" }, { "w": 6, "l": 4, "solution": "Ι", "label": "" }, { "w": 6, "l": 5, "solution": "Α", "label": "" }, { "w": 7, "l": 0, "solution": "Α", "label": "" }, { "w": 7, "l": 1, "solution": "Σ", "label": "" }, { "w": 8, "l": 0, "solution": "Ε", "label": "" }, { "w": 8, "l": 1, "solution": "Σ", "label": "" }, { "w": 8, "l": 2, "solution": "Ι", "label": "" }, { "w": 8, "l": 3, "solution": "Ε", "label": "" }, { "w": 8, "l": 4, "solution": "Ι", "label": "" }], "cursor": 15, "hintsUsed": { "description": false, "revealLargestWord": false, "revealFirstLetters": false } }
        let gameService = new GameService(game)

        let check = gameService.allLettersInWordAreCorrect(3)

        expect(check).toBe(false)
    })

    test("isSolved returns true if all letter labels match the solutions in a phrase", () => {
        let game = { "id": 3, "title": "Η ΑΘΑΣΙΑ ΤΗΣ ΑΙΣΙΕ ΑΝ ΕΣΙΕΙ ΑΘΑΣΙΑ ΑΣ ΕΣΙΕΙ", "image": "/src/lib/phrase-images/3151de9b-6cfd-4df0-a4f6-d1053da3b8d6.jpeg", "letterPoints": [{ "w": 0, "l": 0, "solution": "Η", "label": "Η" }, { "w": 1, "l": 0, "solution": "Α", "label": "Α" }, { "w": 1, "l": 1, "solution": "Θ", "label": "Θ" }, { "w": 1, "l": 2, "solution": "Α", "label": "Α" }, { "w": 1, "l": 3, "solution": "Σ", "label": "Σ" }, { "w": 1, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 1, "l": 5, "solution": "Α", "label": "Α" }, { "w": 2, "l": 0, "solution": "Τ", "label": "Τ" }, { "w": 2, "l": 1, "solution": "Η", "label": "Η" }, { "w": 2, "l": 2, "solution": "Σ", "label": "Σ" }, { "w": 3, "l": 0, "solution": "Α", "label": "Α" }, { "w": 3, "l": 1, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 2, "solution": "Σ", "label": "Σ" }, { "w": 3, "l": 3, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 4, "solution": "Ε", "label": "Ε" }, { "w": 4, "l": 0, "solution": "Α", "label": "Α" }, { "w": 4, "l": 1, "solution": "Ν", "label": "Ν" }, { "w": 5, "l": 0, "solution": "Ε", "label": "Ε" }, { "w": 5, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 5, "l": 2, "solution": "Ι", "label": "Ι" }, { "w": 5, "l": 3, "solution": "Ε", "label": "Ε" }, { "w": 5, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 6, "l": 0, "solution": "Α", "label": "Α" }, { "w": 6, "l": 1, "solution": "Θ", "label": "Θ" }, { "w": 6, "l": 2, "solution": "Α", "label": "Α" }, { "w": 6, "l": 3, "solution": "Σ", "label": "Σ" }, { "w": 6, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 6, "l": 5, "solution": "Α", "label": "Α" }, { "w": 7, "l": 0, "solution": "Α", "label": "Α" }, { "w": 7, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 8, "l": 0, "solution": "Ε", "label": "Ε" }, { "w": 8, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 8, "l": 2, "solution": "Ι", "label": "Ι" }, { "w": 8, "l": 3, "solution": "Ε", "label": "Ε" }, { "w": 8, "l": 4, "solution": "Ι", "label": "Ι" }], "cursor": 34, "hintsUsed": { "description": false, "revealLargestWord": false, "revealFirstLetters": false } }
        let gameService = new GameService(game)

        let check = gameService.isSolved()

        expect(check).toBe(true)
    })

    test("isSolved returns false if not all letter labels match the solutions in a phrase", () => {
        let game = { "id": 3, "title": "Η ΑΘΑΣΙΑ ΤΗΣ ΑΙΣΙΕ ΑΝ ΕΣΙΕΙ ΑΘΑΣΙΑ ΑΣ ΕΣΙΕΙ", "image": "/src/lib/phrase-images/3151de9b-6cfd-4df0-a4f6-d1053da3b8d6.jpeg", "letterPoints": [{ "w": 0, "l": 0, "solution": "Η", "label": "Η" }, { "w": 1, "l": 0, "solution": "Α", "label": "Α" }, { "w": 1, "l": 1, "solution": "Θ", "label": "Θ" }, { "w": 1, "l": 2, "solution": "Α", "label": "Α" }, { "w": 1, "l": 3, "solution": "Σ", "label": "Σ" }, { "w": 1, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 1, "l": 5, "solution": "Α", "label": "Α" }, { "w": 2, "l": 0, "solution": "Τ", "label": "Τ" }, { "w": 2, "l": 1, "solution": "Η", "label": "Η" }, { "w": 2, "l": 2, "solution": "Σ", "label": "Σ" }, { "w": 3, "l": 0, "solution": "Α", "label": "Α" }, { "w": 3, "l": 1, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 2, "solution": "Σ", "label": "Σ" }, { "w": 3, "l": 3, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 4, "solution": "Ε", "label": "Ε" }, { "w": 4, "l": 0, "solution": "Α", "label": "Α" }, { "w": 4, "l": 1, "solution": "Ν", "label": "Ν" }, { "w": 5, "l": 0, "solution": "Ε", "label": "Ε" }, { "w": 5, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 5, "l": 2, "solution": "Ι", "label": "Ι" }, { "w": 5, "l": 3, "solution": "Ε", "label": "Ε" }, { "w": 5, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 6, "l": 0, "solution": "Α", "label": "Α" }, { "w": 6, "l": 1, "solution": "Θ", "label": "Θ" }, { "w": 6, "l": 2, "solution": "Α", "label": "Α" }, { "w": 6, "l": 3, "solution": "Σ", "label": "Σ" }, { "w": 6, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 6, "l": 5, "solution": "Α", "label": "Α" }, { "w": 7, "l": 0, "solution": "Α", "label": "Α" }, { "w": 7, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 8, "l": 0, "solution": "Ε", "label": "Ε" }, { "w": 8, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 8, "l": 2, "solution": "Ι", "label": "Ι" }, { "w": 8, "l": 3, "solution": "Ε", "label": "Ε" }, { "w": 8, "l": 4, "solution": "Ι", "label": "Ο" }], "cursor": 34, "hintsUsed": { "description": false, "revealLargestWord": false, "revealFirstLetters": false } }
        let gameService = new GameService(game)

        let check = gameService.isSolved()

        expect(check).toBe(false)
    })

    test("gameHasEnded returns true if puzzle is solved", () => {
        let game = { "id": 3, "title": "Η ΑΘΑΣΙΑ ΤΗΣ ΑΙΣΙΕ ΑΝ ΕΣΙΕΙ ΑΘΑΣΙΑ ΑΣ ΕΣΙΕΙ", "image": "/src/lib/phrase-images/3151de9b-6cfd-4df0-a4f6-d1053da3b8d6.jpeg", "letterPoints": [{ "w": 0, "l": 0, "solution": "Η", "label": "Η" }, { "w": 1, "l": 0, "solution": "Α", "label": "Α" }, { "w": 1, "l": 1, "solution": "Θ", "label": "Θ" }, { "w": 1, "l": 2, "solution": "Α", "label": "Α" }, { "w": 1, "l": 3, "solution": "Σ", "label": "Σ" }, { "w": 1, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 1, "l": 5, "solution": "Α", "label": "Α" }, { "w": 2, "l": 0, "solution": "Τ", "label": "Τ" }, { "w": 2, "l": 1, "solution": "Η", "label": "Η" }, { "w": 2, "l": 2, "solution": "Σ", "label": "Σ" }, { "w": 3, "l": 0, "solution": "Α", "label": "Α" }, { "w": 3, "l": 1, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 2, "solution": "Σ", "label": "Σ" }, { "w": 3, "l": 3, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 4, "solution": "Ε", "label": "Ε" }, { "w": 4, "l": 0, "solution": "Α", "label": "Α" }, { "w": 4, "l": 1, "solution": "Ν", "label": "Ν" }, { "w": 5, "l": 0, "solution": "Ε", "label": "Ε" }, { "w": 5, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 5, "l": 2, "solution": "Ι", "label": "Ι" }, { "w": 5, "l": 3, "solution": "Ε", "label": "Ε" }, { "w": 5, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 6, "l": 0, "solution": "Α", "label": "Α" }, { "w": 6, "l": 1, "solution": "Θ", "label": "Θ" }, { "w": 6, "l": 2, "solution": "Α", "label": "Α" }, { "w": 6, "l": 3, "solution": "Σ", "label": "Σ" }, { "w": 6, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 6, "l": 5, "solution": "Α", "label": "Α" }, { "w": 7, "l": 0, "solution": "Α", "label": "Α" }, { "w": 7, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 8, "l": 0, "solution": "Ε", "label": "Ε" }, { "w": 8, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 8, "l": 2, "solution": "Ι", "label": "Ι" }, { "w": 8, "l": 3, "solution": "Ε", "label": "Ε" }, { "w": 8, "l": 4, "solution": "Ι", "label": "Ι" }], "cursor": 34, "hintsUsed": { "description": false, "revealLargestWord": false, "revealFirstLetters": false }, wrongGuesses: 8, wrongGuessLimit: 10 }
        let gameService = new GameService(game)

        let check = gameService.gameHasEnded()

        expect(check).toBe(true)
    })

    test("gameHasEnded returns true if wrong guesses reached the limit", () => {
        let game = { "id": 3, "title": "Η ΑΘΑΣΙΑ ΤΗΣ ΑΙΣΙΕ ΑΝ ΕΣΙΕΙ ΑΘΑΣΙΑ ΑΣ ΕΣΙΕΙ", "image": "/src/lib/phrase-images/3151de9b-6cfd-4df0-a4f6-d1053da3b8d6.jpeg", "letterPoints": [{ "w": 0, "l": 0, "solution": "Η", "label": "Η" }, { "w": 1, "l": 0, "solution": "Α", "label": "Α" }, { "w": 1, "l": 1, "solution": "Θ", "label": "Θ" }, { "w": 1, "l": 2, "solution": "Α", "label": "Α" }, { "w": 1, "l": 3, "solution": "Σ", "label": "Σ" }, { "w": 1, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 1, "l": 5, "solution": "Α", "label": "Α" }, { "w": 2, "l": 0, "solution": "Τ", "label": "Τ" }, { "w": 2, "l": 1, "solution": "Η", "label": "Η" }, { "w": 2, "l": 2, "solution": "Σ", "label": "Σ" }, { "w": 3, "l": 0, "solution": "Α", "label": "Α" }, { "w": 3, "l": 1, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 2, "solution": "Σ", "label": "Σ" }, { "w": 3, "l": 3, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 4, "solution": "Ε", "label": "Ε" }, { "w": 4, "l": 0, "solution": "Α", "label": "Α" }, { "w": 4, "l": 1, "solution": "Ν", "label": "Ν" }, { "w": 5, "l": 0, "solution": "Ε", "label": "Ε" }, { "w": 5, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 5, "l": 2, "solution": "Ι", "label": "Ι" }, { "w": 5, "l": 3, "solution": "Ε", "label": "Ε" }, { "w": 5, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 6, "l": 0, "solution": "Α", "label": "Α" }, { "w": 6, "l": 1, "solution": "Θ", "label": "Θ" }, { "w": 6, "l": 2, "solution": "Α", "label": "Α" }, { "w": 6, "l": 3, "solution": "Σ", "label": "Σ" }, { "w": 6, "l": 4, "solution": "Ι", "label": "Ι" }, { "w": 6, "l": 5, "solution": "Α", "label": "Α" }, { "w": 7, "l": 0, "solution": "Α", "label": "Α" }, { "w": 7, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 8, "l": 0, "solution": "Ε", "label": "Ε" }, { "w": 8, "l": 1, "solution": "Σ", "label": "Σ" }, { "w": 8, "l": 2, "solution": "Ι", "label": "Ι" }, { "w": 8, "l": 3, "solution": "Ε", "label": "Ε" }, { "w": 8, "l": 4, "solution": "Ι", "label": "Ο" }], "cursor": 34, "hintsUsed": { "description": false, "revealLargestWord": false, "revealFirstLetters": false }, wrongGuesses: 10, wrongGuessLimit: 10 }
        let gameService = new GameService(game)

        let check = gameService.gameHasEnded()

        expect(check).toBe(true)
    })

    test("gameHasEnded returns false if wrong guesses not reached the limit and puzzle is not solved", () => {
        let game = { "id": 3, "title": "Η ΑΘΑΣΙΑ ΤΗΣ ΑΙΣΙΕ ΑΝ ΕΣΙΕΙ ΑΘΑΣΙΑ ΑΣ ΕΣΙΕΙ", "image": "/src/lib/phrase-images/3151de9b-6cfd-4df0-a4f6-d1053da3b8d6.jpeg", "letterPoints": [{ "w": 0, "l": 0, "solution": "Η", "label": "" }, { "w": 1, "l": 0, "solution": "Α", "label": "" }, { "w": 1, "l": 1, "solution": "Θ", "label": "" }, { "w": 1, "l": 2, "solution": "Α", "label": "" }, { "w": 1, "l": 3, "solution": "Σ", "label": "" }, { "w": 1, "l": 4, "solution": "Ι", "label": "" }, { "w": 1, "l": 5, "solution": "Α", "label": "" }, { "w": 2, "l": 0, "solution": "Τ", "label": "" }, { "w": 2, "l": 1, "solution": "Η", "label": "" }, { "w": 2, "l": 2, "solution": "Σ", "label": "" }, { "w": 3, "l": 0, "solution": "Α", "label": "Ε" }, { "w": 3, "l": 1, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 2, "solution": "Σ", "label": "Σ" }, { "w": 3, "l": 3, "solution": "Ι", "label": "Ι" }, { "w": 3, "l": 4, "solution": "Ε", "label": "Ε" }, { "w": 4, "l": 0, "solution": "Α", "label": "" }, { "w": 4, "l": 1, "solution": "Ν", "label": "" }, { "w": 5, "l": 0, "solution": "Ε", "label": "" }, { "w": 5, "l": 1, "solution": "Σ", "label": "" }, { "w": 5, "l": 2, "solution": "Ι", "label": "" }, { "w": 5, "l": 3, "solution": "Ε", "label": "" }, { "w": 5, "l": 4, "solution": "Ι", "label": "" }, { "w": 6, "l": 0, "solution": "Α", "label": "" }, { "w": 6, "l": 1, "solution": "Θ", "label": "" }, { "w": 6, "l": 2, "solution": "Α", "label": "" }, { "w": 6, "l": 3, "solution": "Σ", "label": "" }, { "w": 6, "l": 4, "solution": "Ι", "label": "" }, { "w": 6, "l": 5, "solution": "Α", "label": "" }, { "w": 7, "l": 0, "solution": "Α", "label": "" }, { "w": 7, "l": 1, "solution": "Σ", "label": "" }, { "w": 8, "l": 0, "solution": "Ε", "label": "" }, { "w": 8, "l": 1, "solution": "Σ", "label": "" }, { "w": 8, "l": 2, "solution": "Ι", "label": "" }, { "w": 8, "l": 3, "solution": "Ε", "label": "" }, { "w": 8, "l": 4, "solution": "Ι", "label": "" }], "cursor": 15, "hintsUsed": { "description": false, "revealLargestWord": false, "revealFirstLetters": false }, wrongGuesses: 8, wrongGuessLimit: 10 }
        let gameService = new GameService(game)

        let check = gameService.gameHasEnded()

        expect(check).toBe(false)
    })
})