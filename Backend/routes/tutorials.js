const express = require('express');
const mysql = require('mysql');
const app = express.Router();
const config = require('config');
const { error } = require('console');
const { request } = require('http');

const connectionDetails = {
     host : config.get("dbsetting.host"),
     user : config.get("dbsetting.user"),
     password : config.get("dbsetting.password"),
     database : config.get("dbsetting.database")
}

app.post("/",(request,response) => {
    var connection = mysql.createConnection(connectionDetails);
    var statement = `select title,publishDate,contents from tutorials_tbl
     where topic_id = ${request.body.topic_id}`;
     connection.query(statement,(error,result) =>{
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