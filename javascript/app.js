// VARIABLES
let qwerty = document.querySelector('#qwerty');
let phrases = document.querySelector('#phrase');
let btn_reset = document.querySelector('.btn__reset');
let missed = 0; //variable keeps track of number of guesses
let ul = document.querySelector('#phrase ul');
// Create an array with at least 5 phrases
phrases = [
    'Part of the Journey is the end',
    'The hardest choices require the strongest wills',
    'No man can win every battle but no man sjould fall without a struggle',
    'It is not who I am underneath but what I do that defines me',
    'Why do we fall so we can learn to pick ourselves back up',
    'When you decide not to be afraid you can find friends in super unexpected places',
    'I believe there is a hero in all of us that keeps us honest gives us strengh and makes us noble',
    'Life does not give us purpose but we give life purpose',
    'In a world of orfinary mortales You are a wonder woman',
    'With great power comes great responsability'
];

//Attach an event listener to the START GAME button 
btn_reset.addEventListener('click', event => {
    document.querySelector('#overlay').style.display = 'none'; 
});

//Create a getRandomPhraseAsArray function
function getRandomPhrase() {
    let randomNumber = Math.floor(Math.random() * phrases.length);
    return phrases[randomNumber];
    
} 
let phrase = getRandomPhrase(); //holds the random phrase


//Add letters of a string to the display
const addPhraseToDisplay = arr => {
    
    for (let i = 0; i < phrase.length; i++) {
        
        let li = document.createElement('li');
        li.textContent = phrase[i];
        ul.appendChild(li);
        
        if (phrase[i] != ' ') {
            li.className = 'letter';

        } else {
            li.className = 'space';
        }
    } 

}


//Create a checkLetter function
// function checkLetter () {

// }
