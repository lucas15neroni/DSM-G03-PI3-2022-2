const User = require('../models/User')

const controller = {} //Objeto vazio

/*  
    Métodos de CRUD do controller

    create: cria um novo usuario	
    retrieve: retorna todos os usuarios cadsatrados
    retrieceOne: retorna um  unico usuario especifico
    update: atualiza um usuario
    delete: remove um usuario

*/

controller.create = async (req, res) => {
    try {
        await User.create(req.body)
        //HTTP 201: Created
        res.status(201).end()

    }
    catch (error) {
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).send(error)
    }

}

module.exports = controller