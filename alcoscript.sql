-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS alco;
USE alco;

-- Create the project table if it doesn't exist
CREATE TABLE IF NOT EXISTS projecttable (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) 
);

-- Create the tasks table if it doesn't exist
CREATE TABLE IF NOT EXISTS Taskess (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task_name VARCHAR(255) NOT NULL,
  start_date DATE,
  deadline DATE,
  status VARCHAR(50),
  project_id INT ,
  FOREIGN KEY (project_id) REFERENCES projecttable(id)
);

DELIMITER //

CREATE TRIGGER before_insert_taskesss
BEFORE INSERT ON Taskess
FOR EACH ROW
BEGIN
  -- Set the project_id based on the user-provided value or a default
  IF NEW.project_id IS NULL OR NEW.project_id = 0 THEN
    SET NEW.project_id = (SELECT id FROM projecttable );
  END IF;
END;
//

DELIMITER ;





-- Insert into tasks without specifying project_id (it will default to the last inserted projecttable record)
INSERT INTO Taskess (task_name, start_date, deadline, status) VALUES ('Task 1', '2023-02-01', '2023-12-01', 'In Progress1');
select*from projecttable