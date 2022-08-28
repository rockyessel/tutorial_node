const express = require('express')
const path = require('path')
const crypto = require('crypto')
const dotenv = require('dotenv')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const GridFsStream = require('gridfs-stream')
const methodOverride = require('method-override')
const connectDatabase =  require('./config/database')
const app = express()
const PORT = process.env.PORT || 4000



dotenv.config({ path: '.env'})

//Connecting to DB
connectDatabase()

//Middleware
app.use(express.json())
app.use(methodOverride('_method'))






app.listen(PORT,()=>{
    console.log(`Server running on port:${PORT} and http://localhost:${PORT}/`)
})