/*llamando al archivo DAO*/
var RegistraduriaDao = require("../../app_core/dao/RegistraduriaDao");
/*llamando al archivo respuesta*/
var Respuesta = require("../../app_core/helpers/respuesta");

/*funcion para insertar un dato en la tabla registarduria*/
var insertRegistraduria = function(req, res) {
    /*objeto que recoge los datos enviados desde la app*/
    var registraduria = {
        ced_registraduria: req.body.ced_registraduria,
        nom_registraduria: req.body.nom_registraduria,
        id_lugar: req.body.id_lugar,
        id_mesa: req.body.id_mesa,
        dep_registraduria: req.body.dep_registraduria,
        mun_registraduria: req.body.mun_registraduria,
    };
    /* llama a la funcion en el dao y le envia el objeto registraduria*/
    RegistraduriaDao.insertRegistraduria(registraduria).then(function(registraduria) {
        /*si no hay error en la insercion enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, registraduria)
    }).catch(function(error) {
        /*si  hay error en la insercion enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error);
    });
};
/*funcion consultar tdos los datos de la registraduria*/
var findAllRegistraduria = function(req, res) {
    /* llama a la funcion en el dao */
    RegistraduriaDao.findAllRegistraduria().then(function(registraduria) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, registraduria);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};
/*funcion eliminar  los datos de la agenda por el id*/
var deleteByIdRegistraduria = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro id_registraduria*/
    RegistraduriaDao.deleteByIdRegistraduria(req.params.id_registraduria).then(function(registraduria) {
        if (registraduria == 1) {
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
/*funcion consultar los datos de la tabla registraduria filtrados por medio de la cedula*/
var findByIdRegistraduriaCedula = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro ced_registarduria*/
    RegistraduriaDao.findByIdRegistraduriaCedula(req.params.ced_registraduria).then(function(registraduria) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, registraduria);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar un dato en especifico de la tabla registraduria*/
var findByIdRegistraduria = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro registraduria*/
    RegistraduriaDao.findByIdRegistraduria(req.params.id_registraduria).then(function(registraduria) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, registraduria);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};
/*exportar funciones*/
module.exports.insertRegistraduria = insertRegistraduria;
module.exports.findAllRegistraduria = findAllRegistraduria;
module.exports.deleteByIdRegistraduria = deleteByIdRegistraduria;
module.exports.findByIdRegistraduriaCedula = findByIdRegistraduriaCedula;
module.exports.findByIdRegistraduria = findByIdRegistraduria;