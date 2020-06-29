var UsuarioDao = require("../../app_core/dao/UsuarioDao");
var Respuesta = require("../../app_core/helpers/respuesta");

var findAllDigitador = function(req, res) {
    UsuarioDao.findAllDigitador().then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllUsuario = function(req, res) {
    UsuarioDao.findAllUsuario().then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllUsuarioOcupacion = function(req, res) {
    UsuarioDao.findAllUsuarioOcupacion(req.params.ocupacion).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllDigitadorById = function(req, res) {
    UsuarioDao.findAllDigitadorById(req.params.id_usuario).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllDigitadorCedula = function(req, res) {
    UsuarioDao.findAllDigitadorCedula(req.params.ced_usu).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var updateUsuario = function(req, res) {
    var id_usuario = req.params.id_usuario;
    var actualizar = {
        ced_usu: req.body.ced_usu,
        nom_usu: req.body.nom_usu,
        bar_usu: req.body.bar_usu,
        tel_usu: req.body.tel_usu,
        id_tipo_usu: req.body.id_tipo_usu,
        activo: req.body.activo,
        contrasena: req.body.contrasena,
        ocupacion: req.body.ocupacion,
        user_usu: req.body.user_usu,
        mesa: req.body.mesa,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
        puesto: req.body.puesto,
        id_lider: req.body.id_lider,
        id_coordinador: req.body.id_coordinador,
        id_sector: req.body.id_sector,
        id_comuna: req.body.id_comuna,
    };
    UsuarioDao.updateUsuario(actualizar, id_usuario, function(variable, err) {
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
    UsuarioDao.findById(req.params.id_usuario).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};


var crear = function(req, res) {
    var usuario = {
        ced_usu: req.body.ced_usu,
        nom_usu: req.body.nom_usu,
        bar_usu: req.body.bar_usu,
        tel_usu: req.body.tel_usu,
        id_tipo_usu: req.body.id_tipo_usu,
        activo: req.body.activo,
        contrasena: req.body.contrasena,
        ocupacion: req.body.ocupacion,
        user_usu: req.body.user_usu,
        mesa: req.body.mesa,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
        puesto: req.body.puesto,
        id_lider: req.body.id_lider,
        id_coordinador: req.body.id_coordinador,
        id_sector: req.body.id_sector,
        id_comuna: req.body.id_comuna,
    };
    UsuarioDao.crear(usuario).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

var deleteById = function(req, res) {
    UsuarioDao.deleteById(req.params.id_usuario).then(function(coordinador) {
        if (coordinador == 1) {
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

module.exports.findAllUsuario = findAllUsuario;
module.exports.updateUsuario = updateUsuario;
module.exports.findById = findById;
module.exports.crear = crear;
module.exports.findAllDigitador = findAllDigitador;
module.exports.deleteById = deleteById;
module.exports.findAllUsuarioOcupacion = findAllUsuarioOcupacion;
module.exports.findAllDigitadorCedula = findAllDigitadorCedula;
module.exports.findAllDigitadorById = findAllDigitadorById;