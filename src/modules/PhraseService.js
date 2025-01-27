import dailyPhrases from '../lib/daily-phrase.json'
import phrases from '../lib/phrases.json'

export default class PhraseService {
    getDailyPhrase(){
        const today = new Date()
        const year = today.getFullYear()
        const month = String(today.getMonth() + 1).padStart(2, '0')
        const day = String(today.getDate()).padStart(2, '0')
        const formattedDate = `${year}-${month}-${day}`

        let dailyPhrase = dailyPhrases.find(phrase => phrase.date === formattedDate)
        
        let phrase = phrases[dailyPhrase.phraseId]
        return {gameId: dailyPhrase.id, phrase}
    }
}