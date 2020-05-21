/* Il Software riceve in input un lungo testo e una serie di parole da censurare.
Restituice il testo con xx al posto delle parole censurate.
Stampa un "badword index" calcolato come il numero di parole censurate su il 
numero di parole totali */

/* variables */
let text = prompt('inserisci una frase lorem ipsum');
let newBadWord = prompt('Inserisci una Bad Word');
let badWord = ['stupido', 'deficente', 'tonto', 'cretino'];
badWord.push(newBadWord);
let IndexBadWord = {
    'totalWord': 0,
    'totalBadWordCheck': 0
};

console.log(text);
console.log(badWord);


function censureText(text, badWord) {

    /* split text in array sigle word  */
    let wordWords = text.split(' ');
    console.log(wordWords);

    for (let a = 0; a < wordWords.length; a++) {

        console.log(wordWords[a]);
    
        /* check a badWord in text split array */
        if (badWord.includes(wordWords[a])) {

            console.log('trovata');
            
            /* replace badWord to censure */
            wordWords[a] = 'xxxxx';

            /* count badWord in text */
            IndexBadWord.totalBadWordCheck++;
        
        } else {

            console.log('non trovata');
        }
    
    }

    /* count total word text */
    IndexBadWord.totalWord = wordWords.length;

    console.log(wordWords.length);
    console.log(IndexBadWord.totalBadWordCheck);
    
    

    text = wordWords.join(' ');
    return text;
}

/* print the result */
document.writeln(censureText(text, badWord) + '<br>');
document.write('Sono state trovate ' + IndexBadWord.totalBadWordCheck + ' Bad Word ' + ' su un totale di ' + IndexBadWord.totalWord + ' parole');