# QUIZ

## Description

Here is a quiz that allows you to view the questions and answers. To take the quiz, you need to register. Once the quiz is completed, a page shows the correct and wrong answers. Another administrator page allows you to add, modify or create a quiz tag.
The implementation of the site architecture corresponds to a Model View Controller model(MVC).

## Author

* Laura Grenier

## Stack
  * NODE.js
    * Express
    * Express-session
    * PostgreSql
    * Sequelize
    * Bcrypt
    * Email-validator
    * Dotenv
    * Ejs
    * Pg
  * CSS
  
## Install

* First clone the repo => ```git clone <name_of_the_repo>```
* **Build your own .env.back file in the folder named "BACK", at the root. All the informations you need to copy and paste in your .env.back are in the .env.back.example**
* After installing [PostgreSQL](https://www.postgresql.org/download/), create a database under Postgres => ``` create database <name_of_my_DB> ```
* Install all [NPM](https://www.npmjs.com/) and all the npm packages you need for this project => ``` npm i ```
* To launch the API => ``` npm start ```
* Go to your broswer, at the http://localhost:<PORT_you_put_in_your_.env.back>/v1
