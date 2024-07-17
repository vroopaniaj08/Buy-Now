const express = require('express');
const server = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require('./router/auth');
const uiExpress = require('swagger-ui-express')
const swaggerjsdoc = require('swagger-jsdoc')
const cors = require('cors')
server.use(cors('*'))
dotenv.config();

server.use(express.json());
server.use(express.urlencoded());
server.use('/auth',authRouter);

mongoose.connect(process.env.URL).then(()=>console.log("connected")).catch(error=>{console.log(error)})

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
        title: '',
        version: '1.0.0',
        },
        servers:[
            {
                url:'http://localhost:6969/'
            }
        ]
    },
    apis: ['./router/*.js'],
};

const openapiSpecification = swaggerjsdoc(options);
server.use('/api-docs',uiExpress.serve,uiExpress.setup(openapiSpecification))

server.listen(process.env.PORT,()=>{
    console.log("the server is running on the PORT");
})