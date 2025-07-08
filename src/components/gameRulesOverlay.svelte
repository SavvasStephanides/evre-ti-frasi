<script>
    let showGameRules = $state(true);
    import { onMount } from "svelte";
    import EnvironmentVariableConfig from "../modules/Config";

    const environmentVariables = new EnvironmentVariableConfig()

    onMount(() => {
        let showRulesFlagFromLocalStorage = localStorage.getItem(
            "evretifrasi-showRules",
        );

        if (showRulesFlagFromLocalStorage) {
            showGameRules = showRulesFlagFromLocalStorage === "true"
        } else {
            showGameRules = true
        }

    })

    $effect(() => {
        localStorage.setItem("evretifrasi-showRules", showGameRules)
    })
</script>
<div
        id="game-rules-overlay"
        style={showGameRules ? "display: block" : "display: none"}
    >
        <div id="game-rules">
            <button onclick={() => (showGameRules = false)} class="close-button"
                >&times;</button
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

                <img src={`${environmentVariables.assetsBaseUrl}/phrase-images/cea69d11-6c76-4a2e-94a9-dc10f9214830.png`} alt="" style="width: 100%" />

                <p>Πράσινο κουτούι σημαίνει ότι το γράμμα εν σωστό</p>
                <img src={`${environmentVariables.assetsBaseUrl}/rules-assets/green-square.png`} alt="" />

                <p>Κόκκινο κουτούι σημαίνει ότι το γράμμα εν λάθος</p>
                <img src={`${environmentVariables.assetsBaseUrl}/rules-assets/red-square.png`} alt="" />

                <p>
                    Πράσινο κουτούι γυρώ που την λέξη σημαίνει ότι ολόκληρη η
                    λέξη εν σωστή
                </p>
                <img src={`${environmentVariables.assetsBaseUrl}/rules-assets/green-word.png`} alt="" />

                <p>Μόλις έβρεις ολόκληρη την φράση, δείχνει σου το τούτο:</p>
                <img src={`${environmentVariables.assetsBaseUrl}/rules-assets/solved.png`} alt="" />

                <hr />

                <p style="font-weight: bold">Τζαινούρκα φράση κάθε μέρα!</p>
            </div>
        </div>
    </div>

<style>
    * {
        margin: 0;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
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
        padding: 15px;
        height: 85%;

        overflow-y: scroll;
        position: relative;
    }

    div#game-rules-overlay div#game-rules .close-button {
        background-color: red;
        border: 1px solid red;
        border-radius: 6px;
        color: white;
        position: sticky;
        top: 3px;
        left: 0;
        font-size: 18px;
        cursor: pointer;
        font-size: 30px;
    }

    div#game-rules-overlay div#game-rules .content{
        margin-top: 30px;
    }

    div#game-rules-overlay div#game-rules .content img {
        display: block;
        max-width: 100%;
        border: 1px solid #eee;
        border-radius: 15px;
    }

    #overlay{
        background-color: transparent; 
        position: absolute; 
        width: 100%; 
        height: 100%; 
        top: 0; 
        left: 0;
        display: none;
    }

    @media (pointer: coarse) {
        #overlay {
            display: block;
        }
    }

    #overlay[hidden="1"] {
        display: none;
    }

    div#game-rules-overlay div#game-rules .content p,
    div#game-rules-overlay div#game-rules .content hr,
    div#game-rules-overlay div#game-rules .content h2,
    div#game-rules-overlay div#game-rules .content img {
        margin-top: 21px;
    }
</style>