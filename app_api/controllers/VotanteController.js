var VotanteDao = require("../../app_core/dao/VotanteDao");
var Respuesta = require("../../app_core/helpers/respuesta");


var findAllVotante = function(req, res) {
    VotanteDao.findAllVotante().then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var updateVotante = function(req, res) {
    var id_votante = req.params.id_votante;
    var actualizar = {
        ced_vot: req.body.ced_vot,
        nom_vot: req.body.nom_vot,
        bar_vot: req.body.bar_vot,
        tel_vot: req.body.tel_vot,
        ocupacion: req.body.ocupacion,
        id_comuna: req.body.id_comuna,
        id_sector: req.body.id_sector,
        id_coordinador: req.body.id_coordinador,
        id_lider: req.body.id_lider,
        mesa: req.body.mesa,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
        puesto: req.body.puesto,
    };
    VotanteDao.updateVotante(actualizar, id_votante, function(variable, err) {
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
    VotanteDao.findById(req.params.id_votante).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};


var crear = function(req, res) {
    var votante = {
        ced_vot: req.body.ced_vot,
        nom_vot: req.body.nom_vot,
        bar_vot: req.body.bar_vot,
        tel_vot: req.body.tel_vot,
        ocupacion: req.body.ocupacion,
        id_comuna: req.body.id_comuna,
        id_sector: req.body.id_sector,
        id_coordinador: req.body.id_coordinador,
        id_lider: req.body.id_lider,
        mesa: req.body.mesa,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
        puesto: req.body.puesto,
    };
    VotanteDao.crear(votante).then(function(votante) {
        Respuesta.sendJsonResponse(res, 200, votante)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

var deleteById = function(req, res) {
    VotanteDao.deleteById(req.params.id_votante).then(function(coordinador) {
        if (coordinador == 1) {
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

var findAllVotanteComuna = function(req, res) {
    VotanteDao.findAllVotanteComuna(req.params.id_comuna).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};


var findAllVotanteSector = function(req, res) {
    VotanteDao.findAllVotanteSector(req.params.id_sector).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllVotanteCoordinador = function(req, res) {
    VotanteDao.findAllVotanteCoordinador(req.params.id_coordinador).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllVotanteLider = function(req, res) {
    VotanteDao.findAllVotanteLider(req.params.id_lider).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllVotanteOcupacion = function(req, res) {
    VotanteDao.findAllVotanteOcupacion(req.params.ocupacion).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllVotanteById = function(req, res) {
    VotanteDao.findAllVotanteById(req.params.id_votante).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllVotanteCedula = function(req, res) {
    VotanteDao.findAllVotanteCedula(req.params.ced_vot).then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

module.exports.findAllVotante = findAllVotante;
module.exports.updateVotante = updateVotante;
module.exports.findById = findById;
module.exports.crear = crear;
module.exports.deleteById = deleteById;
module.exports.findAllVotanteCoordinador = findAllVotanteCoordinador;
module.exports.findAllVotanteComuna = findAllVotanteComuna;
module.exports.findAllVotanteSector = findAllVotanteSector;
module.exports.findAllVotanteLider = findAllVotanteLider;
module.exports.findAllVotanteById = findAllVotanteById;
module.exports.findAllVotanteOcupacion = findAllVotanteOcupacion;
module.exports.findAllVotanteCedula = findAllVotanteCedula;