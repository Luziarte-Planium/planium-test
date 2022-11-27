const express = require("express")
const cors = require("cors")
const routers = require("./routers")

const app = express()

const porta = 55200
const hostName = '192.168.1.7'

app.listen(porta, hostName, () => {
    console.log(" SERVIDOR START...!")
})
app.use(express.json())

app.use(cors())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', "PUT,POST,GET,DELETE,OPTIONS");
    next();
})

app.use(routers)


