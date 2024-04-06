#! /usr/bin/env node
import inquirer from  "inquirer";

let myBalance =20000 ; //Dollar
let myPin = 1512;
 let pinAnswer = await inquirer.prompt({
    name:"pin",
    message:"enter your pin",
    type :"number",
})
if(pinAnswer.pin === 1512){console.log("correct pin");
let operationAns= await inquirer.prompt([{
name:"operation",
message:"please select option",
type:"list",
choices:["withdraw","check balance"]
}]);
console.log(operationAns);

if (operationAns.operation ==="withdraw")
{
    let amountAns = await inquirer.prompt([{

name:"amount",
message:"enter your amount",
type:"number",
    }
]
  )

 
myBalance -= amountAns.amount;
console.log("your remaining balance is : "+ myBalance)

}
else if (operationAns.operation==="check balance"){console.log("your balance :" + myBalance )}

}
else(console.log("incorrect pin"));
