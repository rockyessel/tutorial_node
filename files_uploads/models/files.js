const mongoose = require('mongoose')


const FileSchema = mongoose.Schema({
    code: String,
    image:{
        data: Buffer,
        contentType: String,
    }
},
    {
        timestamp: true,
    })

module.exports = mongoose.model('FileModel', FileSchema)