var Models = require("../models/index");
var sequelize = Models.sequelize;

var findAllBarrio = function() {
    return Models.Barrio.findAll({
        order: [
            ['nom_bar', 'ASC']
        ],
    });
};

var findAllBarrioComuna = function(id_comuna) {
    return Models.Barrio.findAll({
        where: {
            id_comuna: id_comuna
        },
        order: [
            ['nom_sec', 'ASC']
        ],
    });
};

var findById = function(id_barrio) {
    return Models.Barrio.find({
        where: {
            id_barrio: id_barrio
        }
    });
};

var updateBarrio = function(barrio, id_barrio, callback) {
    return Models.Barrio.find({
            where: {
                id_barrio: id_barrio
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        nom_bar: barrio.nom_bar,
                        id_comuna: barrio.id_comuna,
                    })
                    .then(function(usuarioActualizada) {
                        Models.Barrio.findById(usuarioActualizada.id_barrio)
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
}

var crear = function(barrio) {
    return Models.Barrio.create({
        nom_bar: barrio.nom_bar,
        id_comuna: barrio.id_comuna,
    });
}

var deleteById = function(id_barrio) {
    return Models.Barrio.destroy({
        where: {
            id_barrio: id_barrio
        }
    });
};

module.exports.findAllBarrio = findAllBarrio;
module.exports.findAllBarrioComuna = findAllBarrioComuna;
module.exports.updateBarrio = updateBarrio;
module.exports.deleteById = deleteById;
module.exports.findById = findById;
module.exports.crear = crear;