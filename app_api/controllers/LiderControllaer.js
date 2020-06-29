var LiderDao = require("../../app_core/dao/LiderDao");
var Respuesta = require("../../app_core/helpers/respuesta");


var findAllLider = function(req, res) {
    LiderDao.findAllLider().then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var updateLider = function(req, res) {
    var id_lider = req.params.id_lider;
    var actualizar = {
        ced_lid: req.body.ced_lid,
        nom_lid: req.body.nom_lid,
        bar_lid: req.body.bar_lid,
        tel_lid: req.body.tel_lid,
        ocupacion: req.body.ocupacion,
        id_comuna: req.body.id_comuna,
        id_sector: req.body.id_sector,
        id_coordinador: req.body.id_coordinador,
        mesa: req.body.mesa,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
        puesto: req.body.puesto,
    };
    LiderDao.updateLider(actualizar, id_lider, function(variable, err) {
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

}

var findById = function(req, res) {
    LiderDao.findById(req.params.id_lider).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};


var crear = function(req, res) {
    var lider = {
        ced_lid: req.body.ced_lid,
        nom_lid: req.body.nom_lid,
        bar_lid: req.body.bar_lid,
        tel_lid: req.body.tel_lid,
        ocupacion: req.body.ocupacion,
        id_comuna: req.body.id_comuna,
        id_sector: req.body.id_sector,
        id_coordinador: req.body.id_coordinador,
        mesa: req.body.mesa,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
        puesto: req.body.puesto,
    };
    LiderDao.crear(lider).then(function(lider) {
        Respuesta.sendJsonResponse(res, 200, lider)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

var deleteById = function(req, res) {
    LiderDao.deleteById(req.params.id_lider).then(function(coordinador) {
        if (coordinador == 1) {
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

var findAllLiderComuna = function(req, res) {
    LiderDao.findAllLiderComuna(req.params.id_comuna).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};


var findAllLiderSector = function(req, res) {
    LiderDao.findAllLiderSector(req.params.id_sector).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllLiderCoordinador = function(req, res) {
    LiderDao.findAllLiderCoordinador(req.params.id_coordinador).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllLiderOcupacion = function(req, res) {
    LiderDao.findAllLiderOcupacion(req.params.ocupacion).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllLiderById = function(req, res) {
    LiderDao.findAllLiderById(req.params.id_lider).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllLiderCedula = function(req, res) {
    LiderDao.findAllLiderCedula(req.params.ced_lid).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

module.exports.findAllLider = findAllLider;
module.exports.updateLider = updateLider;
module.exports.findById = findById;
module.exports.crear = crear;
module.exports.deleteById = deleteById;
module.exports.findAllLiderCoordinador = findAllLiderCoordinador;
module.exports.findAllLiderComuna = findAllLiderComuna;
module.exports.findAllLiderSector = findAllLiderSector;
module.exports.findAllLiderById = findAllLiderById;
module.exports.findAllLiderOcupacion = findAllLiderOcupacion;
module.exports.findAllLiderCedula = findAllLiderCedula;