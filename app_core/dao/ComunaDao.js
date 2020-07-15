var Models = require("../models/index");
var sequelize = Models.sequelize;

var insertComuna = function(comuna) {
    return Models.Comuna.create({
        nom_comuna: comuna.nom_comuna
    });
}

var findAllComuna = function() {
    return Models.Comuna.findAll({});
};

var updateComuna = function(comuna, id_comuna, callback) {
    return Models.Comuna.find({
            where: {
                id_comuna: id_comuna
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        nom_comuna: comuna.nom_comuna,
                    })
                    .then(function(comunaActualizada) {
                        Models.Comuna.findById(comunaActualizada.id_comuna)
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

var deleteByIdComuna = function(id_comuna) {
    return Models.Comuna.destroy({
        where: {
            id_comuna: id_comuna
        }
    });
};

var findByIdComuna = function(id_comuna) {
    return Models.Comuna.find({
        where: {
            id_comuna: id_comuna
        }
    });
};

module.exports.insertComuna = insertComuna;
module.exports.findAllComuna = findAllComuna;
module.exports.updateComuna = updateComuna;
module.exports.deleteByIdComuna = deleteByIdComuna;
module.exports.findByIdComuna = findByIdComuna;