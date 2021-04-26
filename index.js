const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown  = require('./utils/generateMarkdown')


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
            name:'installation',
            message:'Installation instructions'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage information'
        },
        {
            type:'checkbox',
            name:'license',
            message:'Select a license',
            choices:[
                `Apache 2.0 License`,
                `BSD 3-Clause License`,
                `BSD 2-Clause License`,
                `Attribution 4.0 International`,
                `Attribution-ShareAlike 4.0 International`,
                `Attribution-NonCommercial 4.0 International`,
                `Attribution-NoDerivates 4.0 International`,
                `Attribution-NonCommmercial-ShareAlike 4.0 International`,
                `Attribution-NonCommercial-NoDerivatives 4.0 International`,
                `Eclipse Public License 1.0`,
                `GNU GPL v3`,
                `GNU GPL v2`,
                `GNU AGPL v3`,
                `GNU LGPL v3`,
                `GNU FDL v1.3`,
                `IBM Public License Version 1.0`,
                `MIT`,
                `Mozilla Public License 2.0`,
                `The zlib/libpng License`
            ]
        },
        {
            type: 'input',
            name: 'contributing',
            message:'Contribution guidelines'
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
};

promptUser()
.then(data => {
fs.writeFile('./output/README.md',generateMarkdown(data), err => {
    if(err){
        throw err;
    }
    console.log('file was created in output folder');
});
 });









//list of badges for gitHub license : 
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
