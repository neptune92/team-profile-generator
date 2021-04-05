const inquirer = require("inquirer");
const fs = require("fs");

const engineer = require("./lib/engineer");
const manager = require("./lib/manager");
const intern = require("./lib/intern");
let http = require("http");

function addManager() {
    inquirer.prompt(
        [
            {
                type: Input,
                message: "Enter manager name",
                name: "name"
            },

            {
                type: Input,
                message: "What is their id number?",
                name: "id"
            },

            {
                type: Input,
                message: "What is their email?",
                name: "email"
            },

            {
                type: Input,
                message: "What is their office number?",
                name: "office number"
            }
        ]
    )

    inquirer.prompt(
        [
            {
                
            }
        ]
    )
}
