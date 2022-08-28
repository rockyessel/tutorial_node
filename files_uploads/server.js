const express = require('express')
const dotenv = require('dotenv')
const connectDatabase =  require('./config/database')
const app = express()
const PORT = process.env.PORT || 4000



dotenv.config({ path: '.env'})

//Connecting to DB
connectDatabase()

//Middleware
app.use(express.json())


//Route Middleware
app.use('/', require('./routes/files'))



app.listen(PORT,()=>{
    console.log(`Server running on port:${PORT} and http://localhost:${PORT}/`)
})