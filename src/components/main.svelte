<script>
    import GameService from "../modules/GameService";


    import phrases from "$lib/phrases.json";
    let currentPhrase = phrases[60]

    let gameService = new GameService()

    let game = $state(gameService.getNewGameFromPhrase(currentPhrase))

    const addLetter = function (letter){
        game.boxes[game.cursor.word][game.cursor.letter].label = letter
        
        moveCursorForward()
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
</script>

<main>
    <section class="phrase-image">
        <img src={game.image} alt="The phrase" id="phrase-image" />
    </section>

    <section class="phrase-blank-squares">
        {#each game.boxes as word, wordIndex}
            <div class="phrase-word">
                {#each word as letter, letterIndex}
                    <div class="phrase-word-letter {wordIndex === game.cursor.word && letterIndex === game.cursor.letter ? "cursor" : ""}" status={gameService.getBoxStatus(game, wordIndex, letterIndex)}>
                        <div class="content">{letter.label}</div>
                    </div>
                {/each}
            </div>
        {/each}
    </section>
    <button onclick={() => addLetter("Ε")}>Add letter to cursor</button>
</main>

<style>
    * {
        margin: 0;
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

    .phrase-blank-squares .phrase-word {
        display: inline-block;
        gap: 3px;
        margin-top: 21px;
        margin-right: 12px;
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
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
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
</style>
