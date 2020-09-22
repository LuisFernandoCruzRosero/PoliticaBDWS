/*llamando al archivo DAO*/
var AgendaDao = require("../../app_core/dao/AgendaDao");
/*llamando al archivo respuesta*/
var Respuesta = require("../../app_core/helpers/respuesta");

/*funcion para insertar un dato de la agenda*/
var insertAgenda = function(req, res) {
    /*objeto que recoge los datos enviados desde la app*/
    var agenda = {
        fecha: req.body.fecha,
        lugar: req.body.lugar,
        hora: req.body.hora,
        descripcion: req.body.descripcion,
        id_usuario: req.body.id_usuario,
    };
    /* llama a la funcion en el dao y le envia el objeto agenda*/
    AgendaDao.insertAgenda(agenda).then(function(agenda) {
        /*si no hay error en la insercion enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, agenda)
    }).catch(function(error) {
        /*si  hay error en la insercion enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error);
    });
};
/*funcion consultar tdos los datos de la agenda*/
var findAllAgenda = function(req, res) {
    /* llama a la funcion en el dao */
    AgendaDao.findAllAgenda().then(function(agenda) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, agenda);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};
/*funcion eliminar  los datos de la agenda por el id*/
var deleteByIdAgenda = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro id_agenda*/
    AgendaDao.deleteByIdAgenda(req.params.id_agenda).then(function(agenda) {
        if (agenda == 1) {
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

/*funcion de actualizar los datos de la agenda*/
var updateAgenda = function(req, res) {
    /*recoge el parametro enviado desde la app*/
    var id_agenda = req.params.id_agenda;
    /*objeto que recoge los datos enviados desde la app*/
    var actualizar = {
        fecha: req.body.fecha,
        lugar: req.body.lugar,
        hora: req.body.hora,
        descripcion: req.body.descripcion,
        id_usuario: req.body.id_usuario,
    };
    /* llama a la funcion en el dao y le envia el objeto agenda y el parametro id_agenda*/
    AgendaDao.updateAgenda(actualizar, id_agenda, function(variable, err) {
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
/*funcion consultar los datos de la agenda filtrados por medio del usuario*/
var findAllAgendaUsuario = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro usuario*/
    AgendaDao.findAllAgendaUsuario(req.params.id_usuario).then(function(agenda) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, agenda);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};
/*funcion consultar un dato en especifico de la agenda*/
var findByIdAgenda = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro agenda*/
    AgendaDao.findByIdAgenda(req.params.id_agenda).then(function(agenda) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, agenda);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};
/*funcion consultar los datos de la agenda filtrados por medio de la fecha*/
var findAllAgendaFecha = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro fecha*/
    AgendaDao.findAllAgendaFecha(req.params.fecha).then(function(agenda) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, agenda);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/* funcion consultar cantidad de datos en la tabla Mesa */
var findByIdTotalAgenda = function(req, res) {
    /* llama a la funcion en el dao */
    AgendaDao.findByIdTotalAgenda().then(function(agenda) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, agenda);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};
/*exportar funciones*/
module.exports.insertAgenda = insertAgenda;
module.exports.findAllAgenda = findAllAgenda;
module.exports.deleteByIdAgenda = deleteByIdAgenda;
module.exports.updateAgenda = updateAgenda;
module.exports.findByIdAgenda = findByIdAgenda;
module.exports.findAllAgendaFecha = findAllAgendaFecha;
module.exports.findAllAgendaUsuario = findAllAgendaUsuario;
module.exports.findByIdTotalAgenda = findByIdTotalAgenda;