const mongoose = require('mongoose')

const aboutUsSchema  = new mongoose.Schema({
    aboutUsDetail: {
        type: [String],
        require: true
    }
})

module.exports = mongoose.model('AboutModel', aboutUsSchema)