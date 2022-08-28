const express = require('express')
const router = express.Router()
const upload = require('../config/multer')
const {getFiles,postImages} = require('../controllers/files')


router.get('/',getFiles)
router.post('/images',upload.array('profile',4), postImages)




module.exports = router