var Models = require("../models/index");
var sequelize = Models.sequelize;
/*consulta los datos de la tabla usuario filtrados por candidato*/
var findAllUsuarioCandidato = function() {
    return Models.Usuario.find({
        where: {
            id_tipo_usu: 2
        }
    });
};
/*consulta los datos de la tabla usuario filtrados por candidatocedula*/
var findAllUsuarioCandidatoCedula = function(ced_usuario) {
    return Models.Usuario.find({
        where: {
            id_tipo_usu: 2,
            ced_usuario: ced_usuario
        }
    });
};
/*consulta los datos de la tabla usuario filtrados por administrador*/
var findAllUsuarioAdministrador = function() {
    return Models.Usuario.find({
        where: {
            id_tipo_usu: 1
        }
    });
};
/*consulta los datos de la tabla usuario filtrados por admiistradorcedula*/
var findAllUsuarioAdministradorCedula = function(ced_usuario) {
    return Models.Usuario.find({
        where: {
            id_tipo_usu: 1,
            ced_usuario: ced_usuario
        }
    });
};
/*consulta los datos de la tabla usuario filtrados por coordinador*/
var findAllUsuarioCoordinador = function() {
    return Models.Usuario.findAll({
        where: {
            id_tipo_usuario: 3,
        },
        order: [
            ['nom_usuario', 'ASC']
        ],
    });
};

/*consulta los datos de la tabla usuario filtrados por coordinadorcedula*/
var findAllUsuarioCoordinadorCedula = function(ced_usuario) {
    return Models.Usuario.find({
        where: {
            id_tipo_usuario: 3,
            ced_usuario: ced_usuario
        }
    });
};
/*consultar todos los datos de la tabla usuario ordenados por nombre*/
var findAllUsuario = function() {
    return Models.Usuario.findAll({
        order: [
            ['nom_usuario', 'ASC']
        ],
    });
};
/*consulta los datos de la tabla usuario filtrados por usuariocedula*/
var findAllUsuarioCedula = function(ced_usuario) {
    return Models.Usuario.find({
        where: {
            ced_usuario: ced_usuario
        }
    });
};
/*consulta un dato de la tabla usuario en especifico*/
var findByIdUsuario = function(id_usuario) {
    return Models.Usuario.find({
        where: {
            id_usuario: id_usuario
        }
    });
};
/*modificar un dato de la tabla usuario*/
var updateUsuario = function(usuario, id_usuario, callback) {
    return Models.Usuario.find({
            where: {
                id_usuario: id_usuario
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        ced_usuario: usuario.ced_usuario,
                        nom_usuario: usuario.nom_usuario,
                        id_lugar: usuario.id_lugar,
                        id_mesa: usuario.id_mesa,
                        id_barrio: usuario.id_barrio,
                        login: usuario.login,
                        contrasena: usuario.contrasena,
                        id_tipo_usuario: usuario.id_tipo_usuario,
                        tel_usuario: usuario.tel_usuario,
                        activo: usuario.activo,
                        id_comunaB: usuario.id_comunaB,
                        id_comunaL: usuario.id_comunaL,
                        municipio: usuario.municipio,
                        departamento: usuario.departamento,
                    })
                    .then(function(usuarioActualizada) {
                        Models.Usuario.findById(usuarioActualizada.id_usuario)
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

/*Insertar un dato en la tabla usuario*/
var insertUsuario = function(usuario) {
        return Models.Usuario.create({
            ced_usuario: usuario.ced_usuario,
            nom_usuario: usuario.nom_usuario,
            id_lugar: usuario.id_lugar,
            id_mesa: usuario.id_mesa,
            id_barrio: usuario.id_barrio,
            login: usuario.login,
            contrasena: usuario.contrasena,
            id_tipo_usuario: usuario.id_tipo_usuario,
            tel_usuario: usuario.tel_usuario,
            activo: usuario.activo,
            id_comunaB: usuario.id_comunaB,
            id_comunaL: usuario.id_comunaL,
            municipio: usuario.municipio,
            departamento: usuario.departamento,
        });
    }
    /*eliminar un dato en la tabla usuario*/
var deleteByIdUsuario = function(id_usuario) {
    return Models.Usuario.destroy({
        where: {
            id_usuario: id_usuario
        }
    });
};

/* Consulta el numero total de datos de la tabla coordinador */
var findByIdTotalUsuarioCoordinador = function() {
    return Models.UsuarioCoordinador.count({
        col: 'id_usuario',
        where: {
            id_tipo_usuario: 3
        }
    })
}

module.exports.findAllUsuarioCandidato = findAllUsuarioCandidato;
module.exports.findAllUsuarioCandidatoCedula = findAllUsuarioCandidatoCedula;
module.exports.findAllUsuarioAdministradorCedula = findAllUsuarioAdministradorCedula;
module.exports.findAllUsuarioAdministrador = findAllUsuarioAdministrador;
module.exports.findAllUsuarioCoordinadorCedula = findAllUsuarioCoordinadorCedula;
module.exports.findAllUsuario = findAllUsuario;
module.exports.findAllUsuarioCedula = findAllUsuarioCedula;
module.exports.findByIdUsuario = findByIdUsuario;
module.exports.updateUsuario = updateUsuario;
module.exports.insertUsuario = insertUsuario;
module.exports.deleteByIdUsuario = deleteByIdUsuario;
module.exports.findAllUsuarioCoordinador = findAllUsuarioCoordinador;
module.exports.findByIdTotalUsuarioCoordinador = findByIdTotalUsuarioCoordinador;