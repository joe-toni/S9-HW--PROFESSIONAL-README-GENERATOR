// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = 
[
    {
        name:"ProjectName",
        type:"input",
        message:"What is the name of your Project?"
    },
    {
        name:"Description",
        type:"input",
        message:"Briefly describe your project, what does it do? How does it work?"
    },
    {
        name:"Installation",
        type:"input",
        message:"What are the requirements for Installing your application if any?"
    },
    {
        name:"Usage",
        type:"input",
        message:"What does your application produce, what should it be used for?"
    },
    {
        name:"Tests",
        type:"input",
        message:"How can the user interact with your app? How can they test it?"
    },   
    {
        name:"Contributing",
        type:"input",
        message:"How can users contribute to your project?"
    },   
    {
        name:"Email",
        type:"input",
        message:"Enter your email address:"
    },
    {
        name:"UserName",
        type:"input",
        message:"Enter your GitHub user name:"
    },
    {
        name:"License",
        type:"input",
        message:"I have no idea how to implement this one tbh."
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
    fs.writeFile(fileName, data, (err) => {if(err)throw err;});
}

// TODO: Create a function to initialize app
function init() 
{
    inq.prompt(questions).then((res, err) => 
    {
        if (err)
        {console.log(err);}
        else
        {
        var result = 
`
# ${res.ProjectName}    
        
##  Description
${res.Description}

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

${res.Installation}

---

### Usage

${res.Usage}

---

### Testing

 ${res.Tests}

 ---

 ### Contributing

${res.Contributing}

---

### Questions

If you'd like to see more of my work feel free to check out my [GitHub](https://github.com/${res.UserName}) account.
Or if you have any questions you can contact me at this [Email](mailto:${res.Email}) Address.

---

### License
${res.License}
`;
        writeToFile("README.md", result);
        }
    }) ;
    
}

// Function call to initialize app
init();
