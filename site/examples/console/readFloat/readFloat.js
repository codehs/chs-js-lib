const startButton = document.createElement('button');
startButton.innerHTML = 'Click to run the program!';
document.body.appendChild(startButton);
startButton.addEventListener('click', () => {
    let piGuess = readFloat('Enter as much of pi as you know! ');
    let difference = Math.abs(Math.PI - piGuess);
    alert(`You were off by ${difference}`);
});
