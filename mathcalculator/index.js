//level 14
//ok.

//level 15
console.log("==============");
console.log("level 15");
console.log("");

function calculate () {
let chooseOperation = prompt("Choose an Operation (like + , or - , or /, or modulo)");

let firstnumber = prompt("insert first number");
let secondnumber = prompt("insert second number");

switch (chooseOperation) {
  case "+":
    add();
    break;
  case "-":
    substract();
    break;
  case "*":
    multiply();
    break;
  case "/":
    divide();
    break;
  case "modulo":
    modulo();
    break;
  default:
    dumbOperation();
    break;
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
function modulo() {
  alert("man, i dont have any clue about modulo.");
}
function dumbOperation() {
  operationResult = alert(
    firstnumber + " + " + secondnumber + " = " + firstnumber + secondnumber
  );
  alert("nice dude.");
}
}