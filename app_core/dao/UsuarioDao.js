var Models = require("../models/index");
var sequelize = Models.sequelize;

var findAllDigitador = function() {
    return Models.Usuario.findAll({
        where: {
            id_tipo_usu: 3
        },
        order: [
            ['nom_usu', 'ASC']
        ],
    });
};

var findAllDigitadorById = function(id_usuario) {
    return Models.Usuario.findAll({
        where: {
            id_tipo_usu: 3,
            id_usuario: id_usuario
        },
        order: [
            ['nom_usu', 'ASC']
        ],
    });
};

var findAllDigitadorCedula = function(ced_usu) {
    return Models.Usuario.findAll({
        where: {
            id_tipo_usu: 3,
            ced_usu: ced_usu
        },
        order: [
            ['nom_usu', 'ASC']
        ],
    });
};

var findAllUsuario = function() {
    return Models.Usuario.findAll({
        order: [
            ['nom_usu', 'ASC']
        ],
    });
};

var findAllUsuarioOcupacion = function(ocupacion) {
    return Models.Usuario.findAll({
        where: {
            ocupacion: ocupacion
        },
        order: [
            ['nom_usu', 'ASC']
        ],
    });
};

var findById = function(id_usuario) {
    return Models.Usuario.find({
        where: {
            id_usuario: id_usuario
        }
    });
};

var updateUsuario = function(usuario, id_usuario, callback) {
    return Models.Usuario.find({
            where: {
                id_usuario: id_usuario
            }
        })
        .then(function(resultado) {
            if (resultado) {
                resultado.updateAttributes({
                        ced_usu: usuario.ced_usu,
                        nom_usu: usuario.nom_usu,
                        bar_usu: usuario.bar_usu,
                        tel_usu: usuario.tel_usu,
                        id_tipo_usu: usuario.id_tipo_usu,
                        activo: usuario.activo,
                        contrasena: usuario.contrasena,
                        ocupacion: usuario.ocupacion,
                        user_usu: usuario.user_usu,
                        mesa: usuario.mesa,
                        municipio: usuario.municipio,
                        departamento: usuario.departamento,
                        puesto: usuario.puesto,
                        id_sector: usuario.id_sector,
                        id_comuna: usuario.id_comuna,
                        id_lider: usuario.id_lider,
                        id_coordinador: usuario.id_coordinador,
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

var crear = function(usuario) {
    return Models.Usuario.create({
        ced_usu: usuario.ced_usu,
        nom_usu: usuario.nom_usu,
        bar_usu: usuario.bar_usu,
        tel_usu: usuario.tel_usu,
        id_tipo_usu: usuario.id_tipo_usu,
        activo: usuario.activo,
        contrasena: usuario.contrasena,
        ocupacion: usuario.ocupacion,
        user_usu: usuario.user_usu,
        mesa: usuario.mesa,
        municipio: usuario.municipio,
        departamento: usuario.departamento,
        puesto: usuario.puesto,
        id_sector: usuario.id_sector,
        id_comuna: usuario.id_comuna,
        id_lider: usuario.id_lider,
        id_coordinador: usuario.id_coordinador,
    });
}

var deleteById = function(id_usuario) {
    return Models.Usuario.destroy({
        where: {
            id_usuario: id_usuario
        }
    });
};

module.exports.findAllUsuario = findAllUsuario;
module.exports.updateUsuario = updateUsuario;
module.exports.findById = findById;
module.exports.crear = crear;
module.exports.findAllDigitador = findAllDigitador;
module.exports.deleteById = deleteById;
module.exports.findAllUsuarioOcupacion = findAllUsuarioOcupacion;
module.exports.findAllDigitadorCedula = findAllDigitadorCedula;
module.exports.findAllDigitadorById = findAllDigitadorById;