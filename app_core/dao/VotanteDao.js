var Models = require("../models/index");
var sequelize = Models.sequelize;

var findAllVotante = function() {
    return Models.Votante.findAll({
        order: [
            ['nom_vot', 'ASC']
        ],
    });
};

var findAllVotanteCedula = function(ced_vot) {
    return Models.Votante.findAll({
        where: {
            ced_vot: ced_vot
        }
    });
};

var findAllVotanteById = function(id_votante) {
    return Models.Votante.findAll({
        where: {
            id_votante: id_votante
        },
    });
};

var findAllVotanteOcupacion = function(ocupacion) {
    return Models.Votante.findAll({
        where: {
            ocupacion: ocupacion
        },
        order: [
            ['nom_vot', 'ASC']
        ],
    });
};

var findAllVotanteSector = function(id_sector) {
    return Models.Votante.findAll({
        where: {
            id_sector: id_sector
        },
        order: [
            ['nom_vot', 'ASC']
        ],
    });
};

var findAllVotanteComuna = function(id_comuna) {
    return Models.Votante.findAll({
        where: {
            id_comuna: id_comuna
        },
        order: [
            ['nom_vot', 'ASC']
        ],
    });
};

var findAllVotanteLider = function(id_lider) {
    return Models.Votante.findAll({
        where: {
            id_lider: id_lider
        },
        order: [
            ['nom_vot', 'ASC']
        ],
    });
};

var findAllVotanteCoordinador = function(id_coordinador) {
    return Models.Votante.findAll({
        where: {
            id_coordinador: id_coordinador
        },
        order: [
            ['nom_vot', 'ASC']
        ],
    });
};

var findById = function(id_votante) {
    return Models.Votante.find({
        where: {
            id_votante: id_votante
        }
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
                        ced_vot: votante.ced_vot,
                        nom_vot: votante.nom_vot,
                        bar_vot: votante.bar_vot,
                        tel_vot: votante.tel_vot,
                        ocupacion: votante.ocupacion,
                        id_comuna: votante.id_comuna,
                        id_sector: votante.id_sector,
                        id_coordinador: votante.id_coordinador,
                        id_lider: votante.id_lider,
                        mesa: votante.mesa,
                        municipio: votante.municipio,
                        departamento: votante.departamento,
                        puesto: votante.puesto,
                    })
                    .then(function(usuarioActualizada) {
                        Models.Votante.findById(usuarioActualizada.id_votante)
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

var crear = function(votante) {
    return Models.Votante.create({
        ced_vot: votante.ced_vot,
        nom_vot: votante.nom_vot,
        bar_vot: votante.bar_vot,
        tel_vot: votante.tel_vot,
        ocupacion: votante.ocupacion,
        id_comuna: votante.id_comuna,
        id_sector: votante.id_sector,
        id_coordinador: votante.id_coordinador,
        id_lider: votante.id_lider,
        mesa: votante.mesa,
        municipio: votante.municipio,
        departamento: votante.departamento,
        puesto: votante.puesto,
    });
}

var deleteById = function(id_votante) {
    return Models.Votante.destroy({
        where: {
            id_votante: id_votante
        }
    });
};

module.exports.findAllVotante = findAllVotante;
module.exports.updateVotante = updateVotante;
module.exports.findById = findById;
module.exports.crear = crear;
module.exports.deleteById = deleteById;
module.exports.findAllVotanteComuna = findAllVotanteComuna;
module.exports.findAllVotanteSector = findAllVotanteSector;
module.exports.findAllVotanteLider = findAllVotanteLider;
module.exports.findAllVotanteCoordinador = findAllVotanteCoordinador;
module.exports.findAllVotanteById = findAllVotanteById;
module.exports.findAllVotanteOcupacion = findAllVotanteOcupacion
module.exports.findAllVotanteCedula = findAllVotanteCedula;