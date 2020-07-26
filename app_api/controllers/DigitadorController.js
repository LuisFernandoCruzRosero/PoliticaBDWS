var DigitadorDao = require("../../app_core/dao/DigitadorDao");
var Respuesta = require("../../app_core/helpers/respuesta");

var findAllDigitador = function(req, res) {
    DigitadorDao.findAllDigitador().then(function(digitador) {
        Respuesta.sendJsonResponse(res, 200, digitador);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findByIdDigitadorCedula = function(req, res) {
    DigitadorDao.findByIdDigitadorCedula(req.params.ced_digitador).then(function(digitador) {
        Respuesta.sendJsonResponse(res, 200, digitador);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findByIdDigitador = function(req, res) {
    DigitadorDao.findByIdDigitador(req.params.id_digitador).then(function(digitador) {
        Respuesta.sendJsonResponse(res, 200, digitador);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var updateDigitador = function(req, res) {
    var id_digitador = req.params.id_digitador;
    var actualizar = {
        ced_digitador: req.body.ced_digitador,
        nom_digitador: req.body.nom_digitador,
        usu_digiador: req.body.usu_digiador,
        con_digitador: req.body.con_digitador,
        id_comunaL: req.body.id_comunaL,
        id_lugar: req.body.id_lugar,
        id_barrio: req.body.id_barrio,
        id_lider: req.body.id_lider,
        id_usuario: req.body.id_usuario,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
        id_comunaB: req.body.id_comunaB,
        id_mesa: req.body.id_mesa,
        id_tipo_usuario: req.body.id_tipo_usuario,
        activo: req.body.activo,
        tel_digitador: req.body.tel_digitador,
    };
    DigitadorDao.updateDigitador(actualizar, id_digitador, function(variable, err) {
            if (err) {
                Respuesta.sendJsonResponse(res, 500, err);
            }
            if (variable) {
                Respuesta.sendJsonResponse(res, 200, variable);
            }
        })
        .catch(function(err) {
            Respuesta.sendJsonResponse(res, 500, err);
        });

};

var insertDigitador = function(req, res) {
    var digitador = {
        ced_digitador: req.body.ced_digitador,
        nom_digitador: req.body.nom_digitador,
        usu_digiador: req.body.usu_digiador,
        con_digitador: req.body.con_digitador,
        id_comunaL: req.body.id_comunaL,
        id_lugar: req.body.id_lugar,
        id_barrio: req.body.id_barrio,
        id_lider: req.body.id_lider,
        id_usuario: req.body.id_usuario,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
        id_comunaB: req.body.id_comunaB,
        id_mesa: req.body.id_mesa,
        id_tipo_usuario: req.body.id_tipo_usuario,
        activo: req.body.activo,
        tel_digitador: req.body.tel_digitador,
    };
    DigitadorDao.insertDigitador(digitador).then(function(digitador) {
        Respuesta.sendJsonResponse(res, 200, digitador)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

var deleteByIdDigitador = function(req, res) {
    DigitadorDao.deleteByIdDigitador(req.params.id_digitador).then(function(digitador) {
        if (digitador == 1) {
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

module.exports.findAllDigitador = findAllDigitador;
module.exports.findByIdDigitadorCedula = findByIdDigitadorCedula;
module.exports.findByIdDigitador = findByIdDigitador;
module.exports.updateDigitador = updateDigitador;
module.exports.insertDigitador = insertDigitador;
module.exports.deleteByIdDigitador = deleteByIdDigitador;