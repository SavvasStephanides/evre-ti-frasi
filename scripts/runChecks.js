import fs from "fs"

let phrases = JSON.parse(fs.readFileSync("./src/lib/phrases.json", "utf-8"))
let phraseImageFiles = fs.readdirSync("/tmp/assets/src/phrase-images")

// Test: Invalid file names:
let invalidFileNames = phrases.filter((phrase) => !phraseImageFiles.includes(phrase.file))
if(invalidFileNames.length > 0){
    console.log()
    console.log("Phrases with invalid files:")

    invalidFileNames.forEach((phrase) => {
        console.log(`- ${phrase.title}`)
        console.log(`  Filename: ${phrase.file}`)
    })

    throw `❌ ${invalidFileNames.length} invalid file names`
}
else{
    console.log("👍 No invalid file names")
}

// Test: Phrases without hints
let phrasesWithoutHints = phrases.filter((phrase) => phrase.hint === undefined)
if(phrasesWithoutHints.length > 0){
    console.log()
    console.log("Phrases without hints:")
    
    phrasesWithoutHints.forEach((phrase) => {
        console.log(`- ${phrase.title}`)
    })

    throw `❌ ${phrasesWithoutHints.length} phrases without hints`
}
else{
    console.log("👍 No phrases without hints")
}

//Test: Phrases in all caps
const phraseTitles = phrases.map((phrase) => phrase.title)
const phrasesNotInAllCaps = phraseTitles.filter((title) => title !== title.toUpperCase())

if(phrasesNotInAllCaps.length > 0){
    throw `❌ ${phrasesNotInAllCaps.length} phrases not in all caps`
}
else{
    console.log("👍 All phrases are in all caps")
}


