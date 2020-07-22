var Models = require("../models/index");
var sequelize = Models.sequelize;
/*Insertar un dato en la tabla agenda*/
var insertAgenda = function(agenda) {
    return Models.Agenda.create({
        fecha: agenda.fecha,
        lugar: agenda.hora,
        descripcion: agenda.descripcion,
        id_usuario: agenda.id_usuario,
    });
};
/*consultar todos los datos de la agenda*/
var findAllAgenda = function() {
    return Models.Agenda.findAll({});
};
/*eliminar un dato de la agenda*/
var deleteByIdAgenda = function(id_agenda) {
    return Models.Agenda.destroy({
        where: {
            id_agenda: id_agenda
        }
    });
};

/*modificar un dato de la agenda*/
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

/*consulta los datos de la agenda filtrados por usuarios*/
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
/*consulta un dato de la agenda en especifico*/
var findByIdAgenda = function(id_agenda) {
    return Models.Agenda.findAll({
        where: {
            id_agenda: id_agenda
        }
    });
};

/*consulta los datos de la agenda filtrados por fecha*/
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