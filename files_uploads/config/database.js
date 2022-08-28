const mongoose = require('mongoose')


const connectDatabase = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log(`Successfully connected to Database:${connect.connection.host}:${connect.connection.port}`)


    } catch (error) {
        console.log(error.message)
        console.error(error)
    }
}

module.exports = connectDatabase