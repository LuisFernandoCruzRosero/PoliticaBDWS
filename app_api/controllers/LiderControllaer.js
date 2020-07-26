var LiderDao = require("../../app_core/dao/LiderDao");
var Respuesta = require("../../app_core/helpers/respuesta");


var findAllLider = function(req, res) {
    LiderDao.findAllLider().then(function(lider) {
        Respuesta.sendJsonResponse(res, 200, lider);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var updateLider = function(req, res) {
    var id_lider = req.params.id_lider;
    var actualizar = {
        ced_lider: req.body.ced_lider,
        id_lugar: req.body.id_lugar,
        id_mesa: req.body.id_mesa,
        id_barrio: req.body.id_barrio,
        nom_lider: req.body.nom_lider,
        id_usuario: req.body.id_usuario,
        tel_lider: req.body.tel_lider,
        id_comunaL: req.body.id_comunaL,
        id_comunaB: req.body.id_comunaB,
        activo: req.body.activo,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
    };
    LiderDao.updateLider(actualizar, id_lider, function(variable, err) {
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

var findByIdLider = function(req, res) {
    LiderDao.findByIdLider(req.params.id_lider).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};


var insertLider = function(req, res) {
    var lider = {
        ced_lider: req.body.ced_lider,
        id_lugar: req.body.id_lugar,
        id_mesa: req.body.id_mesa,
        id_barrio: req.body.id_barrio,
        nom_lider: req.body.nom_lider,
        id_usuario: req.body.id_usuario,
        tel_lider: req.body.tel_lider,
        id_comunaL: req.body.id_comunaL,
        id_comunaB: req.body.id_comunaB,
        activo: req.body.activo,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
    };
    LiderDao.insertLider(lider).then(function(lider) {
        Respuesta.sendJsonResponse(res, 200, lider)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

var deleteByIdLider = function(req, res) {
    LiderDao.deleteByIdLider(req.params.id_lider).then(function(lider) {
        if (lider == 1) {
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

var findAllLiderComunaBarrio = function(req, res) {
    LiderDao.findAllLiderComunaBarrio(req.params.id_comunaB).then(function(lider) {
        Respuesta.sendJsonResponse(res, 200, lider);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllLiderComunaLugar = function(req, res) {
    LiderDao.findAllLiderComunaLugar(req.params.id_comunaL).then(function(lider) {
        Respuesta.sendJsonResponse(res, 200, lider);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};


var findAllLiderLugar = function(req, res) {
    LiderDao.findAllLiderLugar(req.params.id_lugar).then(function(lider) {
        Respuesta.sendJsonResponse(res, 200, lider);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllLiderBarrio = function(req, res) {
    LiderDao.findAllLiderBarrio(req.params.id_barrio).then(function(lider) {
        Respuesta.sendJsonResponse(res, 200, lider);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllLiderUsuario = function(req, res) {
    LiderDao.findAllLiderUsuario(req.params.id_usuario).then(function(lider) {
        Respuesta.sendJsonResponse(res, 200, lider);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllLiderCedula = function(req, res) {
    LiderDao.findAllLiderCedula(req.params.ced_lider).then(function(lider) {
        Respuesta.sendJsonResponse(res, 200, lider);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

module.exports.findAllLider = findAllLider;
module.exports.updateLider = updateLider;
module.exports.findByIdLider = findByIdLider;
module.exports.insertLider = insertLider;
module.exports.deleteByIdLider = deleteByIdLider;
module.exports.findAllLiderComunaBarrio = findAllLiderComunaBarrio;
module.exports.findAllLiderComunaLugar = findAllLiderComunaLugar;
module.exports.findAllLiderUsuario = findAllLiderUsuario;
module.exports.findAllLiderLugar = findAllLiderLugar;
module.exports.findAllLiderBarrio = findAllLiderBarrio;
module.exports.findAllLiderCedula = findAllLiderCedula;