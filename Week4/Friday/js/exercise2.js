let buttons = document.querySelectorAll('.button');
let guesses = 0;
let correct = "red";

// Add click events
for (let button of buttons) {
    button.addEventListener('click', handleClick);
}

function handleClick(e){
    guesses++;
    if(e.target.id === "red"){
        
        console.log(`Correct! You have made a total of ${guesses} guesses!`);
    } else {
        console.log('Wrong, please try again.');
    }
}