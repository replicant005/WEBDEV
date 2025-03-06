// bring express package 
const express = require('express');
// start express app
const app = express(); // express() is a top-level function exported by the express module.

// creating a route handler , so here basically we are creating a response to the request, in this case it is for the get request 
app.get('/' , (req, res) => {res.json({mssg : "Wwelcome to the app"})} )
//  / is the route or the default route , so when the user goes to the localhost port 4000  / , then it fires afunction to handle a response
// req is the request object and res is the response object
// we get a welcome message as a response to request

// i gotta connecct thsi server to a port on computer to listen for requests
app.listen(4000, () => {  // app listens to the port 4000 and triggers a function which logs on the console what its doing
    console.log('Server is listening on port 4000');
});