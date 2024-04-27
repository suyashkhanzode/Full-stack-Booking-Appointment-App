const express = require('express');
const mysql = require('mysql');
const app = express.Router();
const config = require('config');
const { error } = require('console');

const connectionDetails = {
     host : config.get("dbsetting.host"),
     user : config.get("dbsetting.user"),
     password : config.get("dbsetting.password"),
     database : config.get("dbsetting.database")
}

// app.post("/appointment",(request,response) => {
//     var connection = mysql.createConnection(connectionDetails);
//     var statement = `insert into  appointment(username,email,phoneno) values 
//     ('${request.body.username}','${request.body.email}',${request.body.phoneno})`
//     ;
//     connection.query(statement,(error,result) =>{
//         if(error == null)
//         {
//             response.setHeader("Content-Type","application/json");
//             var data = JSON.stringify(result);
//             connection.end();
//             response.send(data);
//         }
//         else{
//             response.setHeader("Content-Type","application/json");
//             response.send(error);
//         }
//     })
// });

app.get("/appointment",(request,response) => {
    var connection = mysql.createConnection(connectionDetails);
    connection.query("select * from  appointment",(error,result) =>{
        if(error == null)
        {
            response.setHeader("Content-Type","application/json");
            var data = JSON.stringify(result);
            connection.end();
            response.send(data);
        }
        else{
            response.setHeader("Content-Type","application/json");
            response.send(error);
        }
    })
});



module.exports = app;