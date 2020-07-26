var Models = require("../models/index");
var sequelize = Models.sequelize;

var findAllVotante = function() {
    return Models.Votante.findAll({
        order: [
            ['nom_votante', 'ASC']
        ],
    });
};

var findByIVotanteCedula = function(ced_votante) {
    return Models.Votante.find({
        where: {
            ced_votante: ced_votante
        }
    });
};

var findByIdVotante = function(id_votante) {
    return Models.Votante.find({
        where: {
            id_votante: id_votante
        },
    });
};

var findAllVotanteLugar = function(id_lugar) {
    return Models.Votante.findAll({
        where: {
            id_lugar: id_lugar
        },
        order: [
            ['nom_votante', 'ASC']
        ],
    });
};

var findAllVotanteBarrio = function(id_barrio) {
    return Models.Votante.findAll({
        where: {
            id_barrio: id_barrio
        },
        order: [
            ['nom_votante', 'ASC']
        ],
    });
};

var findAllVotanteComunaBarrio = function(id_comunaB) {
    return Models.Votante.findAll({
        where: {
            id_comunaB: id_comunaB
        },
        order: [
            ['nom_votante', 'ASC']
        ],
    });
};

var findAllVotanteComunaLugar = function(id_comunaL) {
    return Models.Votante.findAll({
        where: {
            id_comunaL: id_comunaL
        },
        order: [
            ['nom_votante', 'ASC']
        ],
    });
};

var findAllVotanteLider = function(id_lider) {
    return Models.Votante.findAll({
        where: {
            id_lider: id_lider
        },
        order: [
            ['nom_votante', 'ASC']
        ],
    });
};

var findAllVotanteUsuario = function(id_usuario) {
    return Models.Votante.findAll({
        where: {
            id_usuario: id_usuario
        },
        order: [
            ['nom_votante', 'ASC']
        ],
    });
};

var updateVotante = function(votante, id_votante, callback) {
    return Models.Votante.find({
            where: {
                id_votante: id_votante
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        ced_votante: votante.ced_votante,
                        id_lider: votante.id_lider,
                        nom_votante: votante.nom_votante,
                        nom_votante: votante.nom_votante,
                        id_mesa: votante.id_mesa,
                        id_usuario: votante.id_usuario,
                        id_barrio: votante.id_barrio,
                        tel_votante: votante.tel_votante,
                        id_comunaB: votante.id_comunaB,
                        id_comunaL: votante.id_comunaL,
                        activo: votante.activo,
                        municipio: votante.municipio,
                        departamento: votante.departamento,
                    })
                    .then(function(votanteActualizada) {
                        Models.Votante.findById(votanteActualizada.id_votante)
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

var insertVotante = function(votante) {
    return Models.Votante.create({
        ced_votante: votante.ced_votante,
        id_lider: votante.id_lider,
        nom_votante: votante.nom_votante,
        id_mesa: votante.id_mesa,
        id_usuario: votante.id_usuario,
        id_barrio: votante.id_barrio,
        tel_votante: votante.tel_votante,
        id_comunaB: votante.id_comunaB,
        id_comunaL: votante.id_comunaL,
        activo: votante.activo,
        municipio: votante.municipio,
        departamento: votante.departamento,
    });
}

var deleteByIdVotante = function(id_votante) {
    return Models.Votante.destroy({
        where: {
            id_votante: id_votante
        }
    });
};

module.exports.findAllVotante = findAllVotante;
module.exports.updateVotante = updateVotante;
module.exports.findByIdVotante = findByIdVotante;
module.exports.insertVotante = insertVotante;
module.exports.deleteByIdVotante = deleteByIdVotante;
module.exports.findAllVotanteComunaBarrio = findAllVotanteComunaBarrio;
module.exports.findAllVotanteComunaLugar = findAllVotanteComunaLugar;
module.exports.findAllVotanteBarrio = findAllVotanteBarrio;
module.exports.findAllVotanteLugar = findAllVotanteLugar;
module.exports.findAllVotanteLider = findAllVotanteLider;
module.exports.findAllVotanteUsuario = findAllVotanteUsuario;
module.exports.findByIVotanteCedula = findByIVotanteCedula;