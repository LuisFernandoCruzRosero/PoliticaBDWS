/*modelo utilizado para BD tabla LIDER*/
module.exports = function(sequelize,
    DataTypes) {
    return sequelize.define('Lider',

        { /*campos de la tabla */
            id_lider: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            ced_lider: {
                type: DataTypes.STRING,
                allowNull: false
            },
            id_lugar: {
                type: DataTypes.INTEGER,
                allowNull: false /* JARR */
            },
            id_mesa: {
                type: DataTypes.INTEGER,
                allowNull: false /* JARR */
            },
            id_barrio: {
                type: DataTypes.INTEGER,
                allowNull: false /* JARR */
            },
            nom_lider: {
                type: DataTypes.STRING,
                allowNull: false
            },
            id_usuario: {
                type: DataTypes.INTEGER,
                allowNull: false /* JARR */
            },
            tel_lider: {
                type: DataTypes.STRING,
                allowNull: true
            },
            id_comunaL: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            id_comunaB: {
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
            /* Nombre de la tabla */
            tableName: 'lider',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            /* nombre del esquema */
            schema: 'usuarios',
            /* Funcion de llaves foraneas */
            classMethods: {
                associate: function(models) {
                    models.Lider.belongsTo(models.Lugar,

                        {
                            foreignKey: 'id_lugar'
                        }
                    );
                    models.Lider.belongsTo(models.Mesa,

                        {
                            foreignKey: 'id_mesa'
                        }
                    );
                    models.Lider.belongsTo(models.Barrio,

                        {
                            foreignKey: 'id_barrio'
                        }
                    );
                    models.Lider.belongsTo(models.Usuario,

                        {
                            foreignKey: 'id_usuario'
                        }
                    );
                    models.Lider.belongsTo(models.Comuna,

                        {
                            foreignKey: 'id_comunaL'
                        }
                    );
                    models.Lider.belongsTo(models.Comuna,

                        {
                            foreignKey: 'id_comunaB'
                        }
                    );
                    models.Lider.hasMany(models.Digitador,

                        {
                            foreignKey: 'id_lider'
                        }
                    );
                    models.Lider.hasMany(models.Votante,

                        {
                            foreignKey: 'id_lider'
                        }
                    );

                }

            }

        }
    );

}

;