//level 14
//ok.

//level 15
console.log("==============");
console.log("level 15");
console.log("");

function calculate () {
let chooseOperation = prompt("Choose an Operation (like + , or - , or /)");

let firstnumber = prompt("insert first number");
let secondnumber = prompt("insert second number");

switch (chooseOperation) {
  case "+":
    add();
  case "-":
    substract();
  case "*":
    multiply();
  case "/":
    divide();
}



function add() {
  operationResult = alert(parseInt(firstnumber) + parseInt(secondnumber));
}
function substract() {
  operationResult = alert(parseInt(firstnumber) - parseInt(secondnumber));
}
function multiply() {
  operationResult = alert(parseInt(firstnumber) * parseInt(secondnumber));
}
function divide() {
  operationResult = alert(parseFloat(firstnumber) / parseFloat(secondnumber));
}
function dumbOperation() {
  operationResult = alert(
    firstnumber + " + " + secondnumber + " = " + firstnumber + secondnumber
  );
}
}