/* mySQL commands for week 009 homework */

CREATE TABLE Users ( 
    UserId int NOT NULL AUTO_INCREMENT, 
    Username varchar (255) NOT NULL, 
    PRIMARY KEY (UserId) 
    );

INSERT INTO Users (UserId, Username)
    -> VALUES (1, "susan@bbc.co.uk");

INSERT INTO Users (UserId, Username) VALUES (2, "geoff@bbc.co.uk");

SELECT * FROM Users;
+--------+-----------------+
| UserId | Username        |
+--------+-----------------+
|      1 | susan@bbc.co.uk |
|      2 | geoff@bbc.co.uk |
+--------+-----------------+

CREATE TABLE Tasks ( 
    TaskId int NOT NULL AUTO_INCREMENT, 
    Description varchar (255) NOT NULL,  
    Completed BOOLEAN,
    UserId int, 
    PRIMARY KEY (TaskId), 
    FOREIGN KEY (UserId) REFERENCES Users(UserId) 
    );

INSERT INTO Tasks (TaskId, Description, Completed, UserId) VALUES (1, "Learn Node.js", False, 1);

INSERT INTO Tasks (TaskId, Description, Completed, UserId) VALUES (2, "JavaScript", False, 2);

INSERT INTO Tasks (TaskId, Description, Completed, UserId) VALUES (3, "Learn mySQL", False, 2);

 SELECT * FROM Tasks;
+--------+---------------+-----------+--------+
| TaskId | Description   | Completed | UserId |
+--------+---------------+-----------+--------+
|      1 | Learn Node.js |         0 |      1 |
|      2 | JavaScript    |         0 |      2 |
|      3 | Learn mySQL   |         0 |      2 |
+--------+---------------+-----------+--------+

SELECT * FROM Tasks WHERE UserID = 2;
+--------+-------------+-----------+--------+
| TaskId | Description | Completed | UserId |
+--------+-------------+-----------+--------+
|      2 | JavaScript  |         0 |      2 |
|      3 | Learn mySQL |         0 |      2 |
+--------+-------------+-----------+--------+

SELECT * FROM Tasks WHERE UserID = 1;
+--------+---------------+-----------+--------+
| TaskId | Description   | Completed | UserId |
+--------+---------------+-----------+--------+
|      1 | Learn Node.js |         0 |      1 |
+--------+---------------+-----------+--------+

UPDATE Tasks
    -> SET Completed = True
    -> WHERE Description = "JavaScript";                                               Query OK, 1 row affected (0.02 sec)


mysql> SELECT * FROM Tasks WHERE UserID = 2;
+--------+-------------+-----------+--------+
| TaskId | Description | Completed | UserId |
+--------+-------------+-----------+--------+
|      2 | JavaScript  |         1 |      2 |
|      3 | Learn mySQL |         0 |      2 |
+--------+-------------+-----------+--------+

/* Although I have done this part of the homework by description,  How would you specify this update only for a specific user Only? */
/* I think its probably: */

UPDATE Tasks
    SET Completed = True
    WHERE Description = "JavaScript"
    AND UserID = 2;

SELECT * FROM Tasks WHERE UserID = 2 AND Completed = False;
+--------+-------------+-----------+--------+
| TaskId | Description | Completed | UserId |
+--------+-------------+-----------+--------+
|      3 | Learn mySQL |         0 |      2 |
+--------+-------------+-----------+--------+



