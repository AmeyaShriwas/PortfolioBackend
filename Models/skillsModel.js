const mongoose = require('mongoose')

const skillsSchema  = new mongoose.Schema({
    skillsDetail: {
        type: [String],
        require: true
    }
})

module.exports = mongoose.model('skillsModel', skillsSchema)