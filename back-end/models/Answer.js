const mongoose = require('mongoose')

const schema = mongoose.Schema({
    question: {
        type: mongoose.ObjectId, // Tipo especial
        ref: 'Question', // Referencia a coleção Question
        required: true
    },
    /*
        Valores possiveis para o campo "answer":
        Y: Sim (yes)
        N: Não (no)
        X: nao aplicavel (not applicable)
        P: resposta adiada (postponed)
    */

    answer: {
        type: String,
        required: true,
        enum: ['Y', 'N', 'X', 'P']
    },
    comment: {
        type: String,
        required: false
    },
    answered_at: {
        type: Date,
        required: true,
        default: Date.now() //Data/hora atual
    },
    
})

/*
         Parametro de mongooser.model:
    1º - Nome do model, para uso interno. Por convenção,
         usa-se Inicial Maiuscula.
    2º - A relaçãod de campos do esquema (variavel schema)
    3º - Nome da colelection no banco de dados (normalmente, é o mesmo nome do model, 
         mas   pluralizado e com inicial minuscula)
*/
module.exports = mongoose.model('Answer', schema, 'answers')