/*llamando al archivo DAO*/
var ComunaDao = require("../../app_core/dao/ComunaDao");
/*llamando al archivo respuesta*/
var Respuesta = require("../../app_core/helpers/respuesta");

/*funcion para insertar un dato de la tabla comuna*/
var insertComuna = function(req, res) {
        /*objeto que recoge los datos enviados desde la app*/
        var comuna = {
            nom_comuna: req.body.nom_comuna
        };
        /* llama a la funcion en el dao y le envia el objeto comuna*/
        ComunaDao.insertComuna(comuna).then(function(comuna) {
            /*si no hay error en la insercion enviar respuesta exitosa*/
            Respuesta.sendJsonResponse(res, 200, comuna)
        }).catch(function(error) {
            /*si  hay error en la insercion enviar respuesta de error*/
            Respuesta.sendJsonResponse(res, 500, error);
        });
    }
    /*funcion consultar tdos los datos de la tabla comuna*/
var findAllComuna = function(req, res) {
    /* llama a la funcion en el dao */
    ComunaDao.findAllComuna().then(function(comuna) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, comuna);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};
/*funcion de actualizar los datos de la comuna*/
var updateComuna = function(req, res) {
    /*recoge el parametro enviado desde la app*/
    var id_comuna = req.params.id_comuna;
    /*objeto que recoge los datos enviados desde la app*/
    var actualizarComuna = {
        nom_comuna: req.body.nom_comuna,
    };
    /* llama a la funcion en el dao y le envia el objeto agenda y el parametro id_comuna*/
    ComunaDao.updateComuna(actualizarComuna, id_comuna, function(comuna, err) {
            if (err) {
                /*si hay error en el modificar enviar respuesta error*/
                Respuesta.sendJsonResponse(res, 500, err);
            }
            if (comuna) {
                /*si no hay error en el modificar enviar respuesta exitosa*/
                Respuesta.sendJsonResponse(res, 200, comuna);
            }
        })
        .catch(function(err) {
            /*si hay error en el modificar enviar respuesta error*/
            Respuesta.sendJsonResponse(res, 500, err);
        });

};
/*funcion eliminar  los datos de la comuna por el id*/
var deleteByIdComuna = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro id_comuna*/
    ComunaDao.deleteByIdComuna(req.params.id_comuna).then(function(comuna) {
        if (comuna == 1) {
            /*si no hay error en el eliminar enviar respuesta exitosa*/
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            /*si  hay error en el eliminar enviar respuesta de error*/
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};
/*funcion consultar un dato en especifico de la tabla comuna*/
var findByIdComuna = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro comuna*/
    ComunaDao.findByIdComuna(req.params.id_comuna).then(function(comuna) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, comuna);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};

/*exportar funciones*/
module.exports.insertComuna = insertComuna;
module.exports.findAllComuna = findAllComuna;
module.exports.updateComuna = updateComuna;
module.exports.deleteByIdComuna = deleteByIdComuna;
module.exports.findByIdComuna = findByIdComuna;