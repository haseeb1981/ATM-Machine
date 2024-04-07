#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAnswer = await inquirer.prompt([
        { name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        // = += -=
        myBalance -= amountAnswer.amount;
        console.log("Your remaining balance is" + myBalance);
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(`Your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
