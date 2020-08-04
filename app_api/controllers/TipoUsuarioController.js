/*llamando al archivo DAO*/
var TipoDeUsuarioDao = require("../../app_core/dao/TipoDeUsuarioDao");
/*llamando al archivo respuesta*/
var Respuesta = require("../../app_core/helpers/respuesta");

/*funcion consultar tdos los datos de la agenda*/
var findAllTipoUsuario = function(req, res) {
    /* llama a la funcion en el dao */
    TipoDeUsuarioDao.findAllTipoUsuario().then(function(tipoUsuario) {
        /*si no hay error en la consulta enviar respuesta exitosa*/
        Respuesta.sendJsonResponse(res, 200, tipoUsuario);
    }).catch(function(error) {
        /*si  hay error en la consulta enviar respuesta de error*/
        Respuesta.sendJsonResponse(res, 500, error)
    });
};

/*exportar funciones*/
module.exports.findAllTipoUsuario = findAllTipoUsuario;