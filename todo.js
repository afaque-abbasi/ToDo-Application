/*
Name: Afaque Ahmed Abbasi
Roll No: PIAIC227902
City: Karachi
Batch: 51
*/
import inquirer from "inquirer";
let todoString = [];
let loop = true;
while (loop) {
    const todoInput = await inquirer.prompt([
        {
            type: "input",
            name: "todoItem",
            message: "Enter Item Name which you want to add in yout To-Do list",
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more item in your To-Do list?",
            default: false
        }
    ]);
    const todoItem = todoInput.todoItem;
    const addMore = todoInput.addMore;
    if (todoItem) {
        todoString.push(todoItem);
    }
    loop = addMore;
}
;
if (todoString.length > 0) {
    console.log(`Here is your To Do list: `);
    for (let i = 0; i < todoString.length; i++) {
        console.log(`${i + 1}, ${todoString[i]}`);
    }
}
else {
    console.log(`Your to do list is empty!`);
}
