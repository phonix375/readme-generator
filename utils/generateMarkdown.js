// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function tableOfContent(data){
//discreption
// Installation
// Usage
// License
//contributing
//contact

tableOfContentOutput = '- [Discreption](##Description)';
if(!data.installation == ''){
  tableOfContentOutput += '\n- [Installation](##Installation)';
}
console.log('this is before usage : ',data.usage)

if(!data.usage == ''){
  tableOfContentOutput += '\n- [Usage](##Usage)';
}
if(!data.license == ''){
  tableOfContentOutput += '\n- [License](##License)';
}
if(!data.contributing == ''){
  tableOfContentOutput += '\n- [Contributing](##Contributing)';
}
if(!data.username == '' || !data.email == ''){
  tableOfContentOutput += '\n- [Contact](##Contact)';
  tableOfContentOutput += `\n- ${data.username}, ${data.email}`;
}
return(tableOfContentOutput);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.discreption}
  ## Table of content
  ${tableOfContent(data)}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contributing}
`;
}

module.exports = generateMarkdown;
