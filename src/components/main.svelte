<script>
    import { base } from '$app/paths'

    import GameService from "../modules/GameService";

    import phrases from "$lib/phrases.json";
    import GameFactory from "../modules/GameFactory";
    import { onMount } from "svelte";
    import confetti from "canvas-confetti";
    import PhraseService from "../modules/PhraseService";

    import loadingGif from "$lib/loading.gif";

    let showGameRules = $state(true);
    import gameRulesImage from "$lib/phrase-images/cea69d11-6c76-4a2e-94a9-dc10f9214830.png";
    import gameRulesGreenSquare from "$lib/rules-assets/green-square.png";
    import gameRulesRedSquare from "$lib/rules-assets/red-square.png";
    import gameRulesGreenWord from "$lib/rules-assets/green-word.png";
    import gameRulesSolved from "$lib/rules-assets/solved.png";

    let phraseService = new PhraseService();
    let gameFactory = new GameFactory();
    let currentPhrase = phraseService.getDailyPhrase()    

    let showGameRulesPopup;

    let game = $state(null);
    let gameService = $state(null)
    let showKeyboard = $state(false)
    let midnightTimer = $state("")
    let gameStreak = $state({})

    onMount(() => {
        const savedGame = gameFactory.getGameFromLocalStorage()

        const dailyGame = gameFactory.getNewGameFromPhrase(
            currentPhrase.id,
            currentPhrase.phrase,
        )        

        if (savedGame === null) {
            game = dailyGame;
        } else {
            if (savedGame.id === dailyGame.id) {
                game = savedGame;
            } else {
                game = dailyGame;
            }
        }

        gameService = new GameService(game)

        let showRulesFlagFromLocalStorage = localStorage.getItem(
            "evretifrasi-showRules",
        );

        if (showRulesFlagFromLocalStorage) {
            showGameRules = showRulesFlagFromLocalStorage === "true"
        } else {
            showGameRules = true
        }

        setInterval(() => {
            let now = new Date()

        let timerHours = 23 - now.getHours()
        timerHours = timerHours >= 10 ? timerHours : `0${timerHours}`
        let timerMinutes = 59 - now.getMinutes()
        timerMinutes = timerMinutes >= 10 ? timerMinutes : `0${timerMinutes}`
        let timerSeconds = 59 - now.getSeconds()
        timerSeconds = timerSeconds >= 10 ? timerSeconds : `0${timerSeconds}`

        midnightTimer = `${timerHours}:${timerMinutes}:${timerSeconds}`
            
        },1000)

        gameStreak = JSON.parse(localStorage.getItem("evretifrasi-streak"))             
    })

    $effect(() => {
        let gameStringified = JSON.stringify(game)
        localStorage.setItem("evretifrasi-game", gameStringified)

        localStorage.setItem("evretifrasi-showRules", showGameRules)
    })

    const addLetter = function (letter) {        
        if (!gameService.gameHasEnded()) {
            game.letterPoints[game.cursor].label = letter

            if(game.letterPoints[game.cursor].solution !== letter){
                gameService.incrementWrongGuesses()
            }

            gameService.moveCursorForward()

            if (gameService.isSolved()) {
                location.href="#top"
                fireConfetti()
                
                let updatedStreak
                
                if(gameStreak === null){
                    console.log(`gameStreak is null`)
                    
                    let d = new Date()
                    d.setHours(0,0,0,0)
                    updatedStreak = {
                        streak: 1, 
                        date: d
                    }
                }
                else{                    
                    let todayDate = new Date()
                    todayDate.setHours(0,0,0,0)
                    let todayDateAsString = `${todayDate.getFullYear()}-${todayDate.getMonth()+1}-${todayDate.getDate()}`

                    let streakDate = new Date(gameStreak.date)
                    streakDate.setHours(0,0,0,0)                    
                    
                    if(todayDate - streakDate === 86400000){
                        updatedStreak = {
                            streak: gameStreak.streak + 1, 
                            date: todayDate
                        }
                    }
                    else{
                        updatedStreak = {
                            streak: 1, 
                            date: todayDateAsString
                        }
                    }
                }

                console.log(`Saving streak`)
                console.log(updatedStreak)
                
                
                
                localStorage.setItem("evretifrasi-streak", JSON.stringify(updatedStreak))
                gameStreak = updatedStreak
            }
        }
    };

    const removeLetter = function () {
        if (game.letterPoints[game.cursor].label === "") {
            gameService.moveCursorBack();
        }
        game.letterPoints[game.cursor].label = "";
    };

    const fireConfetti = function () {
        confetti({
            particleCount: 1000,
            spread: 1000,
            origin: { y: 0.6 },
        });
    };

    const shareGame = function () {
        let text = gameService.getGameAsShareableString()

        if (navigator.share) {
            navigator.share({
                text: text,
            });
        } else {
            navigator.clipboard.writeText(text);
        }
    }

    const setPhraseImageSize = function () {
        let image = document.querySelector(".phrase-image img")
        let currentSize = image.getAttribute("size")
        if(currentSize === "small"){
            image.setAttribute("size", "full")
        }
        else{
            image.setAttribute("size", "small")
        }
    }

    onMount(() => {
        document.addEventListener("keyup", (e) => {
            if (e.code.startsWith("Key")) {
                let key = e.code.replace("Key", "");
                let letterMap = {
                    E: "Ε",
                    R: "Ρ",
                    T: "Τ",
                    Y: "Υ",
                    U: "Θ",
                    I: "Ι",
                    O: "Ο",
                    P: "Π",
                    A: "Α",
                    S: "Σ",
                    D: "Δ",
                    F: "Φ",
                    G: "Γ",
                    H: "Η",
                    J: "Ξ",
                    K: "Κ",
                    L: "Λ",
                    Z: "Ζ",
                    X: "Χ",
                    C: "Ψ",
                    V: "Ω",
                    B: "Β",
                    N: "Ν",
                    M: "Μ",
                };
                addLetter(letterMap[key]);
            } else if (e.code === "Backspace") {
                removeLetter();
            }
        });

        if (window.matchMedia("(pointer: coarse)").matches) {
            document
                .querySelector("#keyboard-button").setAttribute("visible", "1")   
        }
        
        
    });

    let keyboardKeys = [
        "Ε Ρ Τ Υ Θ Ι Ο Π",
        "Α Σ Δ Φ Γ Η Ξ Κ Λ",
        "Ζ Χ Ψ Ω Β Ν Μ",
    ]
