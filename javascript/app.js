// VARIABLES
let qwerty = document.querySelector('#qwerty');
let phrases = document.querySelector('#phrase');
let btn_reset = document.querySelector('.btn__reset');
let ul = document.querySelector('#phrase ul');
let key = document.querySelectorAll('.keyrow button');
let h2 = document.querySelector('h2');
let heartImage = document.querySelectorAll('.tries img');
let hearts = document.querySelectorAll('#scoreboard ol li');


let missed = 0; //variable keeps track of number of guesses

// Create an array with at least 5 phrases
phrases = [
    'Part of the Journey is the end',
    'The hardest choices require the strongest wills',
    'No man can win every battle but no man should fall without a struggle',
    'It is not who I am underneath but what I do that defines me',
    'Why do we fall so we can learn to pick ourselves back up',
     'You are much stronger than you think you are',
    'Heroes are made by the path they choose',
    'Life does not give us purpose but we give life purpose',
    'In a world of orfinary mortales You are a wonder woman',
    'With great power comes great responsability'
];
// phrases = ['Z X C']
//Attach an event listener to the START GAME button 
btn_reset.addEventListener('click', event => {
    document.querySelector('#overlay').style.visibility = 'hidden'; 
});

//Create a getRandomPhraseAsArray function
function getRandomPhrase() {
    let randomNumber = Math.floor(Math.random() * phrases.length);
    return phrases[randomNumber];
    
} 
let phrase = getRandomPhrase(phrases); //holds the random phrase




//Add letters of a string to the display

function addPhraseToDisplay(phrase) {
    
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
 addPhraseToDisplay(phrase);



//Create a checkLetter function
function checkLetter(clickLetter) {
    const letters = document.querySelectorAll('.letter');
    let match = null;
    for (let i = 0; i < letters.length; i++){
        if (clickLetter === letters[i].textContent.toLowerCase()) {
           letters[i].className = ' letter show';
            match = letters[i].textContent;
        }
    }
    return match
}

checkLetter();


// ADD AN EVENT LISTENER TO THE KEYBOARD
qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const clickedButton = e.target;
        clickedButton.className = 'chosen';
        clickedButton.disabled = 'true';

        let letterFound = checkLetter(clickedButton.textContent);
        if (letterFound === null) {
            const listHearts = document.querySelectorAll('.tries');
            const lostHeart = document.querySelectorAll('.tries img');
            missed++;
            lostHeart[0].src = "images/lostHeart.png";
            listHearts[0].className = ' ';
        }
        checkWin();
        
    }
});

//Create a checkWin Function
function checkWin () {
    const liLetter = document.querySelectorAll('.letter');
    const liShow = document.querySelectorAll('.show');
    if (liLetter.length === liShow.length) {
        overlay.className = 'win';
        h2.textContent = `You Won!`;
        const p = document.createElement('P');
        p.textContent = `<< ${phrase} >>`;
        h2.appendChild(p);
        function winner() {
            overlay.style.visibility = 'visible';
            btn_reset.textContent = 'Play again';
        }
        setTimeout(winner, 1500);
        
    } else if (missed > 4) {
        overlay.className = 'lose';
        h2.textContent = "Game Over";
        const p = document.createElement('P');
        p.textContent = `Better luck next time!`;
        h2.appendChild(p);
        function looser() {
            overlay.style.visibility = 'visible';
            btn_reset.textContent = 'Try again';
        }
        setTimeout(looser, 1000);
    }
   
    
}

// RESET GAME 

function resetGame () {
   
    missed = 0;
    ul.innerHTML = ' ';
    let keyboard = document.querySelectorAll('.keyrow button');
    for (let i = 0; i < keyboard.length; i++) {
        keyboard[i].className = ' ';
        keyboard[i].disabled = false;
    }
    
    for (let j = 0; j < hearts.length; j++) {
    hearts[j].className = 'tries';
    heartImage[j].src = "images/heart.png";
    }
    
}

// START GAME
btn_reset.addEventListener('click', event => {
    overlay.style.visibility = 'hidden';
    resetGame();
    let newPhrase = getRandomPhrase(phrases);
    addPhraseToDisplay(newPhrase);
});
