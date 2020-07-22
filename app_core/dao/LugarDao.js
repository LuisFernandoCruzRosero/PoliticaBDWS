var Models = require("../models/index");
var sequelize = Models.sequelize;
/*Insertar un dato en la tabla lugar*/
var insertLugar = function(lugar) {
    return Models.Lugar.create({
        nom_lugar: lugar.nom_lugar,
        latitud: lugar.latitud,
        longitud: lugar.longitud,
        zona_roja: lugar.zona_roja,
        id_comunaL: lugar.id_comunaL,
    });
};
/*consultar todos los datos de la tabla lugar ordenados por nombre*/
var findAllLugar = function() {
    return Models.Lugar.findAll({
        order: [
            ['nom_lugar', 'ASC']
        ],
    });
};
/*modificar un dato de la tabla lugar*/
var updateLugar = function(lugar, id_lugar, callback) {
    return Models.Lugar.find({
            where: {
                id_lugar: id_lugar
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        nom_lugar: lugar.nom_lugar,
                        latitud: lugar.latitud,
                        longitud: lugar.longitud,
                        zona_roja: lugar.zona_roja,
                        id_comunaL: lugar.id_comunaL,
                    })
                    .then(function(lugarActualizada) {
                        Models.Lugar.findById(lugarActualizada.id_lugar)
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

/*eliminar un dato de la tabla lugar*/
var deleteByIdLugar = function(id_lugar) {
    return Models.Lugar.destroy({
        where: {
            id_lugar: id_lugar
        }
    });
};

/*consulta los datos de la tabla lugar filtrados por comuna*/
var findAllLugarComuna = function(id_comunaL) {
    return Models.Lugar.findAll({
        where: {
            id_comunaL: id_comunaL
        },
        order: [
            ['nom_lugar', 'ASC']
        ],
    });
};

/*consulta un dato de la tabla lugar en especifico*/
var findByIdLugar = function(id_lugar) {
    return Models.Lugar.findAll({
        where: {
            id_lugar: id_lugar
        }
    });
};

module.exports.insertLugar = insertLugar;
module.exports.findAllLugar = findAllLugar;
module.exports.updateLugar = updateLugar;
module.exports.deleteByIdLugar = deleteByIdLugar;
module.exports.findAllLugarComuna = findAllLugarComuna;
module.exports.findByIdLugar = findByIdLugar;