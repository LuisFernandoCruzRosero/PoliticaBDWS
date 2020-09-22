/*llamando al archivo DAO*/
var VotanteDao = require("../../app_core/dao/VotanteDao");
/*llamando al archivo respuesta*/
var Respuesta = require("../../app_core/helpers/respuesta");

/*funcion consultar tdos los datos de la tabla votantes*/
var findAllVotante = function(req, res) {
    /* llama a la funcion en el dao */
    VotanteDao.findAllVotante().then(function(votante) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, votante);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};
/*funcion de actualizar los datos de la tabla votantes*/
var updateVotante = function(req, res) {
        /*recoge el parametro enviado desde la app*/
        var id_votante = req.params.id_votante;
        /*objeto que recoge los datos enviados desde la app*/
        var actualizar = {
            ced_votante: req.body.ced_votante,
            id_lider: req.body.id_lider,
            nom_votante: req.body.nom_votante,
            id_mesa: req.body.id_mesa,
            id_usuario: req.body.id_usuario,
            id_barrio: req.body.id_barrio,
            tel_votante: req.body.tel_votante,
            id_comunaB: req.body.id_comunaB,
            id_comunaL: req.body.id_comunaL,
            activo: req.body.activo,
            municipio: req.body.municipio,
            departamento: req.body.departamento,
        };
        /* llama a la funcion en el dao y le envia el objeto votante y el parametro id_votante*/
        VotanteDao.updateVotante(actualizar, id_votante, function(variable, err) {
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
    /*funcion consultar un dato en especifico de la tabla votante*/
var findByIdVotante = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro votante*/
    VotanteDao.findByIdVotante(req.params.id_votante).then(function(votante) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, votante);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};

/*funcion para insertar un dato de la tabla votante*/
var insertVotante = function(req, res) {
    /*objeto que recoge los datos enviados desde la app*/
    var votante = {
        ced_votante: req.body.ced_votante,
        id_lider: req.body.id_lider,
        nom_votante: req.body.nom_votante,
        id_mesa: req.body.id_mesa,
        id_usuario: req.body.id_usuario,
        id_barrio: req.body.id_barrio,
        tel_votante: req.body.tel_votante,
        id_comunaB: req.body.id_comunaB,
        id_comunaL: req.body.id_comunaL,
        activo: req.body.activo,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
    };
    /* llama a la funcion en el dao y le envia el objeto tabla votante*/
    VotanteDao.insertVotante(votante).then(function(votante) {
        /*si no hay error en la insercion enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, votante)
    }).catch(function(error) {
        /*si  hay error en la insercion enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

/*funcion eliminar  los datos de la tabla votante por el id*/
var deleteByIdVotante = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro id_votante*/
    VotanteDao.deleteByIdVotante(req.params.id_votante).then(function(votante) {
        if (votante == 1) {
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

/*funcion consultar los datos de la tabla votante filtrados por medio del comuna del barrio*/
var findAllVotanteComunaBarrio = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro comunaB*/
    VotanteDao.findAllVotanteComunaBarrio(req.params.id_comunaB).then(function(votante) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, votante);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar los datos de la tabla votante filtrados por medio del comuna del lugar*/
var findAllVotanteComunaLugar = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro comunaL*/
    VotanteDao.findAllVotanteComunaLugar(req.params.id_comunaL).then(function(votante) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, votante);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};
/*funcion consultar los datos de la tabla votante filtrados por medio del lugar*/
var findAllVotanteLugar = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro lugar*/
    VotanteDao.findAllVotanteLugar(req.params.id_lugar).then(function(votante) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, votante);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};
/*funcion consultar los datos de la tabla votante filtrados por medio del barrio*/
var findAllVotanteBarrio = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro barrio*/
    VotanteDao.findAllVotanteBarrio(req.params.id_barrio).then(function(votante) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, votante);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar los datos de la tabla votante filtrados por medio del usuario*/
var findAllVotanteUsuario = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro usuario*/
    VotanteDao.findAllVotanteUsuario(req.params.id_usuario).then(function(votante) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, votante);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};
/*funcion consultar los datos de la tabla votante filtrados por medio del lider*/
var findAllVotanteLider = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro lider*/
    VotanteDao.findAllVotanteLider(req.params.id_lider).then(function(votante) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, votante);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};
/*funcion consultar los datos de la tabla votante filtrados por medio de la cedula*/
var findByIVotanteCedula = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro cedula*/
    VotanteDao.findByIVotanteCedula(req.params.ced_votante).then(function(votante) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, votante);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/* funcion consultar cantidad de datos en la tabla Votante */
var findByIdTotalVotante = function(req, res) {
    /* llama a la funcion en el dao */
    VotanteDao.findByIdTotalVotante().then(function(votante) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, votante);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};

/*exportar funciones*/
module.exports.findAllVotante = findAllVotante;
module.exports.updateVotante = updateVotante;
module.exports.findByIdVotante = findByIdVotante;
module.exports.insertVotante = insertVotante;
module.exports.deleteByIdVotante = deleteByIdVotante;
module.exports.findAllVotanteComunaBarrio = findAllVotanteComunaBarrio;
module.exports.findAllVotanteComunaLugar = findAllVotanteComunaLugar;
module.exports.findAllVotanteBarrio = findAllVotanteBarrio;
module.exports.findAllVotanteLugar = findAllVotanteLugar;
module.exports.findAllVotanteLider = findAllVotanteLider;
module.exports.findAllVotanteUsuario = findAllVotanteUsuario;
module.exports.findByIVotanteCedula = findByIVotanteCedula;
module.exports.findByIdTotalVotante = findByIdTotalVotante;