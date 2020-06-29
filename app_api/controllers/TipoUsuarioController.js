var TipoDeUsuarioDao = require("../../app_core/dao/TipoDeUsuarioDao");
var Respuesta = require("../../app_core/helpers/respuesta");

var findAllTipoUsuario = function(req, res) {
    TipoDeUsuarioDao.findAllTipoUsuario().then(function(usuario) {
        Respuesta.sendJsonResponse(res, 200, usuario);
    }).catch(function(error) {
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

module.exports.findAllTipoUsuario = findAllTipoUsuario;