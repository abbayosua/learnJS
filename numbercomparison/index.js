//alert ("LearnJS - Number Comparison");

//Level 8
console.log("========");
console.log("Level 8");
const number = 1;

if (number >= 20) {
    console.log("So, this is more than 10");
} else {
    console.log("Yep, this is less than 10.");
}

console.log("");

//level 9
console.log("========");
console.log("Level 9");
const money = 1000;
if (money >= 1000) {
    console.log("your money is $1000 or more");
} else if (money >= 800) {
    console.log("Your money is less than/much as $800");
} else if (money >= 500) {
    console.log("Your money is less than/much as $500");
} else {
    console.log("i think your money amount is between $1 to $490");
}
console.log("");

//level 10
console.log("========");
console.log("Level 10");
const price = 100;

function pay(price) {
    return (price ? "Thank you for ordering :)" : "Your amount for transaction is not enough.");
}

console.log("If user have enough money, the output is:");
console.log(pay(true));
console.log("");
console.log("If user didn't have enough money, the output is:");
console.log(pay(false));

//level 11
console.log("========");
console.log("Level 11");
const moneyAmount = 90;
if ((moneyAmount >= 0) && (moneyAmount <= 100)) {
    console.log(moneyAmount + " is between 0 and 100");
}

//level 12
console.log("========");
console.log("Level 12");
function fruitAmount(enough, less) {
    
}

//level 13
console.log("========");
console.log("Level 13");
console.log(Math.floor((Math.random() * 100) + 1));


