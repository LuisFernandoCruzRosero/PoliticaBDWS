/*llamando al archivo DAO*/
var LugarDao = require("../../app_core/dao/LugarDao");
/*llamando al archivo respuesta*/
var Respuesta = require("../../app_core/helpers/respuesta");

/*funcion para insertar un dato en la tabla lugar*/
var insertLugar = function(req, res) {
    /*objeto que recoge los datos enviados desde la app*/
    var lugar = {
        nom_lugar: req.body.nom_lugar,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        zona_roja: req.body.zona_roja,
        id_comunaL: req.body.id_comunaL,
    };
    /* llama a la funcion en el dao y le envia el objeto lugar*/
    LugarDao.insertLugar(lugar).then(function(lugar) {
        /*si no hay error en la insercion enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, lugar)
    }).catch(function(error) {
        /*si  hay error en la insercion enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error);
    });
};
/*funcion consultar tdos los datos de la tabla lugar*/
var findAllLugar = function(req, res) {
    /* llama a la funcion en el dao */
    LugarDao.findAllLugar().then(function(lugar) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, lugar);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*funcion de actualizar los datos de la tabla lugar*/
var updateLugar = function(req, res) {
    /*recoge el parametro enviado desde la app*/
    var id_lugar = req.params.id_lugar;
    /*objeto que recoge los datos enviados desde la app*/
    var actualizar = {
        nom_lugar: req.body.nom_lugar,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        zona_roja: req.body.zona_roja,
        id_comunaL: req.body.id_comunaL,
    };
    /* llama a la funcion en el dao y le envia el objeto agenda y el parametro id_lugar*/
    LugarDao.updateLugar(actualizar, id_lugar, function(lugar, err) {
            if (err) {
                /*si hay error en el modificar enviar respuesta error*/
                Respuesta.sendJsonResponse(res, 500, err);
            }
            if (lugar) {
                /*si no hay error en el modificar enviar respuesta exitosa*/
                Respuesta.sendJsonResponse(res, 200, lugar);
            }
        })
        .catch(function(err) {
            /*si hay error en el modificar enviar respuesta error*/
            Respuesta.sendJsonResponse(res, 500, err);
        });

};
/*funcion eliminar  los datos de la tabla lugar por el id*/
var deleteByIdLugar = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro id_lugar*/
    LugarDao.deleteByIdLugar(req.params.id_lugar).then(function(lugar) {
        if (lugar == 1) {
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
/*funcion consultar un dato en especifico de la tabla lugar*/
var findByIdLugar = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro lugar*/
    LugarDao.findByIdLugar(req.params.id_lugar).then(function(lugar) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, lugar);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};
/*funcion consultar los datos de la tabla lugar filtrados por medio de la comuna*/
var findAllLugarComuna = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro comuna*/
    LugarDao.findAllLugarComuna(req.params.id_comunaL).then(function(lugar) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, lugar);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};
/*exportar funciones*/
module.exports.insertLugar = insertLugar;
module.exports.findAllLugar = findAllLugar;
module.exports.deleteByIdLugar = deleteByIdLugar;
module.exports.updateLugar = updateLugar;
module.exports.findAllLugarComuna = findAllLugarComuna;
module.exports.findByIdLugar = findByIdLugar;