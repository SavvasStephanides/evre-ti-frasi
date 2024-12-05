<script>
    import phraseImage from '$lib/phrase-images/ad4e49ee-98e7-44e5-bf60-2797b92e78f6.png';

    let phrase = "ΑΓΓΟΥΡΙ ΤΟΥ ΠΙΓΚΟΥ"
    let phraseWords = phrase.split(" ")
    let phraseLetters = phraseWords.map((word) => word.split(""))    
    
</script>
<main>
    <section class="phrase-image">
        <img src={phraseImage} alt="Image" id="phrase-image"/>
    </section>

    <section class="phrase-blank-squares">
        {#each phraseWords as word}
            <div class="phrase-square-line">
                {#each word as letter}
                    <div class="blank-square"></div>
                {/each}
            </div>
        {/each}
    </section>

</main>

<style>
    * {
        margin: 0;
    }

    main{
        max-width: 600px;
        margin: auto;
    }

    #phrase-image {
        display: block;
        width: 100%;
        border-radius: 30px;
    }

    .phrase-blank-squares{
        
    }

    .phrase-blank-squares .phrase-square-line{
        display: flex;
        gap: 3px;
        margin-top: 6px;
        justify-content: center;
    }

    .phrase-blank-squares .blank-square{
        border: 1px solid #333;
        height: 33px;
        width: 24px;
        font-size: 21px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
</style>