var MesaDao = require("../../app_core/dao/MesaDao");
var Respuesta = require("../../app_core/helpers/respuesta");

var insertMesa = function(req, res) {
    var mesa = {
        nom_mesa: req.body.nom_mesa
    };
    MesaDao.insertMesa(mesa).then(function(mesa) {
        Respuesta.sendJsonResponse(res, 200, mesa)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

var findAllMesa = function(req, res) {
    MesaDao.findAllMesa().then(function(mesa) {
        Respuesta.sendJsonResponse(res, 200, mesa);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var updateMesa = function(req, res) {
    var id_mesa = req.params.id_mesa;
    var actualizarMesa = {
        nom_mesa: req.body.nom_mesa,
    };
    MesaDao.updateMesa(actualizarMesa, id_mesa, function(mesa, err) {
            if (err) {
                Respuesta.sendJsonResponse(res, 500, err);
            }
            if (mesa) {
                Respuesta.sendJsonResponse(res, 200, mesa);
            }
        })
        .catch(function(err) {
            Respuesta.sendJsonResponse(res, 500, err);
        });

};

var deleteByIdMesa = function(req, res) {
    MesaDao.deleteByIdMesa(req.params.id_mesa).then(function(mesa) {
        if (mesa == 1) {
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

var findByIdMesa = function(req, res) {
    MesaDao.findByIdMesa(req.params.id_mesa).then(function(mesa) {
        Respuesta.sendJsonResponse(res, 200, mesa);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};


module.exports.insertMesa = insertMesa;
module.exports.findAllMesa = findAllMesa;
module.exports.updateMesa = updateMesa;
module.exports.deleteByIdMesa = deleteByIdMesa;
module.exports.findByIdMesa = findByIdMesa;