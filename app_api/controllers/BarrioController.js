var BarrioDao = require("../../app_core/dao/BarrioDao");
var Respuesta = require("../../app_core/helpers/respuesta");

var findAllBarrio = function(req, res) {
    BarrioDao.findAllBarrio().then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var updateBarrio = function(req, res) {
    var id_barrio = req.params.id_barrio;
    var actualizar = {
        nom_bar: req.body.nom_bar,
        id_comuna: req.body.id_comuna,
    };
    BarrioDao.updateBarrio(actualizar, id_barrio, function(variable, err) {
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

}

var findById = function(req, res) {
    BarrioDao.findById(req.params.id_barrio).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};


var crear = function(req, res) {
    var barrio = {
        nom_bar: req.body.nom_bar,
        id_comuna: req.body.id_comuna
    };
    BarrioDao.crear(barrio).then(function(barrio) {
        Respuesta.sendJsonResponse(res, 200, barrio)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

var deleteById = function(req, res) {
    BarrioDao.deleteById(req.params.id_barrio).then(function(barrio) {
        if (barrio == 1) {
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

var findAllBarrioComuna = function(req, res) {
    BarrioDao.findAllBarrioComuna(req.params.id_comuna).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};


module.exports.findAllBarrio = findAllBarrio;
module.exports.updateBarrio = updateBarrio;
module.exports.findById = findById;
module.exports.crear = crear;
module.exports.deleteById = deleteById;
module.exports.findAllBarrioComuna = findAllBarrioComuna;