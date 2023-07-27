const multer = require('multer');

exports.upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (file.originalname !== 'blob')
            if (!file.originalname.match(/\.(jpg|jpeg|png)$/i))
                return cb(new Error('Please upload an image'))

        cb(undefined, true)
    }
}).fields([
    { name: "bookImage", maxCount: 1 },
    { name: "bookData", maxCount: 1 }
]);