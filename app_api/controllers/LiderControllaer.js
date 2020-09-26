/*llamando al archivo DAO*/
var LiderDao = require("../../app_core/dao/LiderDao");
/*llamando al archivo respuesta*/
var Respuesta = require("../../app_core/helpers/respuesta");

/*funcion consultar tdos los datos del lider*/
var findAllLider = function(req, res) {
    /* llama a la funcion en el dao */
    LiderDao.findAllLider().then(function(lider) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, lider);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion de actualizar los datos de la tabla lider*/
var updateLider = function(req, res) {
    /*recoge el parametro enviado desde la app*/
    var id_lider = req.params.id_lider;
    /*objeto que recoge los datos enviados desde la app*/
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
    /* llama a la funcion en el dao y le envia el objeto agenda y el parametro id_lider*/
    LiderDao.updateLider(actualizar, id_lider, function(variable, err) {
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

}

var findByIdLider = function(req, res) {
    LiderDao.findByIdLider(req.params.id_lider).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};

/*funcion para insertar un dato de la tabla lider*/
var insertLider = function(req, res) {
    /*objeto que recoge los datos enviados desde la app*/
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
    /* llama a la funcion en el dao y le envia el objeto lider*/
    LiderDao.insertLider(lider).then(function(lider) {
        /*si no hay error en la insercion enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, lider)
    }).catch(function(error) {
        /*si  hay error en la insercion enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

/*funcion eliminar  los datos de la tabla lider por el id*/
var deleteByIdLider = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro id_lider*/
    LiderDao.deleteByIdLider(req.params.id_lider).then(function(lider) {
        if (lider == 1) {
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

/*funcion consultar los datos del lider filtrados por medio de la comuna de barrio*/
var findAllLiderComunaBarrio = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro comunaB*/
    LiderDao.findAllLiderComunaBarrio(req.params.id_comunaB).then(function(lider) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, lider);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar los datos del lider filtrados por medio de la comuna de lugar*/
var findAllLiderComunaLugar = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro comunaL*/
    LiderDao.findAllLiderComunaLugar(req.params.id_comunaL).then(function(lider) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, lider);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar los datos del lider filtrados por medio del lugar*/
var findAllLiderLugar = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro lugar*/
    LiderDao.findAllLiderLugar(req.params.id_lugar).then(function(lider) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, lider);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar los datos del lider filtrados por medio del barrio*/
var findAllLiderBarrio = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro barrio*/
    LiderDao.findAllLiderBarrio(req.params.id_barrio).then(function(lider) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, lider);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar los datos del lider filtrados por medio del usuario*/
var findAllLiderUsuario = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro usuario*/
    LiderDao.findAllLiderUsuario(req.params.id_usuario).then(function(lider) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, lider);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar los datos del lider filtrados por medio de la cedula*/
var findAllLiderCedula = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro cedula*/
    LiderDao.findAllLiderCedula(req.params.ced_lider).then(function(lider) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, lider);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/* funcion consultar cantidad de datos en la tabla Lider */
var findByIdTotalLider = function(req, res) {
    /* llama a la funcion en el dao */
    LiderDao.findByIdTotalLider().then(function(lider) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, lider);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
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
module.exports.findByIdTotalLider = findByIdTotalLider;