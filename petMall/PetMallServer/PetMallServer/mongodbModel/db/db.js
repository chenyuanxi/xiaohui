var mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/petMall'
mongoose.connect(url, { useNewUrlParser: true })

module.exports = mongoose
