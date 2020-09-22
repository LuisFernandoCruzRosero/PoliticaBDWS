/*llamando al archivo DAO*/
var LugarMesaDao = require("../../app_core/dao/LugarMesaDao");
/*llamando al archivo respuesta*/
var Respuesta = require("../../app_core/helpers/respuesta");

/*funcion consultar tdos los datos de la tabla lugarMesa*/
var findAllLugarMesa = function(req, res) {
    /* llama a la funcion en el dao */
    LugarMesaDao.findAllLugarMesa().then(function(lugarMesa) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, lugarMesa);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion consultar un dato en especifico de la tabla lugarMesa*/
var findAllByIdLugarMesa = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro lugar*/
    LugarMesaDao.findAllByIdLugarMesa(req.params.id_lugar).then(function(lugarMesa) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, lugarMesa);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};
/*funcion consultar un dato en especifico de la tabla lugarMesa*/
var findByIdLugarMesa = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro lugar*/
    LugarMesaDao.findByIdLugarMesa(req.params.id_lugar, req.params.id_mesa).then(function(lugarMesa) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, lugarMesa);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion de actualizar los datos de la lugarMesa*/
var updateLugarMesa = function(req, res) {
        /*recoge el parametro enviado desde la app*/
        var id_lugar_mesa = req.params.id_lugar_mesa;
        /*objeto que recoge los datos enviados desde la app*/
        var actualizar = {
            id_lugar: req.body.id_lugar,
            id_mesa: req.body.id_mesa,
        };
        /* llama a la funcion en el dao y le envia el objeto agenda y el parametro id_lugar_mesa*/
        LugarMesaDao.updateLugarMesa(actualizar, id_lugar_mesa, function(variable, err) {
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
    /*funcion eliminar  los datos de la agenda por el id*/
var deleteByIdLugarMesa = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro id_lugar_mesa*/
    LugarMesaDao.deleteByIdLugarMesa(req.params.id_lugar_mesa).then(function(lugarMesa) {
        /*si no hay error en el eliminar enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, lugarMesa);
    }).catch(function(error) {
        /*si  hay error en el eliminar enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};

/*funcion para insertar un dato en la tabla LugarMesa */
var insertLugarMesa = function(req, res) {
    /*objeto que recoge los datos enviados desde la app*/
    var lugarMesa = {
        id_lugar: req.body.id_lugar,
        id_mesa: req.body.id_mesa,
    };
    /* llama a la funcion en el dao y le envia el objeto lugarMesa*/
    LugarMesaDao.insertLugarMesa(lugarMesa).then(function(lugarMesa) {
        /*si no hay error en la insercion enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, lugarMesa)
    }).catch(function(error) {
        /*si  hay error en la insercion enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

/* funcion consultar cantidad de datos en la tabla Mesa */
var findByIdTotalLugarMesa = function(req, res) {
    /* llama a la funcion en el dao */
    LugarMesaDao.findByIdTotalLugarMesa().then(function(mesa) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, mesa);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};

/*exportar funciones*/
module.exports.deleteByIdLugarMesa = deleteByIdLugarMesa;
module.exports.insertLugarMesa = insertLugarMesa;
module.exports.updateLugarMesa = updateLugarMesa;
module.exports.findByIdLugarMesa = findByIdLugarMesa;
module.exports.findAllByIdLugarMesa = findAllByIdLugarMesa;
module.exports.findAllLugarMesa = findAllLugarMesa;
module.exports.findByIdTotalLugarMesa = findByIdTotalLugarMesa;