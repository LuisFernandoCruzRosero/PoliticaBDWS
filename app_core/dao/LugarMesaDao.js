var Models = require("../models/index");
var sequelize = Models.sequelize;

var findAllLugarMesa = function() {
    return Models.LugarMesa.findAll({});
};

var findAllByIdLugarMesa = function(id_lugar) {
    return Models.LugarMesa.findAll({
        where: {
            id_lugar: id_lugar
        },
        order: [
            ['id_mesa', 'ASC']
        ],
    });
};

var findByIdLugarMesa = function(id_lugar, id_mesa) {
    return Models.LugarMesa.findAll({
        where: {
            id_lugar: id_lugar,
            id_mesa: id_mesa
        }
    });
};

var updateLugarMesa = function(lugarMesa, id_lugar_mesa, callback) {
    return Models.LugarMesa.find({
            where: {
                id_lugar_mesa: id_lugar_mesa
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        id_lugar: lugarMesa.id_lugar,
                        id_mesa: lugarMesa.id_mesa,
                    })
                    .then(function(lugarMesaActualizada) {
                        Models.LugarMesa.findById(lugarMesaActualizada.id_lugar_mesa)
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

var insertLugarMesa = function(lugarMesa) {
    return Models.LugarMesa.create({
        id_lugar: lugarMesa.id_lugar,
        id_mesa: lugarMesa.id_mesa,
    });
}

var deleteByIdLugarMesa = function(id_lugar_mesa) {
    return Models.LugarMesa.destroy({
        where: {
            id_lugar_mesa: id_lugar_mesa
        }
    });
};

module.exports.deleteByIdLugarMesa = deleteByIdLugarMesa;
module.exports.insertLugarMesa = insertLugarMesa;
module.exports.updateLugarMesa = updateLugarMesa;
module.exports.findByIdLugarMesa = findByIdLugarMesa;
module.exports.findAllByIdLugarMesa = findAllByIdLugarMesa;
module.exports.findAllLugarMesa = findAllLugarMesa;