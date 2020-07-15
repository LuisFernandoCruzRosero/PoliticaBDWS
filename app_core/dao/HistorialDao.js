var Models = require("../models/index");
var sequelize = Models.sequelize;

var insertHistorial = function(historial) {
    return Models.Historial.create({
        fec_historial: historial.fec_historial,
        id_lugar: historial.id_lugar,
        total: historial.total,
    });
};


var findAllHistorial = function() {
    return Models.Historial.findAll({
        order: [
            ['fec_historial', 'ASC']
        ],
    });
};

var findAllHistorialLugar = function(id_lugar) {
    return Models.Historial.findAll({
        where: {
            id_lugar: id_lugar
        },
        order: [
            ['id_historial', 'ASC']
        ],
    });
};

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

var findByIdHistorial = function(id_historial) {
    return Models.Historial.find({
        where: {
            id_historial: id_historial
        }
    });
};

module.exports.insertHistorial = insertHistorial;
module.exports.findAllHistorial = findAllHistorial;
module.exports.findAllHistorialLugar = findAllHistorialLugar;
module.exports.findAllHistorialFecha = findAllHistorialFecha;
module.exports.findByIdHistorial = findByIdHistorial;