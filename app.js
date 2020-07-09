const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
//array where input data lives
const employeeObj = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
//questions for every class
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of the employee?",

    },
    {
        type: "input",
        name: "email",
        message: "Enter the employee's email address",
    },
    {
        type: "input",
        name: "id",
        message: "Enter the employee's ID number.",
    },
    {
        type: "list",
        name: "role",
        message: "What is the employee's current title?",
        choices: [
            "Intern",
            "Engineer",
            "Manager"
        ]
    },
]

// Write code to use inquirer to gather information about the development team members,
function gatherInfo(questions) {
    inquirer.prompt(questions)

        .then(function (employeeObj) {
            switch (employeeObj.role) {
                case 'Engineer':
                    engQuery();
                    console.log(employeeObj)
                    break;
                case 'Manager':
                    mgrQuery();
                    break;
                case 'Intern':
                    internQuery();

            }
            console.log(employeeObj)
            return employeeObj;
        }
        )
}


//engineer specific 
function engQuery() {
    const engQuestion = [
        {
            type: "input",
            name: "github",
            message: "Provide the GitHub username for this Engineer.",
        }
    ]
    inquirer.prompt(engQuestion)
        .then(function (engAnswer) {
            employeeObj.github = engAnswer.github;

        }
        )

}
// and to create objects for each team member (using the correct classes as blueprints!)
function internQuery() {
    const intermnQuestion = [
        {
            type: "input",
            name: "school",
            message: "What school are you currently attending?",
        }
    ]

}
function mgrQuery() {
    const mgrQuestion = [
        {
            type: "input",
            name: "officenum",
            message: "Enter the office number for this manager.",
        }
    ]

}

gatherInfo(questions);


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! 
