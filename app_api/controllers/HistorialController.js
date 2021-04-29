/*llamando al archivo DAO*/
var HistorialDao = require("../../app_core/dao/HistorialDao");
/*llamando al archivo respuesta*/
var Respuesta = require("../../app_core/helpers/respuesta");

/*funcion para insertar un dato en el historial*/
var insertHistorial = function(req, res) {
    /*objeto que recoge los datos enviados desde la app*/
    var historial = {
        fec_historial: req.body.fec_historial,
        total: req.body.total,
        ced_candidato: req.body.ced_candidato,
        nom_candidato: req.body.nom_candidato,
    };
    /* llama a la funcion en el dao y le envia el objeto historial*/
    HistorialDao.insertHistorial(historial).then(function(historial) {
        /*si no hay error en la insercion enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, historial)
    }).catch(function(error) {
        /*si  hay error en la insercion enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

/*funcion consultar tdos los datos del historial*/
var findAllHistorial = function(req, res) {
    /* llama a la funcion en el dao */
    HistorialDao.findAllHistorial().then(function(historial) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, historial);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar los datos del hidtorial filtrados por medio del lugar*/
var findAllHistorialCedula = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro lugar*/
    HistorialDao.findAllHistorialCedula(req.params.ced_candidato).then(function(historial) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, historial);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar los datos del hidtorial filtrados por medio del lugar*/
var findAllHistorialNombre = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro lugar*/
    HistorialDao.findAllHistorialNombre(req.params.nom_candidato).then(function(historial) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, historial);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar los datos del hidtorial filtrados por medio de la fecha*/
var findAllHistorialFecha = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro fecha*/
    HistorialDao.findAllHistorialFecha(req.params.fec_historial).then(function(historial) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, historial);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar un dato en especifico del historial*/
var findByIdHistorial = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro historial*/
    HistorialDao.findByIdHistorial(req.params.id_historial).then(function(historial) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, historial);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion de actualizar los datos de la tabla digitador*/
var updateHistorial = function(req, res) {
    /*recoge el parametro enviado desde la app*/
    var id_hitorial = req.params.id_historial;
    var actualizar = {
        /*objeto que recoge los datos enviados desde la app*/
        fec_historial: req.body.fec_historial,
        total: req.body.total,
        ced_candidato: req.body.ced_candidato,
        nom_candidato: req.body.nom_candidato,
    };
    /* llama a la funcion en el dao y le envia el objeto agenda y el parametro id_digitador*/
    HistorialDao.updateHistorial(actualizar, id_hitorial, function(variable, err) {
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

/*funcion eliminar  los datos de la tabla lider por el id*/
var deleteByIdHistoral = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro id_lider*/
    HistorialDao.deleteByIdHistoral(req.params.id_historial).then(function(historial) {
        if (historial == 1) {
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

/*exportar funciones*/
module.exports.insertHistorial = insertHistorial;
module.exports.findAllHistorial = findAllHistorial;
module.exports.findAllHistorialCedula = findAllHistorialCedula;
module.exports.findAllHistorialFecha = findAllHistorialFecha;
module.exports.findByIdHistorial = findByIdHistorial;
module.exports.updateHistorial = updateHistorial;
module.exports.deleteByIdHistoral = deleteByIdHistoral;
module.exports.findAllHistorialNombre = findAllHistorialNombre;