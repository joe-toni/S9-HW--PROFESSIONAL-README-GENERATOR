// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
{
  switch(license)
  {
    case 'GNU GPLv3':
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case 'MIT License':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case 'The Unlicense':
        return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    default:
        return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) 
{
  switch(license)
  {
    case 'GNU GPLv3':
      return "https://www.gnu.org/licenses/gpl-3.0";
    case 'MIT License':
      return "https://opensource.org/licenses/MIT";
    case 'The Unlicense':
        return "https://unlicense.org/";
    default:
        return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 
{
  switch(license)
  {
    case 'GNU GPLv3':
      return "Licensed under the GNU GPLv3 License.";
    case 'MIT License':
      return "Licensed under the MIT License.";
    case 'The Unlicense':
        return "Licensed under The Unlicense";
    default:
        return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) 
{
  var result = 
`
# ${data.ProjectName}    

${renderLicenseBadge(data.License)}
        
##  Description
${data.Description}

-----

## Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[Testing](#testing)
-[Contributing](#contributing)
-[Questions](#questions)
-[License](#license)

---

### Installation

${data.Installation}

---

### Usage

${data.Usage}

---

### Testing

 ${data.Tests}

 ---

 ### Contributing

${data.Contributing}

---

### Questions

If you'd like to see more of my work feel free to check out my [GitHub](https://github.com/${data.UserName}) account.
Or if you have any questions you can contact me at this [Email](mailto:${data.Email}) Address.

---

### License

${renderLicenseSection(data.License)}
For more details visit: ${renderLicenseLink(data.License)}

`;

return result;
}

module.exports = generateMarkdown;
