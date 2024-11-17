docker run --name local-mysql -e MYSQL_ROOT_PASSWORD=your_password -e MYSQL_DATABASE=appusers -p 3306:3306 -d mysql:5.7

mysql -u root -p

USE appusers;
CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255) NOT NULL);
INSERT INTO users (username) VALUES ('testuser');






