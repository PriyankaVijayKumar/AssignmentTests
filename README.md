
## Automation test script for Sign-in functionality


    
## Test suite contains the following test cases

1. Go to https://magento.softwaretestingboard.com/ -> Home page is loaded
2. Create an account -> A new account gets created with fake emails. 
3. Test the sign in functionality using different test cases. 


## Cypress version 

- latest
    
## Node version 

- Latest


## Prerequisites




- Git client installed. To verify if git client is installed properly, open Command Prompt on Windows, or Terminal on Mac, then execute this command git --version

- NodeJS  installed. To verify if nodejs is installed properly, open Command Prompt on Windows, or Terminal on Mac, then execute this command node --version
## Setup

- Download the project to the local and open in Visual Studio Code. 
- Run the below commands
 ```bash
   npm -i init
   npm install cypress --save -dev
   npm install @faker-js/faker --save-dev
   npx cypress run
   ```
   - Cypress will run in headless mode and every test case inside the suite gets executed. 
## Test case parameter details

The test cases are written in cypress -> e2e -> test.cy.js file. The fixtures for the test case is parametrized. This way the flow could be validated with different set of parameter or arguments. The fixtures are specified in the cypress -> fixtures -> constants.json file. Feel free to test the flow by adding different set of parameters. The cypress commands are specified in cypress -> support -> commands.js file. 


## Reports

- When you run npx cypress run, a report gets generated showing the test cases that are passed and failed along with screenshots for failed test cases and total run duration. 

![TestReport](https://github.com/PriyankaVijayKumar/AssignmentTests/assets/49277306/9f14f255-9263-44bb-a065-ed504a1d4e5d)
