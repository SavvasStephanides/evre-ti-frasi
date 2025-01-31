import fs from "fs"
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (query) => {
    return new Promise((resolve) => {
        rl.question(query, resolve)
    });
};

async function main(){
    const file = await askQuestion("File name: ")
    const title = await askQuestion("Title: ")
    const hint = await askQuestion("Hint: ")
    rl.close()

    let phraseData = JSON.parse(fs.readFileSync("/evre-ti-frasi/src/lib/phrases.json", "utf-8"))
    

    phraseData.push({file, title, hint})
    
    fs.writeFileSync("/evre-ti-frasi/src/lib/phrases.json", JSON.stringify(phraseData))
    console.log("Done")
}

main()



