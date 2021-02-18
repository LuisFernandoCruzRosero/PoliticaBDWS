var Models = require("../models/index");
var sequelize = Models.sequelize;

/*consulta los datos de la tabla Digitador y los ordena por nombre */
var findAllDigitador = function() {
    return Models.Digitador.findAll({
        order: [
            ['nom_digitador', 'ASC']
        ],
    });
};

/* consulta los datos de la tabla Digitador por barrio y los ordena por nombre */
var findAllDigitadorBarrio = function(id_barrio) {
    return Models.Digitador.findAll({
        where: {
            id_barrio: id_barrio
        },
        order: [
            ['nom_digitador', 'ASC']
        ],
    });
};

/* consulta los datos de la tabla Digitador por lugar y los ordena por nombre */
var findAllDigitadorLugar = function(id_lugar) {
    return Models.Digitador.findAll({
        where: {
            id_lugar: id_lugar
        },
        order: [
            ['nom_digitador', 'ASC']
        ],
    });
};

/* consulta los datos de la tabla Digitador por lider y los ordena por nombre */
var findAllDigitadorLider = function(id_lider) {
    return Models.Digitador.findAll({
        where: {
            id_lider: id_lider
        },
        order: [
            ['nom_digitador', 'ASC']
        ],
    });
};

/* consulta los datos de la tabla Digitador por lider y los ordena por nombre */
var findAllDigitadorCoordinador = function(id_usuario) {
    return Models.Digitador.findAll({
        where: {
            id_usuario: id_usuario
        },
        order: [
            ['nom_digitador', 'ASC']
        ],
    });
};

/*consulta los datos de la tabla Digitador filtrado por cedula */
var findByIdDigitadorCedula = function(ced_digitador) {
    return Models.Digitador.findAll({
        where: {
            ced_digitador: ced_digitador
        }
    });
};

/*consulta un dato de la tabla Digitador por id_digitador */
var findByIdDigitador = function(id_digitador) {
    return Models.Digitador.findAll({
        where: {
            id_digitador: id_digitador
        }
    });
};

/*modificar un dato de la tabla Digitador */
var updateDigitador = function(digitador, id_digitador, callback) {
    return Models.Digitador.find({
            where: {
                id_digitador: id_digitador
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        ced_digitador: digitador.ced_digitador,
                        nom_digitador: digitador.nom_digitador,
                        usu_digiador: digitador.usu_digiador,
                        con_digitador: digitador.con_digitador,
                        id_comunaL: digitador.id_comunaL,
                        id_lugar: digitador.id_lugar,
                        id_barrio: digitador.id_barrio,
                        id_lider: digitador.id_lider,
                        id_usuario: digitador.id_usuario,
                        municipio: digitador.municipio,
                        departamento: digitador.departamento,
                        id_comunaB: digitador.id_comunaB,
                        id_mesa: digitador.id_mesa,
                        id_tipo_usuario: digitador.id_tipo_usuario,
                        activo: digitador.activo,
                        tel_digitador: digitador.tel_digitador,
                    })
                    .then(function(digitadorActualizada) {
                        Models.Digitador.findById(digitadorActualizada.id_digitador)
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

/*Insertar un dato en la tabla Digitador */
var insertDigitador = function(digitador) {
        return Models.Digitador.create({
            ced_digitador: digitador.ced_digitador,
            nom_digitador: digitador.nom_digitador,
            usu_digiador: digitador.usu_digiador,
            con_digitador: digitador.con_digitador,
            id_comunaL: digitador.id_comunaL,
            id_lugar: digitador.id_lugar,
            id_barrio: digitador.id_barrio,
            id_lider: digitador.id_lider,
            id_usuario: digitador.id_usuario,
            municipio: digitador.municipio,
            departamento: digitador.departamento,
            id_comunaB: digitador.id_comunaB,
            id_mesa: digitador.id_mesa,
            id_tipo_usuario: digitador.id_tipo_usuario,
            activo: digitador.activo,
            tel_digitador: digitador.tel_digitador,
        });
    }
    /*eliminar un dato en la tabla usuario*/
var deleteByIdDigitador = function(id_digitador) {
    return Models.Digitador.destroy({
        where: {
            id_digitador: id_digitador
        }
    });
};

/* Consulta el numero total de datos de la tabla digitador */
var findByIdTotalDigitador = function() {
    return Models.Digitador.count({
        col: 'id_digitador'
    })
}

module.exports.findAllDigitador = findAllDigitador;
module.exports.findByIdDigitadorCedula = findByIdDigitadorCedula;
module.exports.findByIdDigitador = findByIdDigitador;
module.exports.updateDigitador = updateDigitador;
module.exports.insertDigitador = insertDigitador;
module.exports.deleteByIdDigitador = deleteByIdDigitador;
module.exports.findByIdTotalDigitador = findByIdTotalDigitador;
module.exports.findAllDigitadorBarrio = findAllDigitadorBarrio;
module.exports.findAllDigitadorLugar = findAllDigitadorLugar;
module.exports.findAllDigitadorLider = findAllDigitadorLider;
module.exports.findAllDigitadorCoordinador = findAllDigitadorCoordinador;