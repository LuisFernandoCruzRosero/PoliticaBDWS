var Models = require("../models/index");
var sequelize = Models.sequelize;

var findAllCoordinador = function() {
    return Models.Coordinador.findAll({
        order: [
            ['nom_coo', 'ASC']
        ],
    });
};

var findAllCoordinadorCedula = function(ced_coo) {
    return Models.Coordinador.findAll({
        where: {
            ced_coo: ced_coo
        }
    });
};

var findAllCoordinadorSector = function(id_sector) {
    return Models.Coordinador.findAll({
        where: {
            id_sector: id_sector
        },
        order: [
            ['nom_coo', 'ASC']
        ],
    });
};

var findAllCoordinadorComuna = function(id_comuna) {
    return Models.Coordinador.findAll({
        where: {
            id_comuna: id_comuna
        },
        order: [
            ['nom_coo', 'ASC']
        ],
    });
};

var findAllCoordinadorById = function(id_coordinador) {
    return Models.Coordinador.findAll({
        where: {
            id_coordinador: id_coordinador
        },
        order: [
            ['nom_coo', 'ASC']
        ],
    });
};

var findAllCoordinadorOcupacion = function(ocupacion) {
    return Models.Coordinador.findAll({
        where: {
            ocupacion: ocupacion
        },
        order: [
            ['nom_coo', 'ASC']
        ],
    });
};


var findById = function(id_coordinador) {
    return Models.Coordinador.find({
        where: {
            id_coordinador: id_coordinador
        }
    });
};

var updateCoordinador = function(coordinador, id_coordinador, callback) {
    return Models.Coordinador.find({
            where: {
                id_coordinador: id_coordinador
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        ced_coo: coordinador.ced_coo,
                        nom_coo: coordinador.nom_coo,
                        bar_coo: coordinador.bar_coo,
                        tel_coo: coordinador.tel_coo,
                        activo: coordinador.activo,
                        contrasena: coordinador.contrasena,
                        ocupacion: coordinador.ocupacion,
                        user_usu: coordinador.user_usu,
                        id_comuna: coordinador.id_comuna,
                        id_sector: coordinador.id_sector,
                        mesa: coordinador.mesa,
                        municipio: coordinador.municipio,
                        departamento: coordinador.departamento,
                        puesto: coordinador.puesto,

                    })
                    .then(function(usuarioActualizada) {
                        Models.Coordinador.findById(usuarioActualizada.id_coordinador)
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

var crear = function(coordinador) {
    return Models.Coordinador.create({
        ced_coo: coordinador.ced_coo,
        nom_coo: coordinador.nom_coo,
        bar_coo: coordinador.bar_coo,
        tel_coo: coordinador.tel_coo,
        activo: coordinador.activo,
        contrasena: coordinador.contrasena,
        ocupacion: coordinador.ocupacion,
        user_usu: coordinador.user_usu,
        id_comuna: coordinador.id_comuna,
        id_sector: coordinador.id_sector,
        mesa: coordinador.mesa,
        municipio: coordinador.municipio,
        departamento: coordinador.departamento,
        puesto: coordinador.puesto,
    });
}

var deleteById = function(id_coordinador) {
    return Models.Coordinador.destroy({
        where: {
            id_coordinador: id_coordinador
        }
    });
};

module.exports.findAllCoordinador = findAllCoordinador;
module.exports.updateCoordinador = updateCoordinador;
module.exports.findById = findById;
module.exports.crear = crear;
module.exports.deleteById = deleteById;
module.exports.findAllCoordinadorSector = findAllCoordinadorSector;
module.exports.findAllCoordinadorComuna = findAllCoordinadorComuna;
module.exports.findAllCoordinadorById = findAllCoordinadorById;
module.exports.findAllCoordinadorOcupacion = findAllCoordinadorOcupacion;
module.exports.findAllCoordinadorCedula = findAllCoordinadorCedula;