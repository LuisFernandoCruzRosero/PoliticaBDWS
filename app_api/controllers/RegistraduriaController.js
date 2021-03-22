/*llamando al archivo DAO*/
var RegistraduriaDao = require("../../app_core/dao/RegistraduriaDao");
/*llamando al archivo respuesta*/
var Respuesta = require("../../app_core/helpers/respuesta");

/*funcion para insertar un dato en la tabla registarduria*/
var insertRegistraduria = function(req, res) {
    /*objeto que recoge los datos enviados desde la app*/
    var registraduria = {
        id_lugar: req.body.id_lugar,
        total: req.body.total,
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

/*funcion eliminar  los datos de la agenda por el id*/
var findAllRegistraduriaLugar = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro id_registraduria*/
    RegistraduriaDao.findAllRegistraduriaLugar(req.params.id_lugar).then(function(registraduria) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, registraduria);
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

/*funcion de actualizar los datos de la tabla mesa*/
var updateRegistraduria = function(req, res) {
    /*recoge el parametro enviado desde la app*/
    var id_registraduria = req.params.id_registraduria;
    /*objeto que recoge los datos enviados desde la app*/
    var actualizarRegistraduria = {
        total: req.body.total,
    };
    /* llama a la funcion en el dao y le envia el objeto agenda y el parametro id_mesa*/
    RegistraduriaDao.updateRegistraduria(actualizarRegistraduria, id_registraduria, function(registraduria, err) {
            if (err) {
                /*si hay error en el modificar enviar respuesta error*/
                Respuesta.sendJsonResponse(res, 500, err);
            }
            if (registraduria) {
                /*si no hay error en el modificar enviar respuesta exitosa*/
                Respuesta.sendJsonResponse(res, 200, registraduria);
            }
        })
        .catch(function(err) {
            /*si hay error en el modificar enviar respuesta error*/
            Respuesta.sendJsonResponse(res, 500, err);
        });

};
/*exportar funciones*/
module.exports.insertRegistraduria = insertRegistraduria;
module.exports.findAllRegistraduria = findAllRegistraduria;
module.exports.deleteByIdRegistraduria = deleteByIdRegistraduria;
module.exports.findByIdRegistraduriaCedula = findByIdRegistraduriaCedula;
module.exports.findByIdRegistraduria = findByIdRegistraduria;
module.exports.updateRegistraduria = updateRegistraduria;
module.exports.findAllRegistraduriaLugar = findAllRegistraduriaLugar;