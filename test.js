const inquirer = require('inquirer');
const fs = require('fs');



inquirer
  .prompt([  
    {
      type: 'list',
      message: 'What do you want to do?',
      name: 'option',
      choices: [
        'view all departments', 
        'view all roles', 
        'view all employess',
        'add a department',
        'add a role',
        'add an employee',
        'update an employee role'
    ],
    }
  ])
  .then((response) => {
    console.log(response) 
    if (response.choices === 'view all departments') {
        viewDepartments()
    }
    if (response.choices === 'view all roles') {
        viewRoles()
    }
  });
