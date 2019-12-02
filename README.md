# Grocery-List

This assignment uses the concepts studied so far in the course to create a Full Stack Web Application. This includes NodeJS, MongoDB in backend and HTML, CSS, Javascript in the frontend.

The task is to create a grocery list app that multiple users can use and edit. The users are authenticated using a username and password that will be stored in a database(MongoDB). The grocery list is also stored in the database with options available for each user to add and delete items.

This is created as a RESTful web API which means the server has API endpoints that can be used to manipulate the database using a decoupled frontend. The task of the server is only the manipulation of data with no frontend computations. Communication between frontend and backend is done using AJAX calls to the API endpoints.

## Setting up
- clone the repository using github `git clone https://github.com/arjun23496/326-FullStack.git`
- install the required node modules `npm install`
- Make sure node version is `12.13.0` and mongo version is `4.2.1`
- Make sure you have some application like [POSTMAN](https://www.getpostman.com/downloads/) to test the backend APIs
- Create a database in mongo named `grocerylist`\
- (Optional) Run the server and create a user by sending POST request to `/api/signup` endpoint. This can be easily done with POSTMAN

## File Organization
The project has been created to represent a common structure that can be observed in some production level full stack applications. 

- `client` - contains code for the frontend of the application and
- `server` - contains codebase for the backend of the application
- `client/css` - Folder for stylesheets
- `client/js`  - Folder for script files
- `client/index.html` - Entry point of the application frontend
- `client/shoppinglist.html` - HTML page to create and delete items from shopping list
- `node_modules` - Folder created by `npm` containing all node packages pertaining to the application
- `server` - Contains code for application backend
- `server/config` - Code pertaining to the configuration of the server like middlewares, helper functions and routes
- `server/lists` - Code pertaining to the manipulation of grocery lists
- `server/users` - Code pertaining to the manipulation of users in database
- `server/server.js` - Code to combine the different parts of configuration
- `index.js` - Setup mongoDB connection and start server

## Backend Flow

- Running the server using `node index.js`. `index.js` first creates a connection to mongoDB then initializes the express app 
- Initializing express(`server/server.js`) entails adding required middlewares(`server/config/middleware.js`) and initializing routes(`server/config/routes.js`).
- `server/config/routes.js` contains the api endpoints of the server. This is where all our required functions are called.

## TODO:

## Implement User functions

Implement the function `signin` in `server/users/userHandler.js`. The function will accept a json object from the request body containing username and password. This is validated against the database.

## Implement List functions

- Define the Schema of grocery list in `server/list/listModel.js`. Add all properties that are required.
- Implement the list manipulation functions in `server/list/listHandler.js`. `addItem` takes in a json object as request body parameter and adds it into the database. `getItems` require no parameters and return all the items in the database as a list of json objects. `deleteItem` takes in the id of the item and deletes it.

## Implement and Test Routes

- Add routes to enable calling the implemented functions above using REST API calls
- Now that the server side functionality is complete it is required to test these API endpoints. An application like POSTMAN can help to easily achieve this.

## Implement the Login Page

- Implement the LogIn function in `client/js/login.js`. This function uses the values in the form to authenticate a user using server API endpoints.
- After successful authentication it should redirect to the `shoppingList.html` file. If authentication fails it should inform the user.

## Implement the Shopping List Page

- Implement functions in `client/js/shopping_list.js`. Each function sends an AJAX request to the server to do the necessary data manipulation. Make sure frontend shows the updated grocery list.

## Final words!

Now you have completed a basic full stack web application. Think about additional ideas to improve this application-like css, cryptography based user authentication, use templates(EJS, Mostache) etc. Have fun!
