var Models = require("../models/index");
var sequelize = Models.sequelize;

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

var findAllRegistraduria = function() {
    return Models.Registraduria.findAll({
        order: [
            ['id_registraduria', 'ASC']
        ],
    });
};

var deleteByIdRegistraduria = function(id_registraduria) {
    return Models.Registraduria.destroy({
        where: {
            id_registraduria: id_registraduria
        }
    });
};


var findByIdRegistraduriaCedula = function(ced_registraduria) {
    return Models.Registraduria.find({
        where: {
            ced_registraduria: ced_registraduria
        },
        order: [
            ['nom_registraduria', 'ASC']
        ],
    });
};

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