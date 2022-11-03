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
- setup salting and hasing in user schema
### API
- server => api
### auth api
- user singn-up and sign-in
### food api
- get food details on id
- get all food based on particular restaurant
- get all food based on particular category
### restaurant api
- get all restaurant details based on city
- get individual restaurant details based on id
- get restaurant details based on search string
### user api
- npm i passport
- npm i passport-jwt
- server => config => route_config.js (create)
- config => server => index.js
- npm i express-session
- api -------------------
- Get authorized user data (ptivate)
- Get user data (For the review system) (public)
- Update user data (Private)
### menu api
- Get menu based on menu id
- Get all list of menu images with id
### order api
- Get all orders by user id
- Add new order
### review api
- Get all review for a particular restaurant
- Add new food/restaurant review and rating
- Delete a specific review
### restaurant api revised
- create new restaurant
- get all restaurant details based on city
- get individual restaurant details based on id
- get restaurant details based on search string
### food api revised
- create new food
- get food details on id
- get all food based on particular restaurant
- get all food based on particular category
### setup validation
- npm i joi
- server => validation =>
- auth_validation.js(sing up and sign in)
- comman_validation.js
### aws config
- create s3 bucket for stoaring image
- create IAM sub-accout 
- npm i aws-sdk
### image api
- npm i multer (uploading heavy data like image)
- api -> image
- server -> utils -> s3.js
### google auth api
- https://console.cloud.google.com (config)
- npm install passport-google-oauth2
- config => googe_config.js
### build project (node js)
- npm run build
- setup everything
### create react app
- npx create-react-app client
- config tailwind css
- config headless ui  https://headlessui.com/react/menu#installation
- npm i axios swiper react-router-dom react-rating-stars-component
- npm install leaflet (config in index.html https://react-leaflet.js.org/docs/start-installation/)
- npm install react-leaflet
- npm install react-icons
### files
- components, layouts, pages
- pages => HomePage.jsx, GoogleAuthPage.jsx, RestaurantPage.jsx, CheckoutPage.jsx
- components => Restaurant => Overview.jsx, OrderOnline.jsx, Reviews.jsx, Menu.jsx, Photos.jsx
- layouts => CheckoutLayout.jsx, HomePageLayout.jsx, RestaurantLayout.jsx  (HOC)
- components => Navbar, FoodTab, Delivery, Dining, NightLife, Nutrition
### ui design
- Navbar ✔
- npm i classnames (for easy conditional statement)
- taliwind.config.js added custom colors
- FoodTab ✔
- home page => nested rotes (Delivery, Dining, NightLife, Nutrition)
- ### Delivery ✔
- Delivery Carousel ✔
- Restaurant Card ✔
- ### Dining ✔
- Picture Carousel ✔
- ### Night life ✔
- Night life Carousel ✔
- ### Nutrition ✔
- Nutrition Hero Carousel ✔
- Nutrition Carousel ✔
- NutritionCard ✔
- ### Restaurant Details ✔
- image grid ✔
- info button ✔
- restaurant info ✔
- tabs ✔
- ### Restaurant Overview ✔
- npm i react-simple-image-viewer
- npm i dayjs
- Menu Collection ✔
- Menu Similar Restaurant Card ✔
- Review Card ✔
- MapView ✔
- Menu ✔
- Order Online ✔
- Add Review ✔
- Photo Collection
