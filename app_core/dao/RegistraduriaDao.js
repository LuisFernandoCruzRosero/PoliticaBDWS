var Models = require("../models/index");
var sequelize = Models.sequelize;

/*Insertar un dato en la tabla registraduria*/
var insertRegistraduria = function(registraduria) {
    return Models.Registraduria.create({
        id_lugar: registraduria.id_lugar,
        total: registraduria.total,
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

/*consultar todos los datos de la tabla registraduria ordenados por id*/
var findAllRegistraduriaLugar = function(id_lugar) {
    return Models.Registraduria.findAll({
        where: {
            id_lugar: id_lugar
        },
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

/* modificar un dato de la tabla Registraduria */
var updateRegistraduria = function(registraduria, id_registraduria, callback) {
    return Models.Registraduria.find({
            where: {
                id_registraduria: id_registraduria
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        total: registraduria.total,
                    })
                    .then(function(RegistraduriaActualizada) {
                        Models.Registraduria.findById(RegistraduriaActualizada.id_registraduria)
                            .then(function(resultadoFinal) {
                                callback(resultadoFinal, null);
                            })
                            .catch(function(err) {
                                callback(null, err);
                            });
                    })
                    .catch(function(err) {
                        callback(null, err);
                    });
            } else {
                callback(null, { "error": "no existe el elemento a actualizar" });
            }
        })
        .catch(function(err) {
            callback(null, err)
        });
};

/*consulta un dato de la tabla barrio en especifico*/
var findByIdRegistraduria = function(id_registraduria) {
    return Models.Registraduria.findAll({
        where: {
            id_registraduria: id_registraduria
        }
    });
};

module.exports.insertRegistraduria = insertRegistraduria;
module.exports.findAllRegistraduria = findAllRegistraduria;
module.exports.deleteByIdRegistraduria = deleteByIdRegistraduria;
module.exports.findByIdRegistraduria = findByIdRegistraduria;
module.exports.updateRegistraduria = updateRegistraduria;
module.exports.findAllRegistraduriaLugar = findAllRegistraduriaLugar;