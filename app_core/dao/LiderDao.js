var Models = require("../models/index");
var sequelize = Models.sequelize;

var findAllLider = function() {
    return Models.Lider.findAll({
        order: [
            ['nom_lider', 'ASC']
        ],
    });
};

var findAllLiderCedula = function(ced_lider) {
    return Models.Lider.findAll({
        where: {
            ced_lider: ced_lider
        }
    });
};

var findAllLiderLugar = function(id_lugar) {
    return Models.Lider.findAll({
        where: {
            id_lugar: id_lugar
        },
        order: [
            ['nom_lider', 'ASC']
        ],
    });
};

var findAllLiderBarrio = function(id_barrio) {
    return Models.Lider.findAll({
        where: {
            id_barrio: id_barrio
        },
        order: [
            ['nom_lider', 'ASC']
        ],
    });
};

var findAllLiderComunaLugar = function(id_comunaL) {
    return Models.Lider.findAll({
        where: {
            id_comunaL: id_comunaL
        },
        order: [
            ['nom_lider', 'ASC']
        ],
    });
};

var findAllLiderComunaBarrio = function(id_comunaB) {
    return Models.Lider.findAll({
        where: {
            id_comunaB: id_comunaB
        },
        order: [
            ['nom_lider', 'ASC']
        ],
    });
};

var findAllLiderUsuario = function(id_usuario) {
    return Models.Lider.findAll({
        where: {
            id_usuario: id_usuario
        },
        order: [
            ['nom_lider', 'ASC']
        ],
    });
};

var findByIdLider = function(id_lider) {
    return Models.Lider.findAll({
        where: {
            id_lider: id_lider
        }
    });
};

var updateLider = function(lider, id_lider, callback) {
    return Models.Lider.find({
            where: {
                id_lider: id_lider
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        ced_lider: lider.ced_lider,
                        id_lugar: lider.id_lugar,
                        id_mesa: lider.id_mesa,
                        id_barrio: lider.id_barrio,
                        nom_lider: lider.nom_lider,
                        id_usuario: lider.id_usuario,
                        tel_lider: lider.tel_lider,
                        id_comunaL: lider.id_comunaL,
                        id_comunaB: lider.id_comunaB,
                        activo: lider.activo,
                        municipio: lider.municipio,
                        departamento: lider.departamento,
                    })
                    .then(function(liderActualizada) {
                        Models.Lider.findById(liderActualizada.id_lider)
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

var insertLider = function(lider) {
    return Models.Lider.create({
        ced_lider: lider.ced_lider,
        id_lugar: lider.id_lugar,
        id_mesa: lider.id_mesa,
        id_barrio: lider.id_barrio,
        nom_lider: lider.nom_lider,
        id_usuario: lider.id_usuario,
        tel_lider: lider.tel_lider,
        id_comunaL: lider.id_comunaL,
        id_comunaB: lider.id_comunaB,
        activo: lider.activo,
        municipio: lider.municipio,
        departamento: lider.departamento,
    });
}

var deleteByIdLider = function(id_lider) {
    return Models.Lider.destroy({
        where: {
            id_lider: id_lider
        }
    });
};

/* Consulta el numero total de datos de la tabla lider */
var findByIdTotalLider = function() {
    return Models.Lider.count({
        col: 'id_lider'
    })
}

module.exports.findAllLider = findAllLider;
module.exports.updateLider = updateLider;
module.exports.findByIdLider = findByIdLider;
module.exports.insertLider = insertLider;
module.exports.deleteByIdLider = deleteByIdLider;
module.exports.findAllLiderComunaBarrio = findAllLiderComunaBarrio;
module.exports.findAllLiderComunaLugar = findAllLiderComunaLugar;
module.exports.findAllLiderUsuario = findAllLiderUsuario;
module.exports.findAllLiderLugar = findAllLiderLugar;
module.exports.findAllLiderBarrio = findAllLiderBarrio;
module.exports.findAllLiderCedula = findAllLiderCedula;
module.exports.findByIdTotalLider = findByIdTotalLider;