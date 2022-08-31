const multer = require('multer')

const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './uploads/images')
    },
    filename: (request, file, callback) => {
        callback(null, file.originalname)
}
})
const upload = multer({storage: storage})


module.exports = upload