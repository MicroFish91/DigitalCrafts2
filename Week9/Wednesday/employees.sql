SET search_path TO employees;

-- first /o data.txt
-- end /o

-- Find all employees in department d005
-- SELECT * FROM employee
-- INNER JOIN department_employee
-- ON employee.id = department_employee.employee_id
-- WHERE department_id = 'd005';

-- SELECT * FROM employee
-- INNER JOIN department_employee
-- ON employee.id = department_employee.employee_id
-- INNER JOIN department
-- ON department_employee.department_id = department.id
-- WHERE department.id = 'd005'

SELECT * FROM (
  SELECT employee.id, first_name, last_name, max(amount) as salary FROM employee
  INNER JOIN salary
  ON employee.id = salary.employee_id
  INNER JOIN department_employee
  ON employee.id = department_employee.employee_id
  INNER JOIN department
  ON department_employee.department_id = department.id
  WHERE department.id = 'd005'
  GROUP BY employee.id
) AS salarycheck WHERE salary < 50000 ORDER BY salary DESC;