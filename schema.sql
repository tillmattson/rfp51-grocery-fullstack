/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/

 create database groceryList;
 use groceryList;

 create table groceries (id int auto_increment primary key, name varchar(25) unique, quantity int);
