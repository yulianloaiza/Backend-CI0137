const express = require("express");
const dotenv = require("dotenv");
//const swaggerFile = require('./swagger.json');
//const swaggerUI = require("swagger-ui-express");
dotenv.config();
const server = express();
server.use(express.json());

//Faltan mas cosas todavia
const mysql = require("mysql");

const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

server.get("/", (req, res) => {
  res.send("Welcome nodemon");
});

server.post("/users", (req, res) => { //Cambiar nombre de la base de datos
  const userPayload = req.body;
  const sql = `
        INSERT INTO test.Users ( 
            numberOfViews,
            images,
            name,
            age,
            gender,
            size,
            description,
            organization
        )
        VALUES(
            '${userPayload.numberOfViews}',
            '${userPayload.images}',
            '${userPayload.name}',
            ${userPayload.age || "NULL"},
            ${userPayload.gender || "NULL"},;
        `;
  res.json(newUser);
});

server.listen(process.env.PORT || 7500);
console.log(
  `The server is running at http://localhost:${process.env.PORT || 7500}`
);
