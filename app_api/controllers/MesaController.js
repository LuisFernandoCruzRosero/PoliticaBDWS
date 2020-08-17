/*llamando al archivo DAO*/
var MesaDao = require("../../app_core/dao/MesaDao");
/*llamando al archivo respuesta*/
var Respuesta = require("../../app_core/helpers/respuesta");

/*funcion para insertar un dato en la tabla mesa*/
var insertMesa = function(req, res) {
        /*objeto que recoge los datos enviados desde la app*/
        var mesa = {
            nom_mesa: req.body.nom_mesa
        };
        /* llama a la funcion en el dao y le envia el objeto mesa*/
        MesaDao.insertMesa(mesa).then(function(mesa) {
            /*si no hay error en la insercion enviar respuesta exitosa*/
            Respuesta.sendJsonResponse(res, 200, mesa)
        }).catch(function(error) {
            /*si  hay error en la insercion enviar respuesta de error*/
            Respuesta.sendJsonResponse(res, 500, error);
        });
    }
    /*funcion consultar tdos los datos de la tabla mesa*/
var findAllMesa = function(req, res) {
    /* llama a la funcion en el dao */
    MesaDao.findAllMesa().then(function(mesa) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, mesa);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion de actualizar los datos de la tabla mesa*/
var updateMesa = function(req, res) {
    /*recoge el parametro enviado desde la app*/
    var id_mesa = req.params.id_mesa;
    /*objeto que recoge los datos enviados desde la app*/
    var actualizarMesa = {
        nom_mesa: req.body.nom_mesa,
    };
    /* llama a la funcion en el dao y le envia el objeto agenda y el parametro id_mesa*/
    MesaDao.updateMesa(actualizarMesa, id_mesa, function(mesa, err) {
            if (err) {
                /*si hay error en el modificar enviar respuesta error*/
                Respuesta.sendJsonResponse(res, 500, err);
            }
            if (mesa) {
                /*si no hay error en el modificar enviar respuesta exitosa*/
                Respuesta.sendJsonResponse(res, 200, mesa);
            }
        })
        .catch(function(err) {
            /*si hay error en el modificar enviar respuesta error*/
            Respuesta.sendJsonResponse(res, 500, err);
        });

};
/*funcion eliminar  los datos de la agenda por el id*/
var deleteByIdMesa = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro id_mesa*/
    MesaDao.deleteByIdMesa(req.params.id_mesa).then(function(mesa) {
        if (mesa == 1) {
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

/*funcion consultar tdos los datos de la tabla mesa*/
var findByIdMesa = function(req, res) {
    /* llama a la funcion en el dao */
    MesaDao.findByIdMesa(req.params.nom_mesa).then(function(mesa) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, mesa);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};

/* funcion consultar cantidad de datos en la tabla Mesa */
var findByIdTotalMesa = function(req, res) {
    /* llama a la funcion en el dao */
    MesaDao.findByIdTotalMesa().then(function(mesa) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, mesa);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};

/*exportar funciones*/
module.exports.insertMesa = insertMesa;
module.exports.findAllMesa = findAllMesa;
module.exports.updateMesa = updateMesa;
module.exports.deleteByIdMesa = deleteByIdMesa;
module.exports.findByIdMesa = findByIdMesa;
module.exports.findByIdTotalMesa = findByIdTotalMesa;