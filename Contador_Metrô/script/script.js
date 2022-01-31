/* EXERCÍCIO VARIÁVEIS NO JS
let myAge = 35;
let humanDogRatio = 7;
let myDogAge = myAge * humanDogRatio;

console.log(myDogAge); */

/* EXERCÍCIO BÁSICO DE OPERAÇÕES NO JS
let bonusPoint = 50;

bonusPoint = bonusPoint + 50;
console.log(bonusPoint);

bonusPoint = bonusPoint - 75;
console.log(bonusPoint);

bonusPoint = bonusPoint + 45;
console.log(bonusPoint); */

/* EXERCÍCIO DE FUNCTION
function totalTime() {
    let lap1 = 34;
    let lap2 = 33;
    let lap3 = 36;

    console.log(lap1+lap2+lap3);
}

totalTime()

function tTime(lap1,lap2,lap3) {
    console.log(lap1+lap2+lap3);
}

tTime(34,33,36) */

/* EXERCÍCIO DE INCREMENTO EM JS
let lapsCompleted = 0

function plusLaps() {
    lapsCompleted = lapsCompleted + 1;
}

plusLaps();
plusLaps();
plusLaps();

console.log(lapsCompleted) */

let incrementBtn = document.getElementById('increment-btn'); //incrementar HTML => JS.
let decrementBtn = document.getElementById('decrement-btn'); //decrementar HTML => JS.
let saveBtn = document.getElementById('save-btn'); //salvar HTML => JS.
let countEl = document.getElementById('count-el'); //contador HTML => JS.
let pEntries = document.getElementById('p-entries');
let count = 0; //let fora da função, pois se deixar dentro, toda vez que clicar irá zerar e aumentar 1 a cda clique. Ou seja, jamais sairá de 1.


//Função para incrementar.
incrementBtn.addEventListener('click', function() {
    count += 1;
    countEl.innerHTML = count;
    if(count > 0) {
        countEl.style.color='darkgreen';
    } else if(count == 0) {
        countEl.style.color='black';
    }
});

//Função para salvar.
saveBtn.addEventListener('click', function() {
    let countStr = count + ' - ';
    pEntries.innerHTML += countStr;
    countEl.innerHTML = 0;
    countEl.style.color='black';
    count = 0;

})