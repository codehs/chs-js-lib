const startButton = document.createElement('button');
startButton.innerHTML = 'Click to run the program!';
document.body.appendChild(startButton);
startButton.addEventListener('click', () => {
    alert(readBoolean('Enter yes/no or true/false'));
});
