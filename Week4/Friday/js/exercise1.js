let buttons = document.querySelectorAll('.button');

// Add click events
for (let button of buttons) {
    button.addEventListener('click', handleClick);
}

function handleClick(){
    console.log('I got clicked!');
}