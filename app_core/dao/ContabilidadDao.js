var Models = require("../models/index");
var sequelize = Models.sequelize;

/*Insertar un dato en la tabla contabilidad*/
var insertContabilidad = function(contabilidad) {
    return Models.Contabilidad.create({
        id_usuario: contabilidad.ced_usu,
        descripcion: contabilidad.descripcion,
        valor: contabilidad.valor,
        identificaacion: contabilidad.identificaacion,
        nombre: contabilidad.nombre,
    });
};
/*consultar todos los datos de la tabla contabilidad ordenados*/
var findAllContabilidad = function() {
    return Models.Contabilidad.findAll({
        order: [
            ['id_contabilidad', 'ASC']
        ],
    });
};

/*modificar un dato de la tabla contabilidad*/
var updateContabilidad = function(contabilidad, id_contabilidad, callback) {
    return Models.Contabilidad.find({
            where: {
                id_contabilidad: id_contabilidad
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        id_usuario: contabilidad.ced_usu,
                        descripcion: contabilidad.descripcion,
                        valor: contabilidad.valor,
                        identificaacion: contabilidad.identificaacion,
                        nombre: contabilidad.nombre,
                    })
                    .then(function(contabilidadActualizada) {
                        Models.Contabilidad.findById(contabilidadActualizada.id_contabilidad)
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

/*eliminar un dato de la tabla contabilidad*/
var deleteByIdContabilidad = function(id_contabilidad) {
    return Models.Contabilidad.destroy({
        where: {
            id_contabilidad: id_contabilidad
        }
    });
};

/*consulta los datos de la tabla contabilidad filtrados por identificacion*/
var findAllContabilidadIdentificacion = function(identificaacion) {
    return Models.Contabilidad.findAll({
        where: {
            identificaacion: identificaacion
        },
        order: [
            ['id_contabilidad', 'ASC']
        ],
    });
};

/*consulta un dato de la tabla contabilidad en especifico*/
var findByIdContabilidad = function(id_contabilidad) {
    return Models.Contabilidad.find({
        where: {
            id_contabilidad: id_contabilidad
        }
    });
};

module.exports.findAllContabilidad = findAllContabilidad;
module.exports.findAllContabilidadIdentificacion = findAllContabilidadIdentificacion;
module.exports.findByIdContabilidad = findByIdContabilidad;
module.exports.updateContabilidad = updateContabilidad;
module.exports.insertContabilidad = insertContabilidad;
module.exports.deleteByIdContabilidad = deleteByIdContabilidad;