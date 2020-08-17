var Models = require("../models/index");
var sequelize = Models.sequelize;

/*Insertar un dato en la tabla comuna*/
var insertComuna = function(comuna) {
        return Models.Comuna.create({
            nom_comuna: comuna.nom_comuna
        });
    }
    /*consultar todos los datos de la tabla comuna de manera ordena */
var findAllComuna = function() {
    return Models.Comuna.findAll({
        order: [
            ['nom_comuna', 'ASC']
        ],
    });
};

/*modificar un dato de la tabla comuna*/
var updateComuna = function(comuna, id_comuna, callback) {
    return Models.Comuna.find({
            where: {
                id_comuna: id_comuna
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        nom_comuna: comuna.nom_comuna,
                    })
                    .then(function(comunaActualizada) {
                        Models.Comuna.findById(comunaActualizada.id_comuna)
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
}

/*eliminar un dato de la tabla comuna*/
var deleteByIdComuna = function(id_comuna) {
    return Models.Comuna.destroy({
        where: {
            id_comuna: id_comuna
        }
    });
};

/*consulta un dato de la tabla comuna en especifico*/
var findByIdComuna = function(id_comuna) {
    return Models.Comuna.findAll({
        where: {
            id_comuna: id_comuna
        }
    });
};

/* Consulta el numero total de datos de la tabla barrio */
var findByIdTotalComuna = function() {
    return Models.Comuna.count({
        col: 'id_comuna'
    })
}

module.exports.insertComuna = insertComuna;
module.exports.findAllComuna = findAllComuna;
module.exports.updateComuna = updateComuna;
module.exports.deleteByIdComuna = deleteByIdComuna;
module.exports.findByIdComuna = findByIdComuna;
module.exports.findByIdTotalComuna = findByIdTotalComuna;