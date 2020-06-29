var CoordinadorDao = require("../../app_core/dao/CoordinadorDao");
var Respuesta = require("../../app_core/helpers/respuesta");


var findAllCoordinador = function(req, res) {
    CoordinadorDao.findAllCoordinador().then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var updateCoordinador = function(req, res) {
    var id_coordinador = req.params.id_coordinador;
    var actualizar = {
        ced_coo: req.body.ced_coo,
        nom_coo: req.body.nom_coo,
        bar_coo: req.body.bar_coo,
        tel_coo: req.body.tel_coo,
        activo: req.body.activo,
        contrasena: req.body.contrasena,
        ocupacion: req.body.ocupacion,
        user_usu: req.body.user_usu,
        id_comuna: req.body.id_comuna,
        id_sector: req.body.id_sector,
        mesa: req.body.mesa,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
        puesto: req.body.puesto,
    };
    CoordinadorDao.updateCoordinador(actualizar, id_coordinador, function(variable, err) {
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
    CoordinadorDao.findById(req.params.id_coordinador).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};


var crear = function(req, res) {
    var coordinador = {
        ced_coo: req.body.ced_coo,
        nom_coo: req.body.nom_coo,
        bar_coo: req.body.bar_coo,
        tel_coo: req.body.tel_coo,
        activo: req.body.activo,
        contrasena: req.body.contrasena,
        ocupacion: req.body.ocupacion,
        user_usu: req.body.user_usu,
        id_comuna: req.body.id_comuna,
        id_sector: req.body.id_sector,
        mesa: req.body.mesa,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
        puesto: req.body.puesto,
    };
    CoordinadorDao.crear(coordinador).then(function(coordinador) {
        Respuesta.sendJsonResponse(res, 200, coordinador)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

var deleteById = function(req, res) {
    CoordinadorDao.deleteById(req.params.id_coordinador).then(function(coordinador) {
        if (coordinador == 1) {
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

var findAllCoordinadorComuna = function(req, res) {
    CoordinadorDao.findAllCoordinadorComuna(req.params.id_comuna).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};


var findAllCoordinadorSector = function(req, res) {
    CoordinadorDao.findAllCoordinadorSector(req.params.id_sector).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllCoordinadorById = function(req, res) {
    CoordinadorDao.findAllCoordinadorById(req.params.id_coordinador).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllCoordinadorOcupacion = function(req, res) {
    CoordinadorDao.findAllCoordinadorOcupacion(req.params.ocupacion).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllCoordinadorCedula = function(req, res) {
    CoordinadorDao.findAllCoordinadorCedula(req.params.ced_coo).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};


module.exports.findAllCoordinadorCedula = findAllCoordinadorCedula;
module.exports.findAllCoordinador = findAllCoordinador;
module.exports.updateCoordinador = updateCoordinador;
module.exports.findById = findById;
module.exports.crear = crear;
module.exports.deleteById = deleteById;
module.exports.findAllCoordinadorById = findAllCoordinadorById;
module.exports.findAllCoordinadorComuna = findAllCoordinadorComuna;
module.exports.findAllCoordinadorSector = findAllCoordinadorSector;
module.exports.findAllCoordinadorOcupacion = findAllCoordinadorOcupacion;