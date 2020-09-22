/*llamando al archivo DAO*/
var DigitadorDao = require("../../app_core/dao/DigitadorDao");
/*llamando al archivo respuesta*/
var Respuesta = require("../../app_core/helpers/respuesta");

/*funcion consultar tdos los datos de la tabla digitador*/
var findAllDigitador = function(req, res) {
    /* llama a la funcion en el dao */
    DigitadorDao.findAllDigitador().then(function(digitador) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, digitador);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar un dato de la tabla digitador filtrados por medio de la cedula*/
var findByIdDigitadorCedula = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro digitador*/
    DigitadorDao.findByIdDigitadorCedula(req.params.ced_digitador).then(function(digitador) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, digitador);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar un dato en especifico de la tabla digitador*/
var findByIdDigitador = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro digitador*/
    DigitadorDao.findByIdDigitador(req.params.id_digitador).then(function(digitador) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, digitador);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion de actualizar los datos de la tabla digitador*/
var updateDigitador = function(req, res) {
    /*recoge el parametro enviado desde la app*/
    var id_digitador = req.params.id_digitador;
    var actualizar = {
        /*objeto que recoge los datos enviados desde la app*/
        ced_digitador: req.body.ced_digitador,
        nom_digitador: req.body.nom_digitador,
        usu_digiador: req.body.usu_digiador,
        con_digitador: req.body.con_digitador,
        id_comunaL: req.body.id_comunaL,
        id_lugar: req.body.id_lugar,
        id_barrio: req.body.id_barrio,
        id_lider: req.body.id_lider,
        id_usuario: req.body.id_usuario,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
        id_comunaB: req.body.id_comunaB,
        id_mesa: req.body.id_mesa,
        id_tipo_usuario: req.body.id_tipo_usuario,
        activo: req.body.activo,
        tel_digitador: req.body.tel_digitador,
    };
    /* llama a la funcion en el dao y le envia el objeto agenda y el parametro id_digitador*/
    DigitadorDao.updateDigitador(actualizar, id_digitador, function(variable, err) {
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

/*funcion para insertar un dato de en la tabla digitador*/
var insertDigitador = function(req, res) {
    /*objeto que recoge los datos enviados desde la app*/
    var digitador = {
        ced_digitador: req.body.ced_digitador,
        nom_digitador: req.body.nom_digitador,
        usu_digiador: req.body.usu_digiador,
        con_digitador: req.body.con_digitador,
        id_comunaL: req.body.id_comunaL,
        id_lugar: req.body.id_lugar,
        id_barrio: req.body.id_barrio,
        id_lider: req.body.id_lider,
        id_usuario: req.body.id_usuario,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
        id_comunaB: req.body.id_comunaB,
        id_mesa: req.body.id_mesa,
        id_tipo_usuario: req.body.id_tipo_usuario,
        activo: req.body.activo,
        tel_digitador: req.body.tel_digitador,
    };
    /* llama a la funcion en el dao y le envia el objeto digitador*/
    DigitadorDao.insertDigitador(digitador).then(function(digitador) {
        /*si no hay error en la insercion enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, digitador)
    }).catch(function(error) {
        /*si  hay error en la insercion enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

/*funcion eliminar  los datos de la tabla digitador por el id*/
var deleteByIdDigitador = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro id_digitador*/
    DigitadorDao.deleteByIdDigitador(req.params.id_digitador).then(function(digitador) {
        if (digitador == 1) {
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

/* funcion consultar cantidad de datos en la tabla Digitador */
var findByIdTotalDigitador = function(req, res) {
    /* llama a la funcion en el dao */
    LugarMesaDao.findByIdTotalDigitador().then(function(digitador) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, digitador);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};

/*exportar funciones*/
module.exports.findAllDigitador = findAllDigitador;
module.exports.findByIdDigitadorCedula = findByIdDigitadorCedula;
module.exports.findByIdDigitador = findByIdDigitador;
module.exports.updateDigitador = updateDigitador;
module.exports.insertDigitador = insertDigitador;
module.exports.deleteByIdDigitador = deleteByIdDigitador;
module.exports.findByIdTotalDigitador = findByIdTotalDigitador;