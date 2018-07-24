//test mate, dont judge me
//let inputCalculateNow = prompt("masukkan");
//let calculateNow = eval(inputCalculateNow);
//alert(calculateNow);

//level 14
//ok.

//level 15
console.log("==============");
console.log("level 15");
console.log("");

function calculate() {
  let chooseOperation = prompt(
    "Choose an Operation (like + , or - , or /, or modulo)"
  );

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
    let operationResult = parseInt(firstnumber) + parseInt(secondnumber);
    document.getElementById("results").innerHTML =
      firstnumber + " + " + secondnumber + " = " + operationResult;
  }
  function substract() {
    let operationResult = parseInt(firstnumber) - parseInt(secondnumber);
    document.getElementById("results").innerHTML =
      firstnumber + " - " + secondnumber + " = " + operationResult;
  }
  function multiply() {
    let operationResult = parseInt(firstnumber) * parseInt(secondnumber);
    document.getElementById("results").innerHTML =
      firstnumber + " * " + secondnumber + " = " + operationResult;
  }
  function divide() {
    let operationResult = parseFloat(firstnumber) / parseFloat(secondnumber);
    document.getElementById("results").innerHTML =
      firstnumber + " / " + secondnumber + " = " + operationResult;
  }
  function modulo() {
    alert("modulo, is that food?");
    document.getElementById("results").innerHTML = "hmm";
  }
  function dumbOperation() {
    let operationResult =
      firstnumber + " + " + secondnumber + " = " + firstnumber + secondnumber;
    alert(operationResult);
    document.getElementById("results").innerHTML = operationResult;
  }
}

//calculateMate
function calculateMate() {
  let inputOperation = document.getElementById("theOperation").value;
  let calculatorProcess = eval(inputOperation);
  document.getElementById("results").innerHTML = calculatorProcess;
}
