var AgendaDao = require("../../app_core/dao/AgendaDao");
var Respuesta = require("../../app_core/helpers/respuesta");

var insertAgenda = function(req, res) {
    var agenda = {
        fecha: req.body.fecha,
        nom_usu: req.body.nom_usu,
        lugar: req.body.lugar,
        descripcion: req.body.descripcion,
        id_usuario: req.body.id_usuario,
    };
    AgendaDao.insertAgenda(agenda).then(function(agenda) {
        Respuesta.sendJsonResponse(res, 200, agenda)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

var findAllAgenda = function(req, res) {
    AgendaDao.findAllAgenda().then(function(agenda) {
        Respuesta.sendJsonResponse(res, 200, agenda);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var deleteByIdAgenda = function(req, res) {
    AgendaDao.deleteByIdAgenda(req.params.id_agenda).then(function(agenda) {
        if (agenda == 1) {
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

var updateAgenda = function(req, res) {
    var id_agenda = req.params.id_agenda;
    var actualizar = {
        fecha: req.body.fecha,
        lugar: req.body.lugar,
        hora: req.body.hora,
        descripcion: req.body.descripcion,
        id_usuario: req.body.id_usuario,
    };
    AgendaDao.updateAgenda(actualizar, id_agenda, function(variable, err) {
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

var findAllAgendaUsuario = function(req, res) {
    AgendaDao.findAllAgendaUsuario(req.params.id_usuario).then(function(agenda) {
        Respuesta.sendJsonResponse(res, 200, agenda);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findByIdAgenda = function(req, res) {
    AgendaDao.findByIdAgenda(req.params.id_agenda).then(function(agenda) {
        Respuesta.sendJsonResponse(res, 200, agenda);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllAgendaFecha = function(req, res) {
    AgendaDao.findAllAgendaFecha(req.params.fecha).then(function(agenda) {
        Respuesta.sendJsonResponse(res, 200, agenda);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

module.exports.insertAgenda = insertAgenda;
module.exports.findAllAgenda = findAllAgenda;
module.exports.deleteByIdAgenda = deleteByIdAgenda;
module.exports.updateAgenda = updateAgenda;
module.exports.findByIdAgenda = findByIdAgenda;
module.exports.findAllAgendaFecha = findAllAgendaFecha;
module.exports.findAllAgendaUsuario = findAllAgendaUsuario;