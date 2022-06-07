const express = require("express");
const dotenv = require("dotenv");
//const swaggerFile = require('./swagger.json');
//const swaggerUI = require("swagger-ui-express");
dotenv.config();
const server = express();
server.use(express.json());

//Faltan mas cosas todavia