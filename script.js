const button = document.querySelector('.button');

//Circles
const circOne = document.querySelector('.one');
const circTwo = document.querySelector('.two');
const circThree = document.querySelector('.three');
const circFour = document.querySelector('.four');
const circFive = document.querySelector('.five');

const circleList = [circOne, circTwo, circThree, circFour, circFive];

//random RGB selector
let randValue = () => {
    return Math.floor(Math.random() * 255);
}

let randColor = function() {
    return `RGB(${randValue()}, ${randValue()}, ${randValue()})`;
}

//color assignment
let colorChangeOne = function() {
    circOne.style.backgroundColor = randColor();
}
let colorChangeTwo = function() {
    circTwo.style.backgroundColor = randColor();
}
let colorChangeThree = function() {
    circThree.style.backgroundColor = randColor();
}
let colorChangeFour = function() {
    circFour.style.backgroundColor = randColor();
}
let colorChangeFive = function() {
    circFive.style.backgroundColor = randColor();
}

button.addEventListener('click', colorChangeOne);
button.addEventListener('click', colorChangeTwo);
button.addEventListener('click', colorChangeThree);
button.addEventListener('click', colorChangeFour);
button.addEventListener('click', colorChangeFive);

//individual assignment

