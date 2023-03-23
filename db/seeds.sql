USE employee_db;
INSERT INTO department (name)
VALUES 
("SALES"), ("ENGINEERING"), ("Marketing");

INSERT INTO role 
(id, title, salary, department_id)
VALUES 
(1, "Sales Person", 60000.00, 1)



INSERT INTO employee
(id, first_name, last_name, role_id, manager_id)
VALUES
(1, "Bob", "Jones", 1, NULL),
(2, "Tommy", "Smith", 1, 1)

