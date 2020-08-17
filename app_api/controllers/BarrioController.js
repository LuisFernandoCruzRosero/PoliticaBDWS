/*llamando al archivo DAO*/
var BarrioDao = require("../../app_core/dao/BarrioDao");
/*llamando al archivo respuesta*/
var Respuesta = require("../../app_core/helpers/respuesta");

/*funcion para insertar un dato en la tabla barrio*/
var insertBarrio = function(req, res) {
        /*objeto que recoge los datos enviados desde la app*/
        var barrio = {
            nom_barrio: req.body.nom_barrio,
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            zona_roja: req.body.zona_roja,
            id_comunaB: req.body.id_comunaB,
        };
        /* llama a la funcion en el dao y le envia el objeto barrio*/
        BarrioDao.insertBarrio(barrio).then(function(barrio) {
            /*si no hay error en la insercion enviar respuesta exitosa*/
            Respuesta.sendJsonResponse(res, 200, barrio)
        }).catch(function(error) {
            /*si  hay error en la insercion enviar respuesta de error*/
            Respuesta.sendJsonResponse(res, 500, error);
        });
    }
    /*funcion consultar todos los datos de la tabla barrio*/
var findAllBarrio = function(req, res) {
    /* llama a la funcion en el dao */
    BarrioDao.findAllBarrio().then(function(barrio) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, barrio);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};
/*funcion de actualizar los datos de la tabla barrio*/
var updateBarrio = function(req, res) {
    /*recoge el parametro enviado desde la app*/
    var id_barrio = req.params.id_barrio;
    /*objeto que recoge los datos enviados desde la app*/
    var actualizarBarrio = {
        nom_barrio: req.body.nom_barrio,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        zona_roja: req.body.zona_roja,
        id_comunaB: req.body.id_comunaB,
    };

    /* llama a la funcion en el dao y le envia el objeto barrio y el parametro id_barrio*/
    BarrioDao.updateBarrio(actualizarBarrio, id_barrio, function(barrio, err) {
            if (err) {
                /*si hay error en el modificar enviar respuesta error*/
                Respuesta.sendJsonResponse(res, 500, err);
            }
            if (barrio) {
                /*si no hay error en el modificar enviar respuesta exitosa*/
                Respuesta.sendJsonResponse(res, 200, barrio);
            }
        })
        .catch(function(err) {
            /*si hay error en el modificar enviar respuesta error*/
            Respuesta.sendJsonResponse(res, 500, err);
        });

};
/*funcion eliminar  los datos de la tabla barrio por el id*/
var deleteByIdBarrio = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro id_barrio*/
    BarrioDao.deleteByIdBarrio(req.params.id_barrio).then(function(barrio) {
        if (barrio == 1) {
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
/*funcion consultar los datos de la tabla barrio filtrados por medio del comuna*/
var findAllBarrioComuna = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro comuna*/
    BarrioDao.findAllBarrioComuna(req.params.id_comunaB).then(function(barrio) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, barrio);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};
/*funcion consultar un dato en especifico de la agenda*/
var findByIdBarrio = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro barrio*/
    BarrioDao.findByIdBarrio(req.params.nom_barrio).then(function(usuario) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};

/* funcion consultar cantidad de datos en la tabla barrio */
var findByIdTotalBarrio = function(req, res) {
    /* llama a la funcion en el dao */
    BarrioDao.findByIdTotalBarrio().then(function(barrio) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, barrio);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};

/*exportar funciones*/
module.exports.insertBarrio = insertBarrio;
module.exports.findAllBarrio = findAllBarrio;
module.exports.updateBarrio = updateBarrio;
module.exports.deleteByIdBarrio = deleteByIdBarrio;
module.exports.findAllBarrioComuna = findAllBarrioComuna;
module.exports.findByIdBarrio = findByIdBarrio;
module.exports.findByIdTotalBarrio = findByIdTotalBarrio;