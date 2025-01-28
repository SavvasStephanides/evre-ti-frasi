import fs from "fs"

let date = new Date()
let phrases = JSON.parse(fs.readFileSync("../src/lib/phrases.json", "utf-8"))

let dailyPhrases = []
for(let i = 0 ; i < 600 ; i++){
    let phraseDate = new Date()
    phraseDate.setDate(phraseDate.getDate() + i)
    phraseDate = new Date(phraseDate)

    const year = phraseDate.getFullYear()
    const month = String(phraseDate.getMonth() + 1).padStart(2, '0')
    const day = String(phraseDate.getDate()).padStart(2, '0')
    const formattedDate = `${year}-${month}-${day}`

    let phrase = {
        id: (i+1),
        date: formattedDate,
        phraseId: Math.floor(Math.random() * phrases.length)
    }

    dailyPhrases.push(phrase)

}

fs.writeFileSync("daily-phrase.json", JSON.stringify(dailyPhrases))

