<script>
    import GameService from "../modules/GameService";


    import phrases from "$lib/phrases.json";
    import GameFactory from "../modules/GameFactory";
    import { onMount } from "svelte";
    let currentPhrase = phrases[12]

    let gameFactory = new GameFactory()
    
    let game = $state(gameFactory.getNewGameFromPhrase(currentPhrase))
    let gameService = new GameService(game)

    let showKeyboard = $state(false)

    const addLetter = function (letter){
        game.boxes[game.cursor.word][game.cursor.letter].label = letter
        moveCursorForward()
    }

    const removeLetter = function (){
        if(game.boxes[game.cursor.word][game.cursor.letter].label === ""){
            moveCursorBack()
        }
        game.boxes[game.cursor.word][game.cursor.letter].label = ""
    }

    const moveCursorForward = function () {
        let maxWords = game.boxes.length;
        let maxLetters = game.boxes[game.cursor.word].length;
        
        game.cursor.letter += 1

        if(game.cursor.letter === maxLetters){
            game.cursor.letter = 0
            game.cursor.word += 1
        }

        if(game.cursor.word === maxWords){
            game.cursor.letter = maxLetters - 1
            game.cursor.word = maxWords - 1
        }        
    }

    const moveCursorBack = function() {
        if(game.cursor.word === 0 && game.cursor.letter === 0){
            game.cursor = {
                word: 0,
                letter: 0
            }
        }
        else{
            game.cursor.letter -= 1
            
            if(game.cursor.letter < 0){                
                game.cursor.word -= 1
                game.cursor.letter = game.boxes[game.cursor.word].length - 1
            }
        }
    }

    const moveCursor = function(word, letter){
        game.cursor = {
            word,letter
        }
    }

    onMount(() => {
        document.addEventListener("keyup", (e) => {
            let key = e.key.toUpperCase()
            
            if(e.code.startsWith("Key")){
                let letterMap = {"E":"Ε","R":"Ρ","T":"Τ","Y":"Υ","U":"Θ","I":"Ι","O":"Ο","P":"Π","A":"Α","S":"Σ","D":"Δ","F":"Φ","G":"Γ","H":"Η","J":"Ξ","K":"Κ","L":"Λ","Z":"Ζ","X":"Χ","C":"Ψ","V":"Ω","B":"Β","N":"Ν","M":"Μ"}
                addLetter(letterMap[key])
            }
            else if(key === "BACKSPACE"){
                removeLetter()
            }
        })

        if (window.matchMedia("(pointer: coarse)").matches){
            document.querySelector("#keyboard-button").setAttribute("visible", 1)
        }
    })

    let keyboardKeys = [
        "Ε Ρ Τ Υ Θ Ι Ο Π",
        "Α Σ Δ Φ Γ Η Ξ Κ Λ",
        "Ζ Χ Ψ Ω Β Ν Μ"
    ]
</script>

<main>
    <section class="phrase-image">
        <img src={game.image} alt="The phrase" id="phrase-image" />
    </section>

    <section class="phrase-blank-squares">
        {#each game.boxes as word, wordIndex}
            <div class="phrase-word" all-correct={gameService.allLettersInWordAreCorrect(wordIndex) ? "yes" : "no"}>
                {#each word as letter, letterIndex}
                    <div class="phrase-word-letter {wordIndex === game.cursor.word && letterIndex === game.cursor.letter ? "cursor" : ""}" status={gameService.getLetterBoxStatus(wordIndex, letterIndex)}>
                        <div class="content" onclick={() => {
                            moveCursor(wordIndex, letterIndex)

                            showKeyboard = window.matchMedia("(pointer: coarse)").matches
                        }}>{letter.label}</div>
                    </div>
                {/each}
            </div>
        {/each}
    </section>
    <button id="keyboard-button" visible="0" onclick={() => {        
        showKeyboard = true
    }}><span>Λύσε το!</span></button>

    <div style={showKeyboard ? "margin-top: 300px" : ""}></div>
</main>

<div id="keyboard" visible={showKeyboard ? "1" : "0"}>
    <button class="close" onclick={() => showKeyboard = false}>Κλείσιμο</button>
    {#each keyboardKeys as keyRow}
        <div class="row">
        {#each keyRow.split(" ") as key}
            <div class="letter-button" onclick={() => addLetter(key)} role="button">{key}</div>
        {/each}
        </div>
    {/each}
    <div class="row">
        <div class="letter-button" onclick={removeLetter} role="button">← Σβήσιμο</div>
    </div>
</div>

<style>
    * {
        margin: 0;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }

    main {
        max-width: 600px;
        margin: auto;
    }

    #phrase-image {
        display: block;
        width: 100%;
        border-radius: 30px;
    }

    .phrase-blank-squares{
        padding: 21px;
    }

    .phrase-blank-squares .phrase-word {
        display: inline-block;
        gap: 3px;
        margin-top: 21px;
        margin-right: 12px;
    }

    .phrase-blank-squares .phrase-word[all-correct="yes"]{
        background-color: green;
        border-radius: 6px;
    }

    .phrase-blank-squares .phrase-word[all-correct="yes"] .phrase-word-letter{
        border: 0;
        box-shadow: none;
    }

    .phrase-blank-squares .phrase-word .phrase-word-letter {
        border: 1px solid #ddd;
        box-shadow: 0 0 15px #ddd;
        border-radius: 6px;
        height: 42px;
        width: 30px;
        font-size: 21px;
        margin-right: 3px;
        display: inline-block;
        position: relative;
    }

    .phrase-blank-squares .phrase-word .phrase-word-letter .content {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        font-weight: bold;
    }

    .phrase-blank-squares .phrase-word .phrase-word-letter.cursor{
        border: 1px solid black;
    }

    .phrase-blank-squares .phrase-word .phrase-word-letter[status="CORRECT"]{
        background-color: green;
    }

    .phrase-blank-squares .phrase-word .phrase-word-letter[status="WRONG"]{
        background-color: rgb(159, 0, 0);
    }

    .phrase-blank-squares .phrase-word .phrase-word-letter[status="CORRECT"] .content,
    .phrase-blank-squares .phrase-word .phrase-word-letter[status="WRONG"] .content{
        color: white;
    }

    #keyboard-button[visible="0"]{
        display: none;
    }

    #keyboard-button{
        display: block;
        width: 100%;
        margin-top: 9px;
        font-size: 15px;   
        background-color: darkgreen;
        color: white;
        height: 30px;
    }

    #keyboard{
        background-color: #eee;
        position: fixed;
        width: 100%;

        bottom: -100%;
        transition: bottom 0.3s ease-in-out;
    }

    #keyboard[visible="1"]{
        bottom: 0;
    }

    #keyboard .row{
        margin-top: 12px;
        display: flex;
        gap: 6px;
        justify-content: center;
    }

    #keyboard .row .letter-button{
        display: block;
        font-size: 15px;
        border-radius: 6px;
        font-size: 21px;
        border: 1px solid #999;
        background-color: #eee;
        padding: 9px;
    }
</style>
