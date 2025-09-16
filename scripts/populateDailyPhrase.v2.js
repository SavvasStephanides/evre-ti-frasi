import fs from "fs"

let dailyPhrases = []

let phrases = JSON.parse(fs.readFileSync("./src/lib/phrases.json", "utf-8"))
let phraseDate = new Date()
let id = 89

for(let i = 0 ; i < 5 ; i++){
    phrases.sort(() => Math.random() - 0.5)
    
    phrases.forEach((phrase) => {
        const year = phraseDate.getFullYear()
        const month = String(phraseDate.getMonth() + 1).padStart(2, '0')
        const day = String(phraseDate.getDate()).padStart(2, '0')
        const formattedDate = `${year}-${month}-${day}`

        let dailyPhrase = {
            id: ++id,
            date: formattedDate,
            phrase
        }

        dailyPhrases.push(dailyPhrase)
        console.log(`Added phrase for ${formattedDate}.`);
        

        phraseDate.setDate(phraseDate.getDate() + 1)
        phraseDate = new Date(phraseDate)
    })    
}

fs.writeFileSync("/evre-ti-frasi/src/lib/daily-phrase.json", JSON.stringify(dailyPhrases))

