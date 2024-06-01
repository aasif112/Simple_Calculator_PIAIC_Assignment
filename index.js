#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", name: "firstNumber", type: "number" },
    { message: "Select opertaion:", name: "operator", type: "list",
        choices: ["Add", "Subtract", "Multiply", "Devid", "Power"] },
    { message: "Enter second number", name: "secondNumber", type: "number" },
]);
if (answer.operator === "Add") {
    console.log(`${answer.firstNumber} + ${answer.secondNumber} = ${answer.firstNumber + answer.secondNumber}`);
}
else if (answer.operator === "Subtract") {
    console.log(`${answer.firstNumber} - ${answer.secondNumber} = ${answer.firstNumber - answer.secondNumber}`);
}
else if (answer.operator === "Multiply") {
    console.log(`${answer.firstNumber} x ${answer.secondNumber} = ${answer.firstNumber * answer.secondNumber}`);
}
else if (answer.operator === "Devid") {
    console.log(`${answer.firstNumber} / ${answer.secondNumber} = ${answer.firstNumber / answer.secondNumber}`);
}
else if (answer.operator === "Power") {
    console.log(`${answer.firstNumber} power ${answer.secondNumber} = ${answer.firstNumber ** answer.secondNumber}`);
}
