var Models = require("../models/index");
var sequelize = Models.sequelize;


/*Insertar un dato en la tabla barrio*/

var insertBarrio = function(barrio) {
    return Models.Barrio.create({
        nom_barrio: barrio.nom_barrio,
        latitud: barrio.latitud,
        longitud: barrio.longitud,
        zona_roja: barrio.zona_roja,
        id_comunaB: barrio.id_comunaB,
    });
}

/*consultar todos los datos de la tabla barrio ordenados por nombre*/
var findAllBarrio = function() {
    return Models.Barrio.findAll({
        order: [
            ['nom_barrio', 'ASC']
        ],
    });
};

/*modificar un dato de la tabla barrio*/
var updateBarrio = function(barrio, id_barrio, callback) {
    return Models.Barrio.find({
            where: {
                id_barrio: id_barrio
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        nom_barrio: barrio.nom_barrio,
                        latitud: barrio.latitud,
                        longitud: barrio.longitud,
                        zona_roja: barrio.zona_roja,
                        id_comunaB: barrio.id_comunaB,
                    })
                    .then(function(barrioActualizada) {
                        Models.Barrio.findById(barrioActualizada.id_barrio)
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

/*eliminar un dato de la tabla barrio*/
var deleteByIdBarrio = function(id_barrio) {
    return Models.Barrio.destroy({
        where: {
            id_barrio: id_barrio
        }
    });
};

/*consulta los datos de la tabla barrio filtrados por comuna*/
var findAllBarrioComuna = function(id_comunaB) {
    return Models.Barrio.findAll({
        where: {
            id_comunaB: id_comunaB
        },
        order: [
            ['nom_barrio', 'ASC']
        ],
    });
};

/*consulta un dato de la tabla barrio en especifico*/
var findByIdBarrio = function(nom_barrio) {
    return Models.Barrio.findAll({
        where: {
            nom_barrio: nom_barrio
        }
    });
};

/*consulta los barrios por zona roja */
var findAllByIdBarrioZona = function(zona_roja) {
    return Models.Barrio.findAll({
        where: {
            zona_roja: zona_roja
        }
    });
};

/* Consulta el numero total de datos de la tabla barrio */
var findByIdTotalBarrio = function() {
    return Models.Barrio.count({
        col: 'id_barrio'
    })
}

module.exports.insertBarrio = insertBarrio;
module.exports.findAllBarrio = findAllBarrio;
module.exports.updateBarrio = updateBarrio;
module.exports.deleteByIdBarrio = deleteByIdBarrio;
module.exports.findAllBarrioComuna = findAllBarrioComuna;
module.exports.findByIdBarrio = findByIdBarrio;
module.exports.findByIdTotalBarrio = findByIdTotalBarrio;
module.exports.findAllByIdBarrioZona = findAllByIdBarrioZona;