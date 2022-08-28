

const getFiles = async (request,response) => {
    response.send('HEllo')
}

const postImages = async (request, response) => {
try{
    response.status(200).json(request.file)
}catch (error){
    console.log(error)
    console.error(error)
    response.status(400).json({not_there: false})
}
}

module.exports = {
    getFiles,
    postImages
}