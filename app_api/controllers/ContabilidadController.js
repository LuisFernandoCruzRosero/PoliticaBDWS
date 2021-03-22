/*llamando al archivo DAO*/
var ContabilidadDao = require("../../app_core/dao/ContabilidadDao");
/*llamando al archivo respuesta*/
var Respuesta = require("../../app_core/helpers/respuesta");

/*funcion para insertar un dato de la tabla contabilidad*/
var insertContabilidad = function(req, res) {
    var contabilidad = {
        id_usuario: req.body.id_usuario,
        descripcion: req.body.descripcion,
        valor: req.body.valor,
        identificacion: req.body.identificacion,
        nombre: req.body.nombre,
    };
    /* llama a la funcion en el dao y le envia el objeto contabilidad*/
    ContabilidadDao.insertContabilidad(contabilidad).then(function(contabilidad) {
        /*si no hay error en la insercion enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, contabilidad)
    }).catch(function(error) {
        /*si  hay error en la insercion enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error);
    });
};
/*funcion consultar tdos los datos de la tabla contabilidad*/
var findAllContabilidad = function(req, res) {
    /* llama a la funcion en el dao */
    ContabilidadDao.findAllContabilidad().then(function(contabilidad) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, contabilidad);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};
/*funcion de actualizar los datos de la tabla contabilidad*/
var updateContabilidad = function(req, res) {
    /*recoge el parametro enviado desde la app*/
    var id_contabilidad = req.params.id_contabilidad;
    /*objeto que recoge los datos enviados desde la app*/
    var actualizar = {
        id_usuario: req.body.id_usuario,
        descripcion: req.body.descripcion,
        valor: req.body.valor,
        identificacion: req.body.identificacion,
        nombre: req.body.nombre,
    };
    /* llama a la funcion en el dao y le envia el objeto contabilidad y el parametro id_contabilidad*/
    ContabilidadDao.updateContabilidad(actualizar, id_contabilidad, function(variable, err) {
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
/*funcion eliminar  los datos de la tabla contabilidad por el id*/
var deleteByIdContabilidad = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro id_contabilidad*/
    ContabilidadDao.deleteByIdContabilidad(req.params.id_contabilidad).then(function(contabilidad) {
        if (contabilidad == 1) {
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
/*funcion consultar tdos los datos de la tabla contabilidad*/
var findAllContabilidadIdentificacion = function(req, res) {
    /* llama a la funcion en el dao */
    ContabilidadDao.findAllContabilidadIdentificacion(req.params.identificacion).then(function(contabilidad) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, contabilidad);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};
/*funcion consultar un dato en especifico de la tabla contabilidad*/
var findByIdContabilidad = function(req, res) {
    /* llama a la funcion en el dao y le envia el parametro contabilidad*/
    ContabilidadDao.findByIdContabilidad(req.params.id_contabilidad).then(function(contabilidad) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, contabilidad);
    }).catch(function(error) {
        /*si hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};
/*exportar funciones*/
module.exports.insertContabilidad = insertContabilidad;
module.exports.findAllContabilidad = findAllContabilidad;
module.exports.updateContabilidad = updateContabilidad;
module.exports.deleteByIdContabilidad = deleteByIdContabilidad;
module.exports.findAllContabilidadIdentificacion = findAllContabilidadIdentificacion;
module.exports.findByIdContabilidad = findByIdContabilidad;