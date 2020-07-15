var ContabilidadDao = require("../../app_core/dao/ContabilidadDao");
var Respuesta = require("../../app_core/helpers/respuesta");

var insertContabilidad = function(req, res) {
    var contabilidad = {
        id_usuario: req.body.id_usuario,
        descripcion: req.body.descripcion,
        valor: req.body.valor,
        identificaacion: req.body.identificaacion,
        nombre: req.body.nombre,
    };
    ContabilidadDao.insertContabilidad(contabilidad).then(function(contabilidad) {
        Respuesta.sendJsonResponse(res, 200, contabilidad)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

var findAllContabilidad = function(req, res) {
    ContabilidadDao.findAllContabilidad().then(function(contabilidad) {
        Respuesta.sendJsonResponse(res, 200, contabilidad);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var updateContabilidad = function(req, res) {
    var id_contabilidad = req.params.id_contabilidad;
    var actualizar = {
        id_usuario: req.body.id_usuario,
        descripcion: req.body.descripcion,
        valor: req.body.valor,
        identificaacion: req.body.identificaacion,
        nombre: req.body.nombre,
    };
    ContabilidadDao.updateUsuario(actualizar, id_contabilidad, function(variable, err) {
            if (err) {
                Respuesta.sendJsonResponse(res, 500, err);
            }
            if (variable) {
                Respuesta.sendJsonResponse(res, 200, variable);
            }
        })
        .catch(function(err) {
            Respuesta.sendJsonResponse(res, 500, err);
        });

};

var deleteByIdContabilidad = function(req, res) {
    ContabilidadDao.deleteByIdContabilidad(req.params.id_contabilidad).then(function(contabilidad) {
        if (contabilidad == 1) {
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

var findAllContabilidadIdentificacion = function(req, res) {
    ContabilidadDao.findAllContabilidadIdentificacion(req.params.identificacion).then(function(contabilidad) {
        Respuesta.sendJsonResponse(res, 200, contabilidad);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findByIdContabilidad = function(req, res) {
    ContabilidadDao.findByIdContabilidad(req.params.id_contabilidad).then(function(contabilidad) {
        Respuesta.sendJsonResponse(res, 200, contabilidad);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

module.exports.insertContabilidad = insertContabilidad;
module.exports.findAllContabilidad = findAllContabilidad;
module.exports.updateContabilidad = updateContabilidad;
module.exports.deleteByIdContabilidad = deleteByIdContabilidad;
module.exports.findAllContabilidadIdentificacion = findAllContabilidadIdentificacion;
module.exports.findByIdContabilidad = findByIdContabilidad;