export default class GameService {
    getNewGameFromPhrase(phrase) {
        const game = {};

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

    getBoxStatus(game, word, letter){
        let box = game.boxes[word][letter]

        if(box.label === ""){
            return "BLANK"
        }
        if(box.label === box.solution){
            return "CORRECT"
        }
        else{
            return "WRONG"
            
        }
    }
}