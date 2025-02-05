export default class GameService {
    constructor(game){
        this.game = game
    }

    getLetterBoxStatus(word, letter){
        let point = this.game.letterPoints.find((point) => point.w === word && point.l === letter)

        if(point.label === ""){
            return "BLANK"
        }
        if(point.label === point.solution){
            return "CORRECT"
        }
        else{
            return "WRONG"
            
        }
    }

    moveCursorForward () {
        this.game.cursor++
        while(this.game.letterPoints[this.game.cursor] && this.getLetterBoxStatus(this.game.letterPoints[this.game.cursor].w, this.game.letterPoints[this.game.cursor].l) === "CORRECT"){
            this.game.cursor++
        }
        
        if(this.game.cursor >= this.game.letterPoints.length){
            this.game.cursor = this.game.letterPoints.length - 1
        }        
    }

    moveCursorBack() {        
        this.game.cursor--

        while(this.game.letterPoints[this.game.cursor] && this.getLetterBoxStatus(this.game.letterPoints[this.game.cursor].w, this.game.letterPoints[this.game.cursor].l) === "CORRECT"){
            this.game.cursor--
        }

        if(this.game.cursor < 0){
            this.game.cursor = 0
        }
    }

    moveCursor(index){
        this.game.cursor = index
    }

    revealLargestWord(){
        let largestWordIndex = this.game.letterPoints.find(point => point.l === Math.max(...this.game.letterPoints.map(p => p.l))).w
                
        this.game.letterPoints.filter((point) => point.w === largestWordIndex).forEach((point) => {
            point.label = point.solution
        })

        this.game.hintsUsed.revealLargestWord = true
    }

    showDescription(){
        this.game.hintsUsed.description = true
    }

    revealFirstLetters(){        
        this.game.letterPoints.filter((point) => point.l === 0).forEach((point) => point.label = point.solution)
        this.game.hintsUsed.revealFirstLetters = true
    }

    allLettersInWordAreCorrect(word){
        let wordLetters = this.game.letterPoints.filter((point) => point.w === word)
        
        let correctLetters = wordLetters.filter(letter => letter.label === letter.solution)

        return correctLetters.length === wordLetters.length
    }

    incrementWrongGuesses() {
        this.game.wrongGuesses++
    }

    gameHasEnded(){
        let gameIsSolved = this.isSolved()
        let reachedWrongGuessLimit = this.game.wrongGuesses === this.game.wrongGuessLimit        

        return gameIsSolved ||  reachedWrongGuessLimit
    }

    isSolved(){                   
        return this.game.letterPoints.every((point) => point.label === point.solution)
    }

    getUnsolvedLetterPoints(){
        return this.game.letterPoints.filter((point) => point.label !== point.solution)
    }

    getGameAsShareableString(){
        
        let title = `🇨🇾💬 Έβρε τη φράση #${this.game.id}`
        let secondLine = `${this.isSolved() ? "🎉" : "😢"} ${this.game.title.split(" ").map((word, index) => index).map((wordIndex) => this.allLettersInWordAreCorrect(wordIndex) ? "✅" : "❌").join("")}`
        let thirdLine = Object.keys(this.game.hintsUsed).map(key => this.game.hintsUsed[key] ? "💡" : "").join("")

        return title + "\n\n" + secondLine + "\n" + thirdLine + "\n"
    }
}