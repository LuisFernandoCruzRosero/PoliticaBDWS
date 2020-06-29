var Models = require("../models/index");
var sequelize = Models.sequelize;

var findAllLider = function() {
    return Models.Lider.findAll({
        order: [
            ['nom_lid', 'ASC']
        ],
    });
};

var findAllLiderById = function(id_lider) {
    return Models.Lider.findAll({
        where: {
            id_lider: id_lider
        },
        order: [
            ['nom_lid', 'ASC']
        ],
    });
};

var findAllLiderCedula = function(ced_lid) {
    return Models.Lider.findAll({
        where: {
            ced_lid: ced_lid
        },
        order: [
            ['nom_lid', 'ASC']
        ],
    });
};

var findAllLiderOcupacion = function(ocupacion) {
    return Models.Lider.findAll({
        where: {
            ocupacion: ocupacion
        },
        order: [
            ['nom_lid', 'ASC']
        ],
    });
};

var findAllLiderSector = function(id_sector) {
    return Models.Lider.findAll({
        where: {
            id_sector: id_sector
        },
        order: [
            ['nom_lid', 'ASC']
        ],
    });
};

var findAllLiderComuna = function(id_comuna) {
    return Models.Lider.findAll({
        where: {
            id_comuna: id_comuna
        },
        order: [
            ['nom_lid', 'ASC']
        ],
    });
};

var findAllLiderCoordinador = function(id_coordinador) {
    return Models.Lider.findAll({
        where: {
            id_coordinador: id_coordinador
        },
        order: [
            ['nom_lid', 'ASC']
        ],
    });
};

var findById = function(id_lider) {
    return Models.Lider.find({
        where: {
            id_lider: id_lider
        }
    });
};

var updateLider = function(lider, id_lider, callback) {
    return Models.Lider.find({
            where: {
                id_lider: id_lider
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        ced_lid: lider.ced_lid,
                        nom_lid: lider.nom_lid,
                        bar_lid: lider.bar_lid,
                        tel_lid: lider.tel_lid,
                        ocupacion: lider.ocupacion,
                        id_comuna: lider.id_comuna,
                        id_sector: lider.id_sector,
                        id_coordinador: lider.id_coordinador,
                        mesa: lider.mesa,
                        municipio: lider.municipio,
                        departamento: lider.departamento,
                        puesto: lider.puesto,
                    })
                    .then(function(usuarioActualizada) {
                        Models.Lider.findById(usuarioActualizada.id_lider)
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

var crear = function(lider) {
    return Models.Lider.create({
        ced_lid: lider.ced_lid,
        nom_lid: lider.nom_lid,
        bar_lid: lider.bar_lid,
        tel_lid: lider.tel_lid,
        ocupacion: lider.ocupacion,
        id_comuna: lider.id_comuna,
        id_sector: lider.id_sector,
        id_coordinador: lider.id_coordinador,
        mesa: lider.mesa,
        municipio: lider.municipio,
        departamento: lider.departamento,
        puesto: lider.puesto,
    });
}

var deleteById = function(id_lider) {
    return Models.Lider.destroy({
        where: {
            id_lider: id_lider
        }
    });
};

module.exports.findAllLider = findAllLider;
module.exports.updateLider = updateLider;
module.exports.findById = findById;
module.exports.crear = crear;
module.exports.deleteById = deleteById;
module.exports.findAllLiderComuna = findAllLiderComuna;
module.exports.findAllLiderCoordinador = findAllLiderCoordinador;
module.exports.findAllLiderSector = findAllLiderSector;
module.exports.findAllLiderById = findAllLiderById;
module.exports.findAllLiderOcupacion = findAllLiderOcupacion;
module.exports.findAllLiderCedula = findAllLiderCedula;