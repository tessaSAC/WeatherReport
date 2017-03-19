// FOR DEPLOYMENT TO HEROKU
// https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku

// ROUTE CONFIGURATION
// https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular


// IMPORT ALL NECESSARY PACKAGES
const express = require('express'),
	  app = express();

app.use(express.static(__dirname));


// SET A DYNAMIC PORT
// process.env.PORT lets HEROKU set port
const PORT = process.env.PORT || 8080;


// MAKE APP LISTEN ON THAT PORT
app.listen(PORT, function() {
	console.log(`App is running on http://localhost:${ PORT }`);
});