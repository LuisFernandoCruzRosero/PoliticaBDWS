var Models = require("../models/index");
var sequelize = Models.sequelize;

var findAllPerfilProfesional = function() {
    return Models.PerfilProfesional.findAll({
        order: [
            ['nom_per_pro', 'ASC']
        ],
    });
};


var findById = function(id_perfil_profesional) {
    return Models.PerfilProfesional.find({
        where: {
            id_perfil_profesional: id_perfil_profesional
        }
    });
};

var updatePerfilProfesional = function(perfilProfesional, id_perfil_profesional, callback) {
    return Models.PerfilProfesional.find({
            where: {
                id_perfil_profesional: id_perfil_profesional
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        nom_per_pro: perfilProfesional.nom_per_pro,
                    })
                    .then(function(usuarioActualizada) {
                        Models.PerfilProfesional.findById(usuarioActualizada.id_perfil_profesional)
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

var crear = function(perfilProfesional) {
    return Models.PerfilProfesional.create({
        nom_per_pro: perfilProfesional.nom_per_pro,
    });
}

var deleteById = function(id_perfil_profesional) {
    return Models.PerfilProfesional.destroy({
        where: {
            id_perfil_profesional: id_perfil_profesional
        }
    });
};

module.exports.findAllPerfilProfesional = findAllPerfilProfesional;
module.exports.updatePerfilProfesional = updatePerfilProfesional;
module.exports.deleteById = deleteById;
module.exports.findById = findById;
module.exports.crear = crear;