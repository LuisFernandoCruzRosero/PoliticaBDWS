var RegistraduriaDao = require("../../app_core/dao/RegistraduriaDao");
var Respuesta = require("../../app_core/helpers/respuesta");

var insertRegistraduria = function(req, res) {
    var registraduria = {
        ced_registraduria: req.body.ced_registraduria,
        nom_registraduria: req.body.nom_registraduria,
        id_lugar: req.body.id_lugar,
        id_mesa: req.body.id_mesa,
        dep_registraduria: req.body.dep_registraduria,
        mun_registraduria: req.body.mun_registraduria,
    };
    RegistraduriaDao.insertRegistraduria(registraduria).then(function(registraduria) {
        Respuesta.sendJsonResponse(res, 200, registraduria)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

var findAllRegistraduria = function(req, res) {
    RegistraduriaDao.findAllRegistraduria().then(function(registraduria) {
        Respuesta.sendJsonResponse(res, 200, registraduria);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var deleteByIdRegistraduria = function(req, res) {
    RegistraduriaDao.deleteByIdRegistraduria(req.params.id_registraduria).then(function(registraduria) {
        if (registraduria == 1) {
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

var findByIdRegistraduriaCedula = function(req, res) {
    RegistraduriaDao.findByIdRegistraduriaCedula(req.params.ced_registraduria).then(function(registraduria) {
        Respuesta.sendJsonResponse(res, 200, registraduria);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findByIdRegistraduria = function(req, res) {
    RegistraduriaDao.findByIdRegistraduria(req.params.id_registraduria).then(function(registraduria) {
        Respuesta.sendJsonResponse(res, 200, registraduria);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

module.exports.insertRegistraduria = insertRegistraduria;
module.exports.findAllRegistraduria = findAllRegistraduria;
module.exports.deleteByIdRegistraduria = deleteByIdRegistraduria;
module.exports.findByIdRegistraduriaCedula = findByIdRegistraduriaCedula;
module.exports.findByIdRegistraduria = findByIdRegistraduria;