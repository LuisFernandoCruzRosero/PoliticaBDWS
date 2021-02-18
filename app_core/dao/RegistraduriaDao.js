var Models = require("../models/index");
var sequelize = Models.sequelize;

/*Insertar un dato en la tabla registraduria*/
var insertRegistraduria = function(registraduria) {
    return Models.Registraduria.create({
        ced_registraduria: registraduria.ced_usu,
        nom_registraduria: registraduria.nom_registraduria,
        id_lugar: registraduria.id_lugar,
        id_mesa: registraduria.id_mesa,
        dep_registraduria: registraduria.dep_registraduria,
        mun_registraduria: registraduria.mun_registraduria,
    });
};

/*consultar todos los datos de la tabla registraduria ordenados por id*/
var findAllRegistraduria = function() {
    return Models.Registraduria.findAll({
        order: [
            ['id_registraduria', 'ASC']
        ],
    });
};

/*eliminar un dato de la tabla registraduria*/
var deleteByIdRegistraduria = function(id_registraduria) {
    return Models.Registraduria.destroy({
        where: {
            id_registraduria: id_registraduria
        }
    });
};

/*consulta un dato de la tabla barrio en especifico*/
var findByIdRegistraduriaCedula = function(ced_registraduria) {
    return Models.Registraduria.findAll({
        where: {
            ced_registraduria: ced_registraduria
        },
        order: [
            ['nom_registraduria', 'ASC']
        ],
    });
};
/*consulta un dato de la tabla barrio en especifico*/
var findByIdRegistraduria = function(id_registraduria) {
    return Models.Registraduria.findAll({
        where: {
            id_registraduria: id_registraduria
        },
        order: [
            ['nom_registraduria', 'ASC']
        ],
    });
};

module.exports.insertRegistraduria = insertRegistraduria;
module.exports.findAllRegistraduria = findAllRegistraduria;
module.exports.deleteByIdRegistraduria = deleteByIdRegistraduria;
module.exports.findByIdRegistraduriaCedula = findByIdRegistraduriaCedula;
module.exports.findByIdRegistraduria = findByIdRegistraduria;