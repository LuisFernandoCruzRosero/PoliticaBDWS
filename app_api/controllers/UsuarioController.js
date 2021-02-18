/*llamando al archivo DAO*/
var UsuarioDao = require("../../app_core/dao/UsuarioDao");
/*llamando al archivo respuesta*/
var Respuesta = require("../../app_core/helpers/respuesta");

/*funcion consultar los datos de la tabla usuario filtrados por medio del candidato*/
var findAllUsuarioCandidato = function(req, res) {
    /* llama a la funcion en el dao */
    UsuarioDao.findAllUsuarioCandidato().then(function(usuario) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar los datos de la tabla usuario filtrados por medio de la cedula del candidato*/
var findAllUsuarioCandidatoCedula = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro ced_usuario*/
    UsuarioDao.findAllUsuarioCandidatoCedula(req.params.ced_usuario).then(function(usuario) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar los datos de la tabla usuario filtrados por medio del administrador*/
var findAllUsuarioAdministrador = function(req, res) {
    /* llama a la funcion en el dao */
    UsuarioDao.findAllUsuarioAdministrador().then(function(usuario) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};
/*funcion consultar los datos de la tabla usuario filtrados por medio de la cedula del administrador*/
var findAllUsuarioAdministradorCedula = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro ced_usuario*/
    UsuarioDao.findAllUsuarioAdministradorCedula(req.params.ced_usuario).then(function(usuario) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar los datos de la tabla usuario filtrados por medio del coordinador*/
var findAllUsuarioCoordinador = function(req, res) {
    /* llama a la funcion en el dao */
    UsuarioDao.findAllUsuarioCoordinador().then(function(usuario) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};



/*funcion consultar los datos de la tabla usuario filtrados por medio del coordinador*/
var findByIdUsuarioCoordinador = function(req, res) {
    /* llama a la funcion en el dao */
    UsuarioDao.findByIdUsuarioCoordinador().then(function(id_usuario) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};


/*funcion consultar los datos de la tabla usuario filtrados por medio de la cedula del coordinador*/
var findAllUsuarioCoordinadorCedula = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro ced_usuario*/
    UsuarioDao.findAllUsuarioCoordinadorCedula(req.params.ced_usuario).then(function(usuario) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar tdos los datos de la tabla usuario*/
var findAllUsuario = function(req, res) {
    /* llama a la funcion en el dao */
    UsuarioDao.findAllUsuario().then(function(usuario) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar los datos de la agenda filtrados por medio de la cedula*/
var findAllUsuarioCedula = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro ced_usuario*/
    UsuarioDao.findAllUsuarioCedula(req.params.ced_usuario).then(function(usuario) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllUsuarioCoordinadorLugar = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro ced_usuario*/
    UsuarioDao.findAllUsuarioCoordinadorLugar(req.params.id_lugar).then(function(usuario) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllUsuarioCoordinadorBarrio = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro ced_usuario*/
    UsuarioDao.findAllUsuarioCoordinadorBarrio(req.params.id_barrio).then(function(usuario) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar un dato en especifico de la usuario*/
var findByIdUsuario = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro usuario*/
    UsuarioDao.findByIdUsuario(req.params.ced_usuario).then(function(usuario) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion de actualizar los datos de la tabla usuario*/
var updateUsuario = function(req, res) {
    /*recoge el parametro enviado desde la app*/
    var id_usuario = req.params.id_usuario;
    /*objeto que recoge los datos enviados desde la app*/
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
    /* llama a la funcion en el dao y le envia el objeto agenda y el parametro id_agenda*/
    UsuarioDao.updateUsuario(actualizar, id_usuario, function(variable, err) {
            if (err) {
                /*si hay error en el modificar enviar respuesta error*/
                Respuesta.sendJsonResponse(res, 500, err);
            }
            if (variable) {
                /*si no hay error en el modificar enviar respuesta exitosa*/
                Respuesta.sendJsonResponse(res, 200, variable);
            }
        })
        .catch(function(err) {
            /*si hay error en el modificar enviar respuesta error*/
            Respuesta.sendJsonResponse(res, 500, err);
        });

};

/*funcion para insertar un dato en la tabla usuario*/
var insertUsuario = function(req, res) {
    /*objeto que recoge los datos enviados desde la app*/
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
    /* llama a la funcion en el dao y le envia el objeto usuario*/
    UsuarioDao.insertUsuario(usuario).then(function(usuario) {
        /*si no hay error en la insercion enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, usuario)
    }).catch(function(error) {
        /*si  hay error en la insercion enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

/*funcion eliminar  los datos de la agenda por el id*/
var deleteByIdUsuario = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro id_usuario*/
    UsuarioDao.deleteByIdUsuario(req.params.id_usuario).then(function(usuario) {
        if (usuario == 1) {
            /*si no hay error en el eliminar enviar respuesta exitosa*/
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            /*si  hay error en el eliminar enviar respuesta de error*/
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        /*si  hay error en el eliminar enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

/* funcion consultar cantidad de datos en la tabla Coordinador */
var findByIdTotalUsuarioCoordinador = function(req, res) {
    /* llama a la funcion en el dao */
    UsuarioDao.findByIdTotalUsuarioCoordinador().then(function(coordinador) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, coordinador);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};

/*exportar funciones*/
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
module.exports.findByIdTotalUsuarioCoordinador = findByIdTotalUsuarioCoordinador;
module.exports.findByIdUsuarioCoordinador = findByIdUsuarioCoordinador;
module.exports.findAllUsuarioCoordinadorLugar = findAllUsuarioCoordinadorLugar;
module.exports.findAllUsuarioCoordinadorBarrio = findAllUsuarioCoordinadorBarrio;