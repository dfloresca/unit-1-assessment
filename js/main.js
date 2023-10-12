console.log('linked');

//global variables
const result = document.querySelector('#result');
const addbtn = document.querySelector('#add');
const minusbtn = document.querySelector('#minus');
const incrementor = document.querySelector('#incrementor');
// const AZresult = document.querySelector('#AZresult')
// const alphaAdd = document.querySelector('#alphaadd');
// const alphaIncrementor = document.querySelector('alphaincrementor')
// const alphaMinus = document.querySelector('#alphaminus')
// const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'Q', 'X', 'Y',' Z']
//event listeners
document.addEventListener('DOMContentLoaded', function () {
    incrementor.value = 1;
    result.textContent = 0;
})

//function for adding 
addbtn.addEventListener('click', addition);
//function for subtraction
minusbtn.addEventListener('click', subtraction);


//functions
function addition() {
    let sum = Number(result.textContent) + Number(incrementor.value);
    result.textContent = sum;
    updateColor();
    // console.log('clicked')
}

function subtraction() {
    let sum = Number(result.textContent) - Number(incrementor.value);
    result.textContent = sum;
    updateColor();
}


function updateColor() {
    if(Number(result.textContent) < 0) { 
        result.style.color = 'red'
    } else {
        result.style.color = 'blue'
    }
}