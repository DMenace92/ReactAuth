const express = require("express");
const app = express();
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRouter = require('./routes/login')
require('./config/db')


const PORT = process.env.PORT || 9000;
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(userRouter);
app.use(express.static(path.join(__dirname, "client", "build")))

app.use(express.static(path.join(__dirname, './auth-client/build')))
app.get('*', (req,res)=> res.sendFile(path.join(__dirname, 'auth-client',"build", "index.html")))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.listen(PORT,(e)=>{
    if(e){
        // console.log(`Server Not Running!: ${e}`)
        throw e
    }
    console.log(`Server is running on Port: ${PORT}`);
})