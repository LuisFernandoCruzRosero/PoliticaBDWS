var BarrioDao = require("../../app_core/dao/BarrioDao");
var Respuesta = require("../../app_core/helpers/respuesta");

var insertBarrio = function(req, res) {
    var barrio = {
        nom_barrio: req.body.nom_barrio,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        zona_roja: req.body.zona_roja,
        id_comunaB: req.body.id_comunaB,
    };
    BarrioDao.insertBarrio(barrio).then(function(barrio) {
        Respuesta.sendJsonResponse(res, 200, barrio)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

var findAllBarrio = function(req, res) {
    BarrioDao.findAllBarrio().then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var updateBarrio = function(req, res) {
    var id_barrio = req.params.id_barrio;
    var actualizarBarrio = {
        nom_barrio: req.body.nom_barrio,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        zona_roja: req.body.zona_roja,
        id_comunaB: req.body.id_comunaB,
    };
    BarrioDao.updateBarrio(actualizarBarrio, id_barrio, function(barrio, err) {
            if (err) {
                Respuesta.sendJsonResponse(res, 500, err);
            }
            if (barrio) {
                Respuesta.sendJsonResponse(res, 200, barrio);
            }
        })
        .catch(function(err) {
            Respuesta.sendJsonResponse(res, 500, err);
        });

};

var deleteByIdBarrio = function(req, res) {
    BarrioDao.deleteByIdBarrio(req.params.id_barrio).then(function(barrio) {
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
    BarrioDao.findAllBarrioComuna(req.params.id_comunaB).then(function(barrio) {
        Respuesta.sendJsonResponse(res, 200, barrio);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findByIdBarrio = function(req, res) {
    BarrioDao.findByIdBarrio(req.params.id_barrio).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};

module.exports.insertBarrio = insertBarrio;
module.exports.findAllBarrio = findAllBarrio;
module.exports.updateBarrio = updateBarrio;
module.exports.deleteByIdBarrio = deleteByIdBarrio;
module.exports.findAllBarrioComuna = findAllBarrioComuna;
module.exports.findByIdBarrio = findByIdBarrio;