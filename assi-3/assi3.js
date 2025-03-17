// Even or Odd Checker
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        alert(`${num} is an even number.`);
    } else {
        alert(`${num} is an odd number.`);
    }
}

function runEvenOdd() {
    let number = prompt("Enter a number:");
    checkEvenOdd(parseInt(number));
}

// Multiplication Table Generator
function multiplicationTable(num) {
    let output = "";
    for (let i = 1; i <= 10; i++) {
        output += `${num} x ${i} = ${num * i}\n`;
    }
    alert(output);
}

function runMultiplicationTable() {
    let num = prompt("Enter a number for the multiplication table:");
    multiplicationTable(parseInt(num));
}

// FizzBuzz Challenge
function fizzBuzz() {
    let output = "";
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += "FizzBuzz\n";
        } else if (i % 3 === 0) {
            output += "Fizz\n";
        } else if (i % 5 === 0) {
            output += "Buzz\n";
        } else {
            output += `${i}\n`;
        }
    }
    alert(output);
}

function runFizzBuzz() {
    fizzBuzz();
}

// Right-Angled Triangle Pattern
function printTriangle(n) {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        pattern += "*".repeat(i) + "\n";
    }
    alert(pattern);
}

function runTriangle() {
    let rows = prompt("Enter the number of rows for the triangle:");
    printTriangle(parseInt(rows));
}
