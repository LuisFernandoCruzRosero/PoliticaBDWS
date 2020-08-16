/* modelo utilizado para BD tabla DIGITADOR */
module.exports = function(sequelize,
    DataTypes) {
    return sequelize.define('Digitador',

        { /*campos de la tabla */
            id_digitador: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            ced_digitador: {
                type: DataTypes.STRING,
                allowNull: true
            },
            nom_digitador: {
                type: DataTypes.STRING,
                allowNull: true
            },
            usu_digiador: {
                type: DataTypes.STRING,
                allowNull: true
            },
            con_digitador: {
                type: DataTypes.STRING,
                allowNull: true
            },
            id_comunaL: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            id_lugar: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            id_barrio: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            id_lider: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            id_usuario: {
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
            },
            id_comunaB: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            id_mesa: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            id_tipo_usuario: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            activo: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            tel_digitador: {
                type: DataTypes.STRING,
                allowNull: true
            }

        },

        {
            /* Nombre de la tabla */
            tableName: 'digitador',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            /* nombre del esquema */
            schema: 'usuarios',
            /* Funcion de llaves foraneas */
            classMethods: {
                associate: function(models) {
                    models.Digitador.belongsTo(models.Comuna,

                        {
                            foreignKey: 'id_comunaL'
                        }
                    );
                    models.Digitador.belongsTo(models.Lugar,

                        {
                            foreignKey: 'id_lugar'
                        }
                    );
                    models.Digitador.belongsTo(models.Barrio,

                        {
                            foreignKey: 'id_barrio'
                        }
                    );
                    models.Digitador.belongsTo(models.Lider,

                        {
                            foreignKey: 'id_lider'
                        }
                    );
                    models.Digitador.belongsTo(models.Usuario,

                        {
                            foreignKey: 'id_usuario'
                        }
                    );
                    models.Digitador.belongsTo(models.Comuna,

                        {
                            foreignKey: 'id_comunaB'
                        }
                    );
                    models.Digitador.belongsTo(models.Mesa,

                        {
                            foreignKey: 'id_mesa'
                        }
                    );
                    models.Digitador.belongsTo(models.TipoUsuario,

                        {
                            foreignKey: 'id_tipo_usuario'
                        }
                    );

                }

            }

        }
    );

}

;