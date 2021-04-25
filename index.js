// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown  = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
// const questions = ['Enter a Title for the project',
//  'Enter a discreption of the application',
//  'Please enter a Table on content', 
//  'Please enter ubstallation instructions',
//  'Please enter the usage information',
//  'Please enter the licence',
//  'Please enter Contributing ',
//  'Please enter test information and Questions'
// ];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'discreption',
            message:'Enter a discreption of the Program (Required)',
            validate: discreption => {
                if(discreption){
                    return true;
                }else{
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'Installation',
            message:'Enter installation instructions or Click enter to skip'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter app usage information or enter to skip'
        },
        {
            type:'checkbox',
            name:'license',
            message:'select a license',
            choices:[
                'Academic Free License v3.0',
                'Apache license 2.0',
                'Artistic license 2.0',
                'Boost Software License 1.0',
                'BSD 2-clause "Simplified" license',
                'BSD 3-clause "New" or "Revised" license',
                'BSD 3-clause Clear license',
                'Creative Commons license family',
                'Creative Commons Zero v1.0 Universal',
                'Creative Commons Attribution 4.0',
                'Creative Commons Attribution Share Alike 4.0',
                'Do What The F*ck You Want To Public License',
                'Educational Community License v2.0',
                'Eclipse Public License 1.0',
                'Eclipse Public License 2.0',
                'European Union Public License 1.1',
                'GNU Affero General Public License v3.0',
                'GNU General Public License family',
                'GNU General Public License v2.0',
                'GNU General Public License v3.0',
                'GNU Lesser General Public License family',
                'GNU Lesser General Public License v2.1',
                'GNU Lesser General Public License v3.0',
                'ISC',
                'LaTeX Project Public License v1.3c',
                'Microsoft Public License',
                'MIT',
                'Mozilla Public License 2.0',
                'Open Software License 3.0',
                'PostgreSQL License',
                'SIL Open Font License 1.1',
                'University of Illinois/NCSA Open Source License',
                'The Unlicense',
                'zLib License'
            ]
        },
        {
            type: 'input',
            name: 'contributing',
            message:'How to contribute to the app'
        },
        {
            type:'input',
            name: 'username',
            message: 'Enter your github username'
        },
        {
            type:'input',
            name:'email',
            message:'Enter your email address'
        }
    ])
}




promptUser()
.then(data => {
    console.log(generateMarkdown(data));
});









//list of badges for gitHub license : 
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
