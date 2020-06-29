var Models = require("../models/index");
var sequelize = Models.sequelize;

var findAllSector = function() {
    return Models.Sector.findAll({
        order: [
            ['nom_sec', 'ASC']
        ],
    });
};

var buscarPorComuna = function(id_comuna) {
    return Models.Sector.findAll({
        where: {
            id_comuna: id_comuna
        },
        order: [
            ['nom_sec', 'ASC']
        ],
    });
};

var buscarPorIdSector = function(id_sector) {
    return Models.Sector.findAll({
        where: {
            id_sector: id_sector
        },
        order: [
            ['nom_sec', 'ASC']
        ],
    });
};

var findById = function(id_sector) {
    return Models.Sector.find({
        where: {
            id_sector: id_sector
        }
    });
};

var updateSector = function(sector, id_sector, callback) {
    return Models.Sector.find({
            where: {
                id_sector: id_sector
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        nom_sec: sector.nom_sec,
                        id_comuna: sector.id_comuna,
                    })
                    .then(function(usuarioActualizada) {
                        Models.Sector.findById(usuarioActualizada.id_sector)
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

var crear = function(sector) {
    return Models.Sector.create({
        id_comuna: sector.id_comuna,
        nom_sec: sector.nom_sec,
    });
}

var deleteById = function(id_sector) {
    return Models.Sector.destroy({
        where: {
            id_sector: id_sector
        }
    });
};

module.exports.findAllSector = findAllSector;
module.exports.updateSector = updateSector;
module.exports.findById = findById;
module.exports.crear = crear;
module.exports.deleteById = deleteById;
module.exports.buscarPorComuna = buscarPorComuna;
module.exports.buscarPorIdSector = buscarPorIdSector;