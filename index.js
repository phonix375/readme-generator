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
            name:'installation',
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

const mockData = {
    title:'Your Project Title',
    discreption:
    `Your GitHub profile is an extremely important aspect of your public identity as a developer. A well-crafted one allows you to show off your work to other developers as well as potential employers. An important component of your GitHub profile—and one that many new developers often overlook—is the README.md file.
    The quality of a README often differentiates a good project from a bad project. A good one takes advantage of the opportunity to explain and showcase what your application does, justify the technologies used, 
    and even talk about some of the challenges you faced and features you hope to implement in the future. A good README helps you stand out among the large crowd of developers putting their work on GitHub.
    \nThere's no one right way to structure a good README. There is one very wrong way, however, and that is to not include a README at all or to create a very anemic one. This guide outlines a few best practices. As you progress in your career, you will develop your own ideas about what makes a good README.
    At a minimum, your project README needs a title and a short description explaining the what, why, and how. What was your motivation? Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn? What makes your project stand out?
    Lastly, if your project is deployed, include a link to the deployed application here.
    If you're new to Markdown, read the GitHub guide on Mastering Markdown
    If you need an example of a good README, check out the VSCode repository.`,
    installation:'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    usage:`Provide instructions and examples for use. Include screenshots as needed.
    To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    md
    ![alt text](assets/images/screenshot.png)
    `,
    license:'MIT',
    contributing:'If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.',
    username:'phonix375',
    email:'kotliar.alex@gmail.com'
}


// promptUser()
// .then(data => {
    console.log(generateMarkdown(mockData));
// });









//list of badges for gitHub license : 
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
