var VotanteDao = require("../../app_core/dao/VotanteDao");
var Respuesta = require("../../app_core/helpers/respuesta");


var findAllVotante = function(req, res) {
    VotanteDao.findAllVotante().then(function(votante) {
        Respuesta.sendJsonResponse(res, 200, votante);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var updateVotante = function(req, res) {
    var id_votante = req.params.id_votante;
    var actualizar = {
        ced_votante: req.body.ced_votante,
        id_lider: req.body.id_lider,
        nom_votante: req.body.nom_votante,
        id_mesa: req.body.id_mesa,
        id_usuario: req.body.id_usuario,
        id_barrio: req.body.id_barrio,
        tel_votante: req.body.tel_votante,
        id_comunaB: req.body.id_comunaB,
        id_comunaL: req.body.id_comunaL,
        activo: req.body.activo,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
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

var findByIdVotante = function(req, res) {
    VotanteDao.findByIdVotante(req.params.id_votante).then(function(votante) {
        Respuesta.sendJsonResponse(res, 200, votante);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, { "error": 'se ha producido un error en la consulta' });
    });
};


var insertVotante = function(req, res) {
    var votante = {
        ced_votante: req.body.ced_votante,
        id_lider: req.body.id_lider,
        nom_votante: req.body.nom_votante,
        id_mesa: req.body.id_mesa,
        id_usuario: req.body.id_usuario,
        id_barrio: req.body.id_barrio,
        tel_votante: req.body.tel_votante,
        id_comunaB: req.body.id_comunaB,
        id_comunaL: req.body.id_comunaL,
        activo: req.body.activo,
        municipio: req.body.municipio,
        departamento: req.body.departamento,
    };
    VotanteDao.insertVotante(votante).then(function(votante) {
        Respuesta.sendJsonResponse(res, 200, votante)
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
}

var deleteByIdVotante = function(req, res) {
    VotanteDao.deleteByIdVotante(req.params.id_votante).then(function(votante) {
        if (votante == 1) {
            Respuesta.sendJsonResponse(res, 200, { "mensaje": "registro eliminado" });
        } else {
            Respuesta.sendJsonResponse(res, 404, { "mensaje": "registro no encontrado" });
        }
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error);
    });
};

var findAllVotanteComunaBarrio = function(req, res) {
    VotanteDao.findAllVotanteComunaBarrio(req.params.id_comunaB).then(function(votante) {
        Respuesta.sendJsonResponse(res, 200, votante);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllVotanteComunaLugar = function(req, res) {
    VotanteDao.findAllVotanteComunaLugar(req.params.id_comunaL).then(function(votante) {
        Respuesta.sendJsonResponse(res, 200, votante);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllVotanteLugar = function(req, res) {
    VotanteDao.findAllVotanteLugar(req.params.id_lugar).then(function(votante) {
        Respuesta.sendJsonResponse(res, 200, votante);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllVotanteBarrio = function(req, res) {
    VotanteDao.findAllVotanteBarrio(req.params.id_barrio).then(function(votante) {
        Respuesta.sendJsonResponse(res, 200, votante);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllVotanteUsuario = function(req, res) {
    VotanteDao.findAllVotanteUsuario(req.params.id_usuario).then(function(votante) {
        Respuesta.sendJsonResponse(res, 200, votante);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findAllVotanteLider = function(req, res) {
    VotanteDao.findAllVotanteLider(req.params.id_lider).then(function(votante) {
        Respuesta.sendJsonResponse(res, 200, votante);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

var findByIVotanteCedula = function(req, res) {
    VotanteDao.findByIVotanteCedula(req.params.ced_votante).then(function(votante) {
        Respuesta.sendJsonResponse(res, 200, votante);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

module.exports.findAllVotante = findAllVotante;
module.exports.updateVotante = updateVotante;
module.exports.findByIdVotante = findByIdVotante;
module.exports.insertVotante = insertVotante;
module.exports.deleteByIdVotante = deleteByIdVotante;
module.exports.findAllVotanteComunaBarrio = findAllVotanteComunaBarrio;
module.exports.findAllVotanteComunaLugar = findAllVotanteComunaLugar;
module.exports.findAllVotanteBarrio = findAllVotanteBarrio;
module.exports.findAllVotanteLugar = findAllVotanteLugar;
module.exports.findAllVotanteLider = findAllVotanteLider;
module.exports.findAllVotanteUsuario = findAllVotanteUsuario;
module.exports.findByIVotanteCedula = findByIVotanteCedula;