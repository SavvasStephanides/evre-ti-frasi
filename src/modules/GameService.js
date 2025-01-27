export default class GameService {
    constructor(game){
        this.game = game
    }

    getLetterBoxStatus(word, letter){
        let box = this.game.boxes[word][letter]

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

    allLettersInWordAreCorrect(word){
        let wordLetters = this.game.boxes[word]
        
        let correctLetters = wordLetters.filter(letter => letter.label === letter.solution)

        return correctLetters.length === wordLetters.length
    }

    isSolved(){                   
        return this.game.boxes.every(word => word.every(letter => letter.label === letter.solution))
    }
}