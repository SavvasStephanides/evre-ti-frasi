export default class GameFactory {
    getNewGameFromPhrase(gameId, phrase) {
        const game = {};
        game.id = gameId

        const images = import.meta.glob("$lib/phrase-images/*.*", {
            eager: true,
        });
        let imagePaths = [];
        for (let imagePath in images) {
            imagePaths.push(images[imagePath].default);
        }
        let img = imagePaths.find((p) => p.endsWith(phrase.file));
        game.image = img;

        game.boxes = phrase.title.split(" ").map((word) =>
            word.split("").map((letter) => {
                let gameLetter = {
                    label: "",
                    solution: letter
                }
                
                return gameLetter;
            }),
        );

        game.cursor = {
            word: 0,
            letter: 0,
        }

        return game;
    }

    getGameFromLocalStorage(){
        let gameFromStorage = localStorage.getItem("evretifrasi-game")
        return JSON.parse(gameFromStorage)
    }
}