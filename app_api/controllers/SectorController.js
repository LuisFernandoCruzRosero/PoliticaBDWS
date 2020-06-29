var SectorDao = require("../../app_core/dao/SectorDao");
var Respuesta = require("../../app_core/helpers/respuesta");


var findAllSector = function(req, res) {
    SectorDao.findAllSector().then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var buscarPorComuna = function(req, res) {
    SectorDao.buscarPorComuna(req.params.id_comuna).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var buscarPorIdSector = function(req, res) {
    SectorDao.buscarPorIdSector(req.params.id_sector).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var updateSector = function(req, res) {
    var id_sector = req.params.id_sector;
    var actualizar = {
        id_comuna: req.body.id_comuna,
        nom_sec: req.body.nom_sec
    };
    SectorDao.updateSector(actualizar, id_sector, function(variable, err) {
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
    SectorDao.findById(req.params.id_sector).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};


var crear = function(req, res) {
    var sector = {
        id_comuna: req.body.id_comuna,
        nom_sec: req.body.nom_sec
    };
    SectorDao.crear(sector).then(function(sector) {
        Respuesta.sendJsonResponse(res, 200, sector)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

var deleteById = function(req, res) {
    SectorDao.deleteById(req.params.id_sector).then(function(coordinador) {
        if (coordinador == 1) {
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

module.exports.findAllSector = findAllSector;
module.exports.updateSector = updateSector;
module.exports.findById = findById;
module.exports.crear = crear;
module.exports.deleteById = deleteById;
module.exports.buscarPorComuna = buscarPorComuna;
module.exports.buscarPorIdSector = buscarPorIdSector;