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

    revealLargestWord(){
        const wordSizes = this.game.boxes.map((word => word.length))        
        
        const wordSizesWithIndexes = wordSizes.map((wordSize, index) => {
            return {
                wordSize,index
            }
        })        

        let largestWordIndex = wordSizesWithIndexes.reduce((accumulator, currentValue) => {
            return accumulator.wordSize > currentValue.wordSize ? accumulator : currentValue
        }).index
        
        this.game.boxes[largestWordIndex].forEach((letter) => letter.label = letter.solution)

        this.game.hintsUsed.revealLargestWord = true
    }

    showDescription(){
        this.game.hintsUsed.description = true
    }

    revealFirstLetters(){        
        let words = this.game.boxes
        words.forEach(word => word[0].label = word[0].solution)
        this.game.hintsUsed.revealFirstLetters = true
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