</script>

{#if game === null}
    <div style="text-align: center;">
        <img src={base + loadingGif} alt="loading" style="width: 60px" />
    </div>
{:else}
    
    <main>
        <section class="phrase-image">
            <img src={game.image} alt="The phrase" size={gameService.isSolved() ? "small" : "full"} onclick={setPhraseImageSize}/>
        </section>
        {#if gameService.gameHasEnded()}
            <section id="end-page">
                {#if gameService.isSolved()}
                    <h2>🎉 Ήβρες τη φράση! 🎉</h2>
                {:else}
                    <h2>😢 Έν ήβρες τη φράση 😢</h2>
                {/if}
                <div class="game-title">{game.title}</div>

                <button class="share" onclick={shareGame}
                    >Μοιράσου το σκορ σου!</button
                >

                {#if gameService.isSolved()}
                    <div class="timer" style="text-align: center; margin-top: 30px;">
                        <div style="font-weight: bold; font-size: 21px">Σερί νικών:</div>
                        <div style="font-size: 30px; font-weight: bold; margin-top: 9px;">{gameStreak.streak}</div>
                        <div>{gameStreak.streak === 1 ? "συνεχόμενη νίκη" : "συνεχόμενες νίκες"}</div>
                    </div>
                {/if}

                <div class="timer" style="text-align: center; margin-top: 30px;">
                    <div style="font-weight: bold; font-size: 21px">Επόμενη φράση σε</div>
                    <div style="font-size: 30px; font-weight: bold; margin-top: 9px;">{midnightTimer}</div>
                </div>

                
            </section>
        {:else}
            <section>
                <div style={`text-align: center; margin-top: 15px; font-size: 15px; ${game.wrongGuesses === 0 ? "display:none" : ""}`}>
                    {Array(game.wrongGuesses).fill("🟥").join(" ")} {Array(game.wrongGuessLimit - game.wrongGuesses).fill("⬜️").join(" ")}
                </div>
                <div id="solve-cta" visible={window.matchMedia(
                    "(pointer: coarse)",
                ).matches ? 1 : 0}>
                    <button onclick={() => {
                        location.href = "#phrase-blank-squares"
                        showKeyboard = true
                        document.querySelector("#solve-cta").setAttribute("visible", "0")
                    }}>Λύσε το!</button>
                </div>
            </section>
            <section
                id="description"
                show={game.hintsUsed.description ? "1" : "0"}
            >
                {game.hint}
            </section>

            <section class="phrase-blank-squares" id="phrase-blank-squares">
                {#each [...new Set(game.letterPoints.map((point) => point.w))] as wordIndex}
                    <div
                        class="phrase-word"
                        all-correct={gameService.allLettersInWordAreCorrect(
                            wordIndex,
                        )
                            ? "yes"
                            : "no"}
                    >
                        {#each game.letterPoints.filter((point) => point.w === wordIndex) as wordLetter}
                            <div
                                class="phrase-word-letter {game.letterPoints[
                                    game.cursor
                                ].w === wordIndex &&
                                game.letterPoints[game.cursor].l ===
                                    wordLetter.l
                                    ? 'cursor'
                                    : ''}"
                                status={gameService.getLetterBoxStatus(
                                    wordIndex,
                                    wordLetter.l,
                                )}
                            >
                                <div
                                    class="content"
                                    onclick={() => {
                                        gameService.moveCursor(
                                            game.letterPoints.findIndex(
                                                (point) =>
                                                    point.w === wordIndex &&
                                                    point.l === wordLetter.l,
                                            ),
                                        );
                                        showKeyboard =
                                            window.matchMedia(
                                                "(pointer: coarse)",
                                            ).matches
                                    }}
                                >
                                    {wordLetter.label}
                                </div>
                            </div>
                        {/each}
                    </div>
                {/each}
            </section>

            <section id="hints">
                <h2>Βοήθειες</h2>
                <button
                    onclick={() => gameService.showDescription()}
                    disabled={game.hintsUsed.description}
                    >Δείξε την περιγραφή της φράσης</button
                >
                <button
                    onclick={() => gameService.revealLargestWord()}
                    disabled={game.hintsUsed.revealLargestWord}
                    >Φανέρωσε την μεγαλύτερη λέξη</button
                >
                <button
                    onclick={() => gameService.revealFirstLetters()}
                    disabled={game.hintsUsed.revealFirstLetters}
                    >Φανέρωσε το πρώτο γράμμα της κάθε λέξης</button
                >
            </section>

            <div
                style={showKeyboard && !gameService.gameHasEnded()
                    ? "margin-top: 300px"
                    : ""}
            ></div>
        {/if}
    </main>

    <div
        id="game-rules-overlay"
        style={showGameRules ? "display: block" : "display: none"}
    >
        <div id="game-rules">
            <button onclick={() => (showGameRules = false)} class="close-button"
                >X</button
            >
            <div class="content">
                <h1>Πώς παίζεται το παιχνίδι:</h1>

                <p>
                    Μάντεψε την Κυπριακή φράση της ημέρας θωρώντας την εικόνα.
                </p>

                <p>
                    Η φράση μπορεί να εν κάτι που λαλούν οι Κυπραίοι, κάποιο
                    γνωστό τραγούδι, κάποιος γλωσσοδέτης κτλ...
                </p>

                <hr />

                <h2>Παράδειγματα</h2>

                <img src={gameRulesImage} alt="" style="width: 100%" />

                <p>Πράσινο κουτούι σημαίνει ότι το γράμμα εν σωστό</p>
                <img src={gameRulesGreenSquare} alt="" />

                <p>Κόκκινο κουτούι σημαίνει ότι το γράμμα εν λάθος</p>
                <img src={gameRulesRedSquare} alt="" />

                <p>
                    Πράσινο κουτούι γυρώ που την λέξη σημαίνει ότι ολόκληρη η
                    λέξη εν σωστή
                </p>
                <img src={gameRulesGreenWord} alt="" />

                <p>Μόλις έβρεις ολόκληρη την φράση, δείχνει σου το τούτο:</p>
                <img src={gameRulesSolved} alt="" />

                <hr />

                <p style="font-weight: bold">Τζαινούρκα φράση κάθε μέρα!</p>
            </div>
        </div>
    </div>

    <div id="keyboard" visible={showKeyboard && !gameService.gameHasEnded() ? "1" : "0"}>
        <button class="close" onclick={() => (showKeyboard = false)}>X</button>
        {#each keyboardKeys as keyRow}
            <div class="row">
                {#each keyRow.split(" ") as key}
                    <button
                        class="letter-button"
                        onclick={() => addLetter(key)}>
                        {key}
                </button>
                {/each}
            </div>
        {/each}
        <div class="row">
            <button class="letter-button erase-button" onclick={removeLetter}>
                ← Σβήσιμο
            </button>
        </div>
    </div>
{/if}

<style>
    * {
        margin: 0;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }

    main {
        max-width: 600px;
        margin: auto;
    }

    .phrase-image{
        display: flex;
    }

    .phrase-image img{
        margin: auto;
        display: block;
        width: 100%;
        border-radius: 30px;
        border: 2px solid white;
        box-shadow: 0 0 15px white;
        transition: width 0.6s ease-out;
    }

    .phrase-image img[size="small"]{
        width: 25%;
    }

    .phrase-blank-squares {
        padding: 21px;
        text-align: center;
    }

    .phrase-blank-squares .phrase-word {
        display: inline-block;
        gap: 3px;
        margin-top: 21px;
        margin-right: 12px;
        background-color: transparent;
    }

    .phrase-blank-squares .phrase-word[all-correct="yes"] {
        background-color: green;
        border-radius: 6px;
    }

    .phrase-blank-squares .phrase-word .phrase-word-letter {
        border: 3px solid #ccc;
        box-shadow: 0 0 15px #ccc;
        border-radius: 6px;
        height: 42px;
        width: 24px;
        font-size: 21px;
        margin-right: 1px;
        display: inline-block;
        position: relative;
        background-color: white;

        transition: background-color 0.3s;
        transition: border 0.6s;
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

    .phrase-blank-squares .phrase-word .phrase-word-letter.cursor {
        border: 3px solid black;
    }

    .phrase-blank-squares .phrase-word .phrase-word-letter[status="CORRECT"] {
        background-color: green;
        animation: 1s letter-box-scale ease-in-out;
    }

    .phrase-blank-squares .phrase-word .phrase-word-letter[status="WRONG"] {
        background-color: rgb(159, 0, 0);
    }

    .phrase-blank-squares
        .phrase-word
        .phrase-word-letter[status="CORRECT"]
        .content,
    .phrase-blank-squares
        .phrase-word
        .phrase-word-letter[status="WRONG"]
        .content {
        color: white;
    }

    .phrase-blank-squares .phrase-word[all-correct="yes"] .phrase-word-letter {
        border: 3px solid transparent;
        box-shadow: 0 0 0;
    }

    #keyboard-button[visible="0"] {
        display: none;
    }

    #keyboard-button[visible="1"] {
        display: block;
        width: 100%;
        margin-top: 9px;
        font-size: 15px;
        background-color: darkgreen;
        color: white;
        height: 30px;
    }

    #keyboard {
        background-color: #eee;
        position: fixed;
        left: 0;
        width: 100%;
        padding-bottom: 15px;
        border-top: 6px solid white;
        box-shadow: 0 0 15px white;

        bottom: -100%;
        transition: bottom 0.5s ease-in-out;
    }

    #keyboard[visible="1"] {
        bottom: 0;
    }

    #keyboard .row {
        margin-top: 12px;
        display: flex;
        gap: 6px;
        justify-content: center;
    }

    #keyboard .row .letter-button {
        display: block;
        font-size: 15px;
        border-radius: 6px;
        font-size: 21px;
        border: 1px solid #999;
        padding: 9px;
        background-color: white;
        color: black;
        width: 36px;
    }

    #keyboard .row .erase-button{
        width: 150px;
    }

    section#hints {
        margin-top: 21px;
    }

    section#hints h2 {
        text-align: center;
    }

    section#hints button{
        margin-top: 15px;
        display: block;
        width: 100%;
        font-size: 18px;
        background-color: white;
        border: 1px solid #333;
        border-radius: 6px;
        padding: 6px;
        color: black;
        cursor: pointer;
    }

    section#hints button:hover {
        background-color: #ddd;
    }
    section#hints button[disabled] {
        opacity: 0.5;
    }

    section#description {
        padding: 30px;
        font-size: 21px;
        text-align: center;
        display: none;
    }

    section#description[show="1"] {
        display: block;
    }

    section#end-page h2 {
        text-align: center;
        padding: 15px;
    }

    section#end-page div.game-title {
        text-align: center;
        padding: 15px;
        font-size: 30px;
    }

    section#end-page button.share {
        display: block;
        padding: 15px;
        width: 100%;
        font-size: 21px;
        background-color: green;
        border: 0;
        border-radius: 15px;
        color: white;
        margin-top: 15px;
        cursor: pointer;
    }

    div#game-rules-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(9px);
    }

    div#game-rules-overlay div#game-rules {
        background-color: white;
        max-width: 420px;
        margin: 15px auto;
        border: 1px solid grey;
        padding: 30px;
        height: 85%;

        overflow-y: scroll;
        position: relative;
    }

    div#game-rules-overlay div#game-rules .close-button {
        background-color: red;
        border: 1px solid red;
        border-radius: 6px;
        color: white;
        position: absolute;
        top: 21px;
        right: 21px;
        font-size: 18px;
        cursor: pointer;
    }

    div#game-rules-overlay div#game-rules .content img {
        display: block;
        max-width: 100%;
        border: 1px solid #eee;
        border-radius: 15px;
    }

    #solve-cta{
        display: none;
    }

    #solve-cta[visible="1"]{
        display: flex;
        height: 90px;
    }

    #solve-cta button{
        display: block;
        margin: auto;
        background-color: green;
        color: white;
        width: 120px;
        height: 60px;
        border-radius: 15px;
        font-size: 15px;
        font-weight: bold;
    }

    div#game-rules-overlay div#game-rules .content p,
    div#game-rules-overlay div#game-rules .content hr,
    div#game-rules-overlay div#game-rules .content h2,
    div#game-rules-overlay div#game-rules .content img {
        margin-top: 21px;
    }

    @keyframes letter-box-scale {
        33% {
            transform: scale(1.3);
        }
        66% {
            transform: scale(1);
        }
    }
</style>
