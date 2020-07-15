var LugarMesaDao = require("../../app_core/dao/LugarMesaDao");
var Respuesta = require("../../app_core/helpers/respuesta");

var findAllLugarMesa = function(req, res) {
    LugarMesaDao.findAllLugarMesa().then(function(lugarMesa) {
        Respuesta.sendJsonResponse(res, 200, lugarMesa);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllByIdLugarMesa = function(req, res) {
    LugarMesaDao.findAllByIdLugarMesa(req.params.id_lugar).then(function(lugarMesa) {
        Respuesta.sendJsonResponse(res, 200, lugarMesa);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findByIdLugarMesa = function(req, res) {
    LugarMesaDao.findByIdLugarMesa(req.params.id_lugar, req.params.id_mesa).then(function(lugarMesa) {
        Respuesta.sendJsonResponse(res, 200, lugarMesa);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var updateLugarMesa = function(req, res) {
    var id_lugar_mesa = req.params.id_lugar_mesa;
    var actualizar = {
        id_lugar: req.body.id_lugar,
        id_mesa: req.body.id_mesa,
    };
    LugarMesaDao.updateLugarMesa(actualizar, id_lugar_mesa, function(variable, err) {
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

var deleteByIdLugarMesa = function(req, res) {
    LugarMesaDao.deleteByIdLugarMesa(req.params.id_lugar_mesa).then(function(lugarMesa) {
        Respuesta.sendJsonResponse(res, 200, lugarMesa);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};


var insertLugarMesa = function(req, res) {
    var lugarMesa = {
        id_lugar: req.body.id_lugar,
        id_mesa: req.body.id_mesa,
    };
    LugarMesaDao.insertLugarMesa(lugarMesa).then(function(lugarMesa) {
        Respuesta.sendJsonResponse(res, 200, lugarMesa)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

var deleteById = function(req, res) {
    LugarMesaDao.deleteById(req.params.id_usuario).then(function(coordinador) {
        if (coordinador == 1) {
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

module.exports.deleteByIdLugarMesa = deleteByIdLugarMesa;
module.exports.insertLugarMesa = insertLugarMesa;
module.exports.updateLugarMesa = updateLugarMesa;
module.exports.findByIdLugarMesa = findByIdLugarMesa;
module.exports.findAllByIdLugarMesa = findAllByIdLugarMesa;
module.exports.findAllLugarMesa = findAllLugarMesa;