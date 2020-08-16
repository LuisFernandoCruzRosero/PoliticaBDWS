/* modelo utilizado para BD tabla Usuario */
module.exports = function(sequelize,
    DataTypes) {
    return sequelize.define('Usuario',

        { /*campos de la tabla */
            id_usuario: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            ced_usuario: {
                type: DataTypes.STRING,
                allowNull: true
            },
            nom_usuario: {
                type: DataTypes.STRING,
                allowNull: true
            },
            id_lugar: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            id_mesa: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            id_barrio: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            login: {
                type: DataTypes.STRING,
                allowNull: true
            },
            contrasena: {
                type: DataTypes.STRING,
                allowNull: true
            },
            id_tipo_usuario: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            tel_usuario: {
                type: DataTypes.STRING,
                allowNull: true
            },
            activo: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            id_comunaB: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            id_comunaL: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            municipio: {
                type: DataTypes.STRING,
                allowNull: true
            },
            departamento: {
                type: DataTypes.STRING,
                allowNull: true
            }

        },

        {
            /* Nombre de la tabla */
            tableName: 'usuario',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            /* nombre del esquema */
            schema: 'usuarios',
            /* Funcion de llaves foraneas */
            classMethods: {
                associate: function(models) {
                    models.Usuario.belongsTo(models.Lugar,

                        {
                            foreignKey: 'id_lugar'
                        }
                    );
                    models.Usuario.belongsTo(models.Mesa,

                        {
                            foreignKey: 'id_mesa'
                        }
                    );
                    models.Usuario.belongsTo(models.Barrio,

                        {
                            foreignKey: 'id_barrio'
                        }
                    );
                    models.Usuario.belongsTo(models.TipoUsuario,

                        {
                            foreignKey: 'id_tipo_usuario'
                        }
                    );
                    models.Usuario.belongsTo(models.Comuna,

                        {
                            foreignKey: 'id_comunaB'
                        }
                    );
                    models.Usuario.belongsTo(models.Comuna,

                        {
                            foreignKey: 'id_comunaL'
                        }
                    );
                    models.Usuario.hasMany(models.Agenda,

                        {
                            foreignKey: 'id_usuario'
                        }
                    );
                    models.Usuario.hasMany(models.Contabilidad,

                        {
                            foreignKey: 'id_usuario'
                        }
                    );
                    models.Usuario.hasMany(models.Digitador,

                        {
                            foreignKey: 'id_usuario'
                        }
                    );
                    models.Usuario.hasMany(models.Lider,

                        {
                            foreignKey: 'id_usuario'
                        }
                    );
                    models.Usuario.hasMany(models.Votante,

                        {
                            foreignKey: 'id_usuario'
                        }
                    );

                }

            }

        }
    );

}

;