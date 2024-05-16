#! /usr/bin/env node

import inquirer from "inquirer";

//Define the list of currencies and their exchange rate

let exchange_rate: any ={
    "USD": 1,    //Base currency
    "EUR": 0.9,  //European Currency
    "JYP": 113,  // Japenese Currency
    "CAD":1.3,   // Candian Dollar
    "AUD":1.65,  //Australian  Dollar
    "PKR":280,   // pakistani Rupee
}

let user_answr = await inquirer.prompt([
    {
        name: "from_currency",
        type:"list",
        message:"Select the currency to convert from;",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
       },
       {
        name:"to_currency",
        type:"list",
        message:"Select the currency to convert into:",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
       },
       {
        name:"amount",
        type:"input",
        message:"Enter the amount to convert:"
       }
]);
let from_amount = exchange_rate[user_answr.from_currency]
let to_amount = exchange_rate[user_answr.to_currency];
let amount = user_answr.amount

let base_amount = amount/from_amount
let converted_amount =base_amount*to_amount

console.log(`converted_amount = ${converted_amount}`);




