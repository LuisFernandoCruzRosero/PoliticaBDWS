var Models = require("../models/index");
var sequelize = Models.sequelize;
/*consultar todos los datos de la tabla tipodeusuario ordenados por nombre*/
var findAllTipoUsuario = function() {
    return Models.TipoUsuario.findAll({
        order: [
            ['nom_tipo_usuario', 'ASC']
        ],
    });
};

module.exports.findAllTipoUsuario = findAllTipoUsuario;