const { default: mongoose } = require('mongoose')
const mogoose = require('mongoose')

modeule.exports = function() {
    mongoose.connect('mongodb+srv://lucas:<password>@cluster0.pnbqnw3.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true    
    })
}