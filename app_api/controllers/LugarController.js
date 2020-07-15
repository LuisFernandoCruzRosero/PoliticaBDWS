var LugarDao = require("../../app_core/dao/LugarDao");
var Respuesta = require("../../app_core/helpers/respuesta");

var insertLugar = function(req, res) {
    var lugar = {
        nom_lugar: req.body.nom_lugar,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        zona_roja: req.body.zona_roja,
        id_comunaL: req.body.id_comunaL,
    };
    LugarDao.insertLugar(lugar).then(function(lugar) {
        Respuesta.sendJsonResponse(res, 200, lugar)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

var findAllLugar = function(req, res) {
    LugarDao.findAllLugar().then(function(lugar) {
        Respuesta.sendJsonResponse(res, 200, lugar);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var updateLugar = function(req, res) {
    var id_lugar = req.params.id_lugar;
    var actualizar = {
        nom_lugar: req.body.nom_lugar,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        zona_roja: req.body.zona_roja,
        id_comunaL: req.body.id_comunaL,
    };
    LugarDao.updateLugar(actualizar, id_lugar, function(lugar, err) {
            if (err) {
                Respuesta.sendJsonResponse(res, 500, err);
            }
            if (lugar) {
                Respuesta.sendJsonResponse(res, 200, lugar);
            }
        })
        .catch(function(err) {
            Respuesta.sendJsonResponse(res, 500, err);
        });

};

var deleteByIdLugar = function(req, res) {
    LugarDao.deleteByIdLugar(req.params.id_lugar).then(function(lugar) {
        if (lugar == 1) {
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

var findByIdLugar = function(req, res) {
    LugarDao.findByIdLugar(req.params.id_lugar).then(function(lugar) {
        Respuesta.sendJsonResponse(res, 200, lugar);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};

var findAllLugarComuna = function(req, res) {
    LugarDao.findAllLugarComuna(req.params.id_comunaL).then(function(lugar) {
        Respuesta.sendJsonResponse(res, 200, lugar);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

module.exports.insertLugar = insertLugar;
module.exports.findAllLugar = findAllLugar;
module.exports.deleteByIdLugar = deleteByIdLugar;
module.exports.updateLugar = updateLugar;
module.exports.findAllLugarComuna = findAllLugarComuna;
module.exports.findByIdLugar = findByIdLugar;