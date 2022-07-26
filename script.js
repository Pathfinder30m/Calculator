const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
const division = document.getElementById("division");
const increase = document.getElementById("increase");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const decimal = document.getElementById("decim");
const equal = document.getElementById("equal");
const allClear = document.getElementById("allclear");
const input = document.getElementById("numb");
const action = document.getElementsByClassName("action");
const digits = document.getElementById("digits");
console.log(action)

function inputOne() {
    input.insertAdjacentText('beforeend', 1);
};
function inputTwo() {
    input.insertAdjacentText('beforeend', 2);
};
function inputThree() {
    input.insertAdjacentText('beforeend', 3);
};
function inputFour() {
    input.insertAdjacentText('beforeend', 4);
};
function inputFive() {
    input.insertAdjacentText('beforeend', 5);
};
function inputSix() {
    input.insertAdjacentText('beforeend', 6);
};
function inputSeven() {
    input.insertAdjacentText('beforeend', 7);
};
function inputEight() {
    input.insertAdjacentText('beforeend', 8);
};
function inputNine() {
    input.insertAdjacentText('beforeend', 9);
};
function inputZero() {
    input.insertAdjacentText('beforeend', 0);
};
function inputDecimal() {
    input.insertAdjacentText('beforeend', '.' );
};
function inputClear() {
    input.innerText= " ";
};
function inputResult() {
    input.innerText= result;
}
var value1;
var value2;
var valueAction;
var result;
var actionPlus = "plus";
var actionMinus = "plus";
var actionIncrease = "increase";
var actionDivision = "division";
minus.addEventListener('click', function handleChange(){
    value1 = input.innerHTML;
    valueAction = "minus";
    console.log(value1);
    console.log(valueAction);
    inputClear();
});
plus.addEventListener('click', function handleChange(){
    value1 = input.innerHTML;
    valueAction = "plus";
    console.log(value1);
    console.log(valueAction);
    inputClear();
});
increase.addEventListener('click', function handleChange(){
    value1 = input.innerHTML;
    valueAction = "increase";
    console.log(value1);
    console.log(valueAction);
    inputClear();
});
division.addEventListener('click', function handleChange(){
    value1 = input.innerHTML;
    valueAction = "division";
    console.log(value1);
    console.log(valueAction);
    inputClear();
});
equal.addEventListener('click', function handleChange(){
    value2 = input.innerHTML;
    console.log(value2);
    inputClear();
    if (valueAction === actionPlus){
        result = parseFloat(value1) + parseFloat(value2);
        inputResult();
    }
    else if(valueAction === actionMinus){
        result = parseFloat(value1) - parseFloat(value2);
        inputResult();
    }
    else if(valueAction === actionIncrease){
        result = parseFloat(value1) * parseFloat(value2);
        inputResult();
    }
    else {
        result = parseFloat(value1) / parseFloat(value2);
        inputResult();
    };
  
    console.log(result);
    inputResult();

});


