var Models = require("../models/index");
var sequelize = Models.sequelize;

var insertAgenda = function(agenda) {
    return Models.Agenda.create({
        fecha: agenda.fecha,
        lugar: agenda.hora,
        descripcion: agenda.descripcion,
        id_usuario: agenda.id_usuario,
    });
};

var findAllAgenda = function() {
    return Models.Agenda.findAll({});
};

var deleteByIdAgenda = function(id_agenda) {
    return Models.Agenda.destroy({
        where: {
            id_agenda: id_agenda
        }
    });
};


var updateAgenda = function(agenda, id_agenda, callback) {
    return Models.Agenda.find({
            where: {
                id_agenda: id_agenda
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        fecha: agenda.fecha,
                        lugar: agenda.hora,
                        descripcion: agenda.descripcion,
                        id_usuario: agenda.id_usuario,
                    })
                    .then(function(agendaActualizada) {
                        Models.Agenda.findById(agendaActualizada.id_agenda)
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


var findAllAgendaUsuario = function(id_usuario) {
    return Models.Agenda.findAll({
        where: {
            id_usuario: id_usuario
        },
        order: [
            ['id_agenda', 'ASC']
        ],
    });
};

var findByIdAgenda = function(id_agenda) {
    return Models.Agenda.findAll({
        where: {
            id_agenda: id_agenda
        }
    });
};


var findAllAgendaFecha = function(fecha) {
    return Models.Agenda.findAll({
        where: {
            fecha: fecha
        },
        order: [
            ['id_agenda', 'ASC']
        ],
    });
};

module.exports.insertAgenda = insertAgenda;
module.exports.findAllAgenda = findAllAgenda;
module.exports.deleteByIdAgenda = deleteByIdAgenda;
module.exports.updateAgenda = updateAgenda;
module.exports.findAllAgendaUsuario = findAllAgendaUsuario;
module.exports.findAllAgendaFecha = findAllAgendaFecha;
module.exports.findByIdAgenda = findByIdAgenda;