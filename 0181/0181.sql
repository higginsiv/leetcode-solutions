# Write your MySQL query statement below
SELECT name as Employee
FROM Employee
WHERE Employee.Salary > (SELECT Salary FROM Employee AS e2 WHERE Id = Employee.ManagerId)