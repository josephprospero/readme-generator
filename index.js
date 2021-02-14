// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your project?',
        validate: projectTitle => {
            if (projectTitle) {
                return true;
            } else {
                console.log('Please enter a name for your project!')
                return false;
            };
        } 
    },
    {
        type: 'input',
        name: 'projectRepo',
        message: 'What is the Github repo name for your project?',
        validate: projectRepo => {
            if (projectRepo) {
                return true;
            } else {
                console.log('Please enter your repo name!')
                return false;
            };
        } 
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Give a brief description of your project.',
        validate: projectDescription => {
            if (projectDescription) {
                return true;
            } else {
                console.log('Please enter a description of your project!')
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'projectInstallation',
        message: 'Describe the installation process for your project. (optional)',
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: 'How does one implement your project?'
    },
    {
        type: 'input',
        name: 'projectContribution',
        message: 'How can other developers contribute to your project? (If applicable)'
    },
    {
        type: 'confirm',
        name: 'projectTest',
        message: 'Is there a way to test your project?'
    },
    {
        type: 'list',
        name: 'projectLicenses',
        message:'Please select the license used in your project.',
        choices: [
            'Apache',
            'Boost',
            'GNU GPL v3',
            'GNU AGPL v3',
            'GNU FDL v1.3',
            'ISC',
            'MIT',
            'Mozilla'
        ]
    },
    {
        type: 'input',
        name: 'contactUsername',
        message: 'Please provide your GitHub username.',
        validate: contactUsername => {
            if (contactUsername) {
                return true;
            } else {
                console.log('Please enter a valid username!')
                return false;
            };
        }
        
    },
    {
        type: 'input',
        name: 'contatEmail',
        message: 'Please provide your email address.',
        validate: contactEmail => {
            if (contactEmail) {
                return true;
            } else {
                console.log('Please enter a valid email.')
                return false;
            };
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(
        questions
    )
};

// Function call to initialize app
init();
