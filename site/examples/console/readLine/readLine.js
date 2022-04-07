const startButton = document.createElement('button');
startButton.innerHTML = 'Click to run the program!';
document.body.appendChild(startButton);
startButton.addEventListener('click', () => {
    let input = readLine('Give me a line!');
    alert(input.toUpperCase());
});
