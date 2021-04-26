const choices = {};
choices[`Apache 2.0 License`] = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
choices[`BSD 3-Clause License`] = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
choices[`BSD 2-Clause License`] = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
choices[`Attribution 4.0 International`] = `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)(http://creativecommons.org/licenses/by/4.0/)`;
choices[`Attribution-ShareAlike 4.0 International`] = `[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-sa/4.0/)`;
choices[`Attribution-NonCommercial 4.0 International`] = `[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc/4.0/)`;
choices[`Attribution-NoDerivates 4.0 International`] = `[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nd/4.0/)`;
choices[`Attribution-NonCommmercial-ShareAlike 4.0 International`] = `[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)`;
choices[`Attribution-NonCommercial-NoDerivatives 4.0 International`] = `[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-nd/4.0/)`;
choices[`Eclipse Public License 1.0`] = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
choices[`GNU GPL v3`] = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`;
choices[`GNU GPL v2`] = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
choices[`GNU AGPL v3`] = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)`;
choices[`GNU LGPL v3`] = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)`;
choices[`GNU FDL v1.3`] = `[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](http://www.gnu.org/licenses/fdl-1.3)`;
choices[`IBM Public License Version 1.0`] = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
choices[`MIT`] = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
choices[`Mozilla Public License 2.0`] = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
choices[`The zlib/libpng License`] = `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;

function renderLicenseSection(license) {
  let outPut = '';
for(let i = 0; i< license.length; i++){
  outPut += `${license[i]}\n
  ${choices[license[i]]}\n`;
}
return outPut;

}

function tableOfContent(data){

tableOfContentOutput = '* [Discreption](#Description)';
if(!data.installation == ''){
  tableOfContentOutput += '\n* [Installation](#Installation)';
}
if(!data.usage == ''){
  tableOfContentOutput += '\n* [Usage](#Usage)';
}
if(!data.contributing == ''){
  tableOfContentOutput += '\n* [Contributing](#Contributing)';
}
if(!data.username == '' || !data.email === ''){
  tableOfContentOutput += '\n* [Contact](#Contact)';
}
return(tableOfContentOutput);
}

const contact = (email, username) => {
  let logo = ''
  let emailLink =''
  let gitHub =''
  if(email || username){
    logo =`## Contact \n[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/${username})\n`;
  };
  
  if(email){
    emailLink += `\n Email : ${email}\n`
  };
  if(username){
    gitHub += `\n[Link to GitHub](https://github.com/${username})`;
  };
  return`
  ${logo}
  ${emailLink}
  ${gitHub}
  `;
}

const checkIfExist = (info, title) => {
  if(info){
    return `${title}\n${info}`;
  } else {
    return '';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.discreption}
  ## Table of content
  ${tableOfContent(data)}
  ${checkIfExist(data.installation, '## Installation')}
  ${checkIfExist(data.usage, '## Usage')}
  ${renderLicenseSection(data.license)}
  ${checkIfExist(data.contributing, '## Contributing')}
  ${contact(data.email,data.username)}
`;
}

module.exports = generateMarkdown;
