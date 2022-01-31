// 1)
let firstName = 'Marcelo';
let lastName = ' Dieguez';
let fullName = `${firstName} ${lastName}.`
console.log(fullName)

// 2)
let myName = 'Marcelo.';
let greeting = 'Hi there, ';

function myGreeting() {
    console.log(`${greeting}  ${myName}`);
}

myGreeting()

// 3)
let myPoints = 3

function add3Points() { 
    myPoints += 3;
}

function remove1Point() {
    myPoints -= 1;
}

add3Points();
add3Points();
add3Points();

remove1Point();
remove1Point();

console.log(myPoints);

// 4)
/*let purchaseBtn = document.getElementById('purchase-btn');
let error = document.getElementById('error');

purchaseBtn.addEventListener('click', function() {
    error.innerHTML = 'Something went wrong. Please, try again later.';
    error.style.color='red';
    console.log('Something went wrong. Please, try again later.');
})*/

// 5)
let num1 = 8;
let num2 = 2;
document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;

let sumEl = document.getElementById('sum-el');

let sumBtn = document.getElementById('sum-btn');
let subtractBtn = document.getElementById('subtract-btn');
let divideBtn = document.getElementById('divide-btn');
let multiplyBtn = document.getElementById('multiply-btn');

sumBtn.addEventListener('click', function() {
    let result = num1 + num2;
    sumEl.innerHTML = `The result of this sum is: ${result}.`;
})

subtractBtn.addEventListener('click', function() {
    let result = num1 - num2;
    sumEl.innerHTML = `The result of this subtraction is: ${result}.`;
})

divideBtn.addEventListener('click', function() {
    let result = num1 / num2;
    sumEl.innerHTML = `The result of this division is: ${result}.`;
})

multiplyBtn.addEventListener('click', function() {
    let result= num1 * num2;
    sumEl.innerHTML = `The result of this multiplication is: ${result}.`
})