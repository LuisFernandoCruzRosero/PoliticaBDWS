/*jshintindent:2*/
module.exports = function(sequelize,
    DataTypes) {
    return sequelize.define('Votante',

        {
            id_votante: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            ced_votante: {
                type: DataTypes.STRING,
                allowNull: true
            },
            id_lider: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            nom_votante: {
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
            id_usuario: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            id_barrio: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            tel_votante: {
                type: DataTypes.STRING,
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
            activo: {
                type: DataTypes.BOOLEAN,
                allowNull: true
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
            tableName: 'votante',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            schema: 'usuarios',
            classMethods: {
                associate: function(models) {
                    models.Votante.belongsTo(models.Lider,

                        {
                            foreignKey: 'id_lider'
                        }
                    );
                    models.Votante.belongsTo(models.Lugar,

                        {
                            foreignKey: 'id_lugar'
                        }
                    );
                    models.Votante.belongsTo(models.Mesa,

                        {
                            foreignKey: 'id_mesa'
                        }
                    );
                    models.Votante.belongsTo(models.Usuario,

                        {
                            foreignKey: 'id_usuario'
                        }
                    );
                    models.Votante.belongsTo(models.Barrio,

                        {
                            foreignKey: 'id_barrio'
                        }
                    );
                    models.Votante.belongsTo(models.Comuna,

                        {
                            foreignKey: 'id_comunaB'
                        }
                    );
                    models.Votante.belongsTo(models.Comuna,

                        {
                            foreignKey: 'id_comunaL'
                        }
                    );

                }

            }

        }
    );

}

;