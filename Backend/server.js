const config = require('config');
const express = require('express');

const app = express();

const loginRoute = require('./routes/login');
const tutorialsRoute = require('./routes/tutorials');
const appointmentRoute = require('./routes/appointment')

app.use(express.json());
app.use((request, response, next)=>{
   response.setHeader('Access-Control-Allow-Origin',"*");
   response.setHeader('Access-Control-Allow-Headers',
   "*");
   response.setHeader('Access-Control-Allow-Methods',"*")

   next();
});

app.use('/sharpner',appointmentRoute);
app.use('/login',loginRoute);
app.use('/tutorials',tutorialsRoute);




const PORTNO = config.get("PORT");

app.listen(PORTNO,()=>{
    console.log("Server Started")
})