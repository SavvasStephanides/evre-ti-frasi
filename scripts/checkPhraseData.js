import fs from "fs"

let phrases = JSON.parse(fs.readFileSync("./src/lib/phrases.json", "utf-8"))
let phraseImageFiles = fs.readdirSync("./src/lib/phrase-images")

let invalidFileNames = phrases.filter((phrase) => !phraseImageFiles.includes(phrase.file))
let phrasesWithoutHints = phrases.filter((phrase) => phrase.hint === undefined)

console.log(invalidFileNames.length === 0 ? "✅ No invalid file names" : `❌ ${invalidFileNames.length} invalid file names`)
console.log(phrasesWithoutHints.length === 0 ? "✅ No phrases without hints" : `❌ ${phrasesWithoutHints.length} phrases without hints`)
