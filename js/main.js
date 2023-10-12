console.log('linked');

//global variables
const result = document.querySelector('#result');
const addbtn = document.querySelector('#add');
const minusbtn = document.querySelector('#minus');
const incrementor = document.querySelector('#incrementor');

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
    result.textContent = sum
    // console.log('clicked')
}

function subtraction() {
    let sum = Number(result.textContent) - Number(incrementor.value);
    result.textContent = sum
}