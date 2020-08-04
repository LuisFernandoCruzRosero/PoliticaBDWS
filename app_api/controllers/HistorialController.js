/*llamando al archivo DAO*/
var HistorialDao = require("../../app_core/dao/HistorialDao");
/*llamando al archivo respuesta*/
var Respuesta = require("../../app_core/helpers/respuesta");

/*funcion para insertar un dato en el historial*/
var insertHistorial = function(req, res) {
    /*objeto que recoge los datos enviados desde la app*/
    var historial = {
        fec_historial: req.body.fec_historial,
        id_lugar: req.body.id_lugar,
        total: req.body.total,
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
var findAllHistorialLugar = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro lugar*/
    HistorialDao.findAllHistorialLugar(req.params.id_lugar).then(function(historial) {
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

/*exportar funciones*/
module.exports.insertHistorial = insertHistorial;
module.exports.findAllHistorial = findAllHistorial;
module.exports.findAllHistorialLugar = findAllHistorialLugar;
module.exports.findAllHistorialFecha = findAllHistorialFecha;
module.exports.findByIdHistorial = findByIdHistorial;