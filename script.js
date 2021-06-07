const fs = require('fs');
const inquirer = require('inquirer');
const questionsJS = require('./questions.js');
const writeHTML = require('./write.js');

function init() {
    inquirer
        .prompt(questionsJS.questions)
        .then((response) => {
            fs.writeFile('index.html', writeHTML.writeFile(response), (err) => err ? console.error(err) : console.log('Commit logged!'));
        })
}

init();
