# MERN-Zomato-Clone
### create project
- npm init -y
### install dependancy
- npm i express mongoose dotenv
### install dev dependancy
- npm install --save-dev nodemon @babel/cli @babel/core @babel/preset-env @babel/node
### additioaal config
- add .gitignore (add content)
- add .babelrc (add content from https://www.freecodecamp.org/news/setup-babel-in-nodejs/)
- add scripts on package.json
- add index.js and create a server
### run server
- npm start
- npm run dev
### create database connection
- server => database => connection.js
- server => .env configured with key
### create schema (API Planning)
- food (food items and their details)
- restaurant (restaurant and their details)
- menu (menu and it's details)
- order (order and it's details)
- image (storing all the images related to the project)
- review (storing all the list of reviews)
- user (user related details, username, email, password)
### craete models
- server => database => allModels
### create mongodb project
- setup newtwork access
- setup database access
- config env
### creating schemas
- food, image, menu,order, restaurant, review, user
### install bcryptjs jsonwebtoken
- npm install bcryptjs jsonwebtoken

