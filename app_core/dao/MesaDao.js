var Models = require("../models/index");
var sequelize = Models.sequelize;

var insertMesa = function(mesa) {
    return Models.Mesa.create({
        nom_mesa: mesa.nom_mesa
    });
}

var findAllMesa = function() {
    return Models.Mesa.findAll({});
};

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


var deleteByIdMesa = function(id_mesa) {
    return Models.Mesa.destroy({
        where: {
            id_mesa: id_mesa
        }
    });
};

var findByIdMesa = function(id_mesa) {
    return Models.Mesa.find({
        where: {
            id_mesa: id_mesa
        }
    });
};



module.exports.insertMesa = insertMesa;
module.exports.findAllMesa = findAllMesa;
module.exports.updateMesa = updateMesa;
module.exports.deleteByIdMesa = deleteByIdMesa;
module.exports.findByIdMesa = findByIdMesa;