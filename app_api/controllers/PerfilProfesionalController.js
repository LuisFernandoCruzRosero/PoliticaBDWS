var PerfilProfesionalDao = require("../../app_core/dao/PerfilProfesionalDao");
var Respuesta = require("../../app_core/helpers/respuesta");


var findAllPerfilProfesional = function(req, res) {
    PerfilProfesionalDao.findAllPerfilProfesional().then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var updatePerfilProfesional = function(req, res) {
    var id_perfil_profesional = req.params.id_perfil_profesional;
    var actualizar = {
        nom_per_pro: req.body.nom_per_pro,
    };
    PerfilProfesionalDao.updatePerfilProfesional(actualizar, id_perfil_profesional, function(variable, err) {
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
    PerfilProfesionalDao.findById(req.params.id_perfil_profesional).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};


var crear = function(req, res) {
    var perfilProfesional = {
        nom_per_pro: req.body.nom_per_pro,
    };
    PerfilProfesionalDao.crear(perfilProfesional).then(function(perfilProfesional) {
        Respuesta.sendJsonResponse(res, 200, perfilProfesional)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

var deleteById = function(req, res) {
    PerfilProfesionalDao.deleteById(req.params.id_perfil_profesional).then(function(perfilProfesional) {
        if (perfilProfesional == 1) {
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};



module.exports.findAllPerfilProfesional = findAllPerfilProfesional;
module.exports.updatePerfilProfesional = updatePerfilProfesional;
module.exports.findById = findById;
module.exports.crear = crear;
module.exports.deleteById = deleteById;