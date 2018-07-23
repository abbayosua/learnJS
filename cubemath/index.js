alert("lets calculate cube volume!");

let firstside = prompt("Input first side length (in cm)");
let secondside = prompt("Input second side length (in cm)");
let thirdside = prompt("Input third side length (in cm)");

let result = Number(firstside) * Number(secondside) * Number(thirdside);
let presentResults = alert("The results is = " + result + "cm3")

function circumference() {
    justCalculate = prompt("insert the jari jari");
    alert("The result is = " + 2 * Math.PI * Number(justCalculate));
}