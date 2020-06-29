var Models = require("../models/index");
var sequelize = Models.sequelize;

var findAllTipoUsuario = function() {
    return Models.TipoUsuario.findAll({
        order: [
            ['nom_tipo_usu', 'ASC']
        ],
    });
};

module.exports.findAllTipoUsuario = findAllTipoUsuario;