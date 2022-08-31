const FileModel = require('../models/files')
const fs = require('fs')
const path = require('path')

const getFiles = async (request, response) => {
    response.send('HEllo')
}

const postImages = async (request, response) => {
    try {



        const image = new FileModel({
            code: 'AS32H',
            image: {
                data: fs.readFileSync(path.join(`${__dirname}/uploads/images/${request.file.filename}`)),
                contentType: 'image/png'
            }
        })

        console.log(image)

       await image.save()
        response.status(201).json({
            image,
            msg: 'Uploaded successfully'
        })


    } catch (error) {
        console.log(error)
        console.error(error)
        response.status(400).json({not_there: false})
    }
}

module.exports = {
    getFiles,
    postImages
}