var UsuarioDao = require("../../app_core/dao/UsuarioDao");
var Respuesta = require("../../app_core/helpers/respuesta");

var findAllUsuarioCandidato = function(req, res) {
    UsuarioDao.findAllUsuarioCandidato().then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllUsuarioCandidatoCedula = function(req, res) {
    UsuarioDao.findAllUsuarioCandidatoCedula(req.params.ced_usuario).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllUsuarioAdministrador = function(req, res) {
    UsuarioDao.findAllUsuarioAdministrador().then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllUsuarioAdministradorCedula = function(req, res) {
    UsuarioDao.findAllUsuarioAdministradorCedula(req.params.ced_usuario).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllUsuarioCoordinador = function(req, res) {
    UsuarioDao.findAllUsuarioCoordinador().then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllUsuarioCoordinadorCedula = function(req, res) {
    UsuarioDao.findAllUsuarioCoordinadorCedula(req.params.ced_usuario).then(function(usuario) {
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

var findAllUsuarioCedula = function(req, res) {
    UsuarioDao.findAllUsuarioCedula(req.params.ced_usuario).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findByIdUsuario = function(req, res) {
    UsuarioDao.findByIdUsuario(req.params.ced_usuario).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var updateUsuario = function(req, res) {
    var id_usuario = req.params.id_usuario;
    var actualizar = {
        ced_usuario: req.body.ced_usuario,
        nom_usuario: req.body.nom_usuario,
        id_lugar: req.body.id_lugar,
        id_mesa: req.body.id_mesa,
        id_barrio: req.body.id_barrio,
        login: req.body.login,
        contrasena: req.body.contrasena,
        id_tipo_usuario: req.body.id_tipo_usuario,
        tel_usuario: req.body.tel_usuario,
        activo: req.body.activo,
        id_comunaB: req.body.id_comunaB,
        id_comunaL: req.body.id_comunaL,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
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

};

var insertUsuario = function(req, res) {
    var usuario = {
        ced_usuario: req.body.ced_usuario,
        nom_usuario: req.body.nom_usuario,
        id_lugar: req.body.id_lugar,
        id_mesa: req.body.id_mesa,
        id_barrio: req.body.id_barrio,
        login: req.body.login,
        contrasena: req.body.contrasena,
        id_tipo_usuario: req.body.id_tipo_usuario,
        tel_usuario: req.body.tel_usuario,
        activo: req.body.activo,
        id_comunaB: req.body.id_comunaB,
        id_comunaL: req.body.id_comunaL,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
    };
    UsuarioDao.insertUsuario(usuario).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

var deleteByIdUsuario = function(req, res) {
    UsuarioDao.deleteByIdUsuario(req.params.id_usuario).then(function(usuario) {
        if (usuario == 1) {
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

module.exports.findAllUsuarioCandidato = findAllUsuarioCandidato;
module.exports.findAllUsuarioCandidatoCedula = findAllUsuarioCandidatoCedula;
module.exports.findAllUsuarioAdministradorCedula = findAllUsuarioAdministradorCedula;
module.exports.findAllUsuarioAdministrador = findAllUsuarioAdministrador;
module.exports.findAllUsuarioCoordinadorCedula = findAllUsuarioCoordinadorCedula;
module.exports.findAllUsuario = findAllUsuario;
module.exports.findAllUsuarioCedula = findAllUsuarioCedula;
module.exports.findByIdUsuario = findByIdUsuario;
module.exports.updateUsuario = updateUsuario;
module.exports.insertUsuario = insertUsuario;
module.exports.deleteByIdUsuario = deleteByIdUsuario;
module.exports.findAllUsuarioCoordinador = findAllUsuarioCoordinador;