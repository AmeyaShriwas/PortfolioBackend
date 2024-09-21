const express = require('express') // import express 
const cors = require('cors') // import cors - cross origin resourse sharing - security feaute
const app = express()  //take instance of express in app
const dotenv = require('dotenv') //import to use dotenv file  - secure credentieals
const bodyParser = require('body-parser') // when form data submitted - parse to use
const path = require('path')
const UserRoutes = require('./Routes/authRoutes')
const portfolioRoutes = require('./Routes/portfolioRoutes')
const mongoose = require('mongoose') //import mongoose 


dotenv.config() // dotenv config  - use by Process.env - to get all .env values

app.use(cors({origin: '*'})) // app.use(middleware) - middleware funtioon - all to all requrest - *
app.use(express.json()) //when json data received - parse all jsson data to javascritp object to use here
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.set('view engine', 'ejs')// ejs is embedded javascript - server side template send from server to front end 

mongoose.connect(process.env.MONGO_URI).then(()=> {         //connect to mongodb using mongoose
    console.log('mongodb successfully connected')
}).catch(()=> {
    console.log('failed to connect to mongodb')
})


app.use('/', UserRoutes)
app.use('/admin', portfolioRoutes)

const port = 3300 //create a port on which project should run
app.listen(port,()=> {                      // use port to run - listen to these port 
   console.log('connect to port', port)
})