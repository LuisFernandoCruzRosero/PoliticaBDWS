var Models = require("../models/index");
var sequelize = Models.sequelize;

/*Insertar un dato en la tabla historial*/
var insertHistorial = function(historial) {
    return Models.Historial.create({
        fec_historial: historial.fec_historial,
        total: historial.total,
        ced_candidato: historial.ced_candidato,
        nom_candidato: historial.nom_candidato,
    });
};

/*consultar todos los datos de la tabla historial ordenados por fecha*/
var findAllHistorial = function() {
    return Models.Historial.findAll({
        order: [
            ['fec_historial', 'ASC']
        ],
    });
};

/*consulta los datos de la tabla historial filtrados por lugar*/
var findAllHistorialCedula = function(ced_candidato) {
    return Models.Historial.findAll({
        where: {
            ced_candidato: ced_candidato
        },
        order: [
            ['id_historial', 'ASC']
        ],
    });
};

/*consulta los datos de la tabla historial filtrados por lugar*/
var findAllHistorialNombre = function(nom_candidato) {
    return Models.Historial.findAll({
        where: {
            nom_candidato: nom_candidato
        },
        order: [
            ['id_historial', 'ASC']
        ],
    });
};

/*consulta los datos de la tabla historial filtrados por fecha*/
var findAllHistorialFecha = function(fec_historial) {
    return Models.Historial.findAll({
        where: {
            fec_historial: fec_historial
        },
        order: [
            ['id_historial', 'ASC']
        ],
    });
};
/*consulta un dato de la tabla historial en especifico*/
var findByIdHistorial = function(id_historial) {
    return Models.Historial.findAll({
        where: {
            id_historial: id_historial
        }
    });
};

/*modificar un dato de la tabla historial */
var updateHistorial = function(historial, id_historial, callback) {
    return Models.Historial.find({
            where: {
                id_historial: id_historial
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        fec_historial: historial.fec_historial,
                        total: historial.total,
                        ced_candidato: historial.ced_candidato,
                        nom_candidato: historial.nom_candidato,
                    })
                    .then(function(historialActualizada) {
                        Models.Digitador.findById(historialActualizada.id_historial)
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

/*eliminar un dato en la tabla usuario*/
var deleteByIdHistoral = function(id_historial) {
    return Models.Historial.destroy({
        where: {
            id_historial: id_historial
        }
    });
};

module.exports.insertHistorial = insertHistorial;
module.exports.findAllHistorial = findAllHistorial;
module.exports.findAllHistorialCedula = findAllHistorialCedula;
module.exports.findAllHistorialFecha = findAllHistorialFecha;
module.exports.findByIdHistorial = findByIdHistorial;
module.exports.updateHistorial = updateHistorial;
module.exports.deleteByIdHistoral = deleteByIdHistoral;
module.exports.findAllHistorialNombre = findAllHistorialNombre;