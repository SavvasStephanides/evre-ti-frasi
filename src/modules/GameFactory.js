export default class GameFactory {
    getNewGameFromPhrase(gameId, phrase) {
        const game = {};
        game.id = gameId
        game.title = phrase.title
        game.hint = phrase.hint
        game.file = phrase.file

        game.letterPoints = []

        let words = phrase.title.split(" ")

        for (let w = 0 ; w < words.length ; w++){
            for(let l = 0 ; l < words[w].length ; l++){
                let point = {
                    w,
                    l,
                    solution: words[w][l],
                    label: ""
                }
                game.letterPoints.push(point)
            }
        }                

        game.cursor = 0

        game.hintsUsed = {
            description: false,
            revealLargestWord: false,
            revealFirstLetters: false
        }

        game.wrongGuesses = 0
        game.wrongGuessLimit = 10

        return game
    }

    getGameFromLocalStorage(){
        let gameFromStorage = localStorage.getItem("evretifrasi-game")
        return JSON.parse(gameFromStorage)
    }
}