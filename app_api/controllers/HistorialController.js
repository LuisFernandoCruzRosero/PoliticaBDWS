var HistorialDao = require("../../app_core/dao/HistorialDao");
var Respuesta = require("../../app_core/helpers/respuesta");

var insertHistorial = function(req, res) {
    var historial = {
        fec_historial: req.body.fec_historial,
        id_lugar: req.body.id_lugar,
        total: req.body.total,
    };
    HistorialDao.insertHistorial(historial).then(function(historial) {
        Respuesta.sendJsonResponse(res, 200, historial)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

var findAllHistorial = function(req, res) {
    HistorialDao.findAllHistorial().then(function(historial) {
        Respuesta.sendJsonResponse(res, 200, historial);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllHistorialLugar = function(req, res) {
    HistorialDao.findAllHistorialLugar(req.params.id_lugar).then(function(historial) {
        Respuesta.sendJsonResponse(res, 200, historial);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllHistorialFecha = function(req, res) {
    HistorialDao.findAllHistorialFecha(req.params.fec_historial).then(function(historial) {
        Respuesta.sendJsonResponse(res, 200, historial);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findByIdHistorial = function(req, res) {
    HistorialDao.findByIdHistorial(req.params.id_historial).then(function(historial) {
        Respuesta.sendJsonResponse(res, 200, historial);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

module.exports.insertHistorial = insertHistorial;
module.exports.findAllHistorial = findAllHistorial;
module.exports.findAllHistorialLugar = findAllHistorialLugar;
module.exports.findAllHistorialFecha = findAllHistorialFecha;
module.exports.findByIdHistorial = findByIdHistorial;