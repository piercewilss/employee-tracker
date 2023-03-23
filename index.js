const inquirer = require("inquirer")
const mysql = require("mysql2")



const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Pwbb2010',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
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
        'view all employees',
        'add a department',
        'add a role',
        'add an employee',
        'update an employee role',
        'quit'

    ],
    }
  ]).then((response) => {
    
    switch(response.option) {
      case "view all departments":
        viewDepartments()
        break;
        case "view all employees":
        viewEmployees()
        break;
        case "view all roles":
        viewRole()
        break;
        case "add a department":
        addDepartments()
        break;
        case "add a role":
        addRole()
        break;
        case "add an employee":
        addEmployee()
        break;
        case "update an employee role":
        updateEmployee()
        break;
        default:
        quit()

    }
    // console.log(response) 
    // if (response === 'view all departments') {
    //     viewDepartments()
    // }
    // if (response.choices === 'view all roles') {
    //     viewRoles()
    // }
  })



}
function viewDepartments() {
    console.log("hello")
    db.query('SELECT * FROM department', function (err,[results]){
      console.table(results)
    });
menu()
}

menu()


// viewDepartments()


function viewEmployees() {
  console.log("hello")
  db.query('SELECT * FROM employee', function (err,[results]){
    console.table(results)
  });
  menu()
}

function viewRole() {
  console.log("hello")
  db.query('SELECT * FROM role', function (err,[results]){
    console.table(results)
  });
  menu()
}

function addDepartments() {
  console.log("hello")
  inquirer
  .prompt([  
    {
      type: 'input',
      message: 'What is the department name?',
      name: 'departmentname',
      
    }
  ]).then((response) => {
    console.log(response)
    var department = response.departmentname
    db.promise().query('INSERT INTO department SET ?',
     department, function (err,results){
      console.table(results)
  })  
})

  
}

function quit() {
    console.log("good bye")
    process.exit()
    }