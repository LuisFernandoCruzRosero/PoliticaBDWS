var ComunaDao = require("../../app_core/dao/ComunaDao");
var Respuesta = require("../../app_core/helpers/respuesta");

var insertComuna = function(req, res) {
    var comuna = {
        nom_comuna: req.body.nom_comuna
    };
    ComunaDao.insertComuna(comuna).then(function(comuna) {
        Respuesta.sendJsonResponse(res, 200, comuna)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

var findAllComuna = function(req, res) {
    ComunaDao.findAllComuna().then(function(comuna) {
        Respuesta.sendJsonResponse(res, 200, comuna);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var updateComuna = function(req, res) {
    var id_comuna = req.params.id_comuna;
    var actualizarComuna = {
        nom_comuna: req.body.nom_comuna,
    };
    ComunaDao.updateComuna(actualizarComuna, id_comuna, function(comuna, err) {
            if (err) {
                Respuesta.sendJsonResponse(res, 500, err);
            }
            if (comuna) {
                Respuesta.sendJsonResponse(res, 200, comuna);
            }
        })
        .catch(function(err) {
            Respuesta.sendJsonResponse(res, 500, err);
        });

};

var deleteByIdComuna = function(req, res) {
    ComunaDao.deleteByIdComuna(req.params.id_comuna).then(function(comuna) {
        if (comuna == 1) {
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

var findByIdComuna = function(req, res) {
    ComunaDao.findByIdComuna(req.params.id_comuna).then(function(comuna) {
        Respuesta.sendJsonResponse(res, 200, comuna);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};


module.exports.insertComuna = insertComuna;
module.exports.findAllComuna = findAllComuna;
module.exports.updateComuna = updateComuna;
module.exports.deleteByIdComuna = deleteByIdComuna;
module.exports.findByIdComuna = findByIdComuna;