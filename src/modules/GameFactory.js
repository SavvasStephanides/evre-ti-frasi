export default class GameFactory {
    getNewGameFromPhrase(gameId, phrase) {
        const game = {};
        game.id = gameId
        game.title = phrase.title
        game.hint = phrase.hint

        const images = import.meta.glob("$lib/phrase-images/*.*", {
            eager: true,
        });
        let imagePaths = [];
        for (let imagePath in images) {
            imagePaths.push(images[imagePath].default);
        }
        let img = imagePaths.find((p) => p.endsWith(phrase.file));
        game.image = img;

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

        return game;
    }

    getGameFromLocalStorage(){
        let gameFromStorage = localStorage.getItem("evretifrasi-game")
        return JSON.parse(gameFromStorage)
    }
}