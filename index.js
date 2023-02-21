const inquirer = require("inquirer")
const mysql = require("mysql2")

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    console.log(data)
  });

const connection = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Pwbb2010',
      database: 'employee_db'
    },
    console.log(`Connected to the classlist_db database.`)
  );

function menu() {



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
  ]).then((response) => {
    console.log(response) 
    if (response.choices === 'view all departments') {
        viewDepartments()
    }
    if (response.choices === 'view all roles') {
        viewRoles()
    }
  })



}
function viewDepartments() {
    console.log("hello")
    // connection.query('SELECT * FROM department', function (err, results) {
    //     console.log(results); 
        
    //   });
}

// menu()