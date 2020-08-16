var Models = require("../models/index");
var sequelize = Models.sequelize;
/*Insertar un dato en la tabla mesa*/
var insertMesa = function(mesa) {
        return Models.Mesa.create({
            nom_mesa: mesa.nom_mesa
        });
    }
    /*consultar todos los datos de la tabla mesa*/
var findAllMesa = function() {
    return Models.Mesa.findAll({
        order: [
            ['nom_mesa', 'ASC']
        ],
    });
};
/*modificar un dato de la tabla mesa*/
var updateMesa = function(mesa, id_mesa, callback) {
    return Models.Mesa.find({
            where: {
                id_mesa: id_mesa
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        nom_mesa: mesa.nom_mesa,
                    })
                    .then(function(mesaActualizada) {
                        Models.Mesa.findById(mesaActualizada.id_mesa)
                            .then(function(resultadoFinal) {
                                callback(resultadoFinal, null);
                            })
                            .catch(function(err) {
                                callback(null, err);
                            });
                    })
                    .catch(function(err) {
                        callback(null, err);
                    });
            } else {
                callback(null, { "error": "no existe el elemento a actualizar" });
            }
        })
        .catch(function(err) {
            callback(null, err)
        });
};

/*eliminar un dato de la tabla mesa*/
var deleteByIdMesa = function(id_mesa) {
    return Models.Mesa.destroy({
        where: {
            id_mesa: id_mesa
        }
    });
};

/*consulta un dato de la tabla mesa en especifico*/
var findByIdMesa = function(nom_mesa) {
    return Models.Mesa.findAll({
        where: {
            nom_mesa: nom_mesa
        }
    });
};



module.exports.insertMesa = insertMesa;
module.exports.findAllMesa = findAllMesa;
module.exports.updateMesa = updateMesa;
module.exports.deleteByIdMesa = deleteByIdMesa;
module.exports.findByIdMesa = findByIdMesa;