/*jshintindent:2*/
module.exports = function(sequelize,
    DataTypes) {
    return sequelize.define('Lugar',

        {
            id_lugar: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            nom_lugar: {
                type: DataTypes.STRING,
                allowNull: true
            },
            latitud: {
                type: DataTypes.STRING,
                allowNull: true
            },
            longitud: {
                type: DataTypes.STRING,
                allowNull: true
            },
            zona_roja: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            id_comunaL: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            }

        },

        {
            tableName: 'lugar',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            schema: 'lugares',
            classMethods: {
                associate: function(models) {
                    models.Lugar.belongsTo(models.Comuna,

                        {
                            foreignKey: 'id_comunaL'
                        }
                    );
                    models.Lugar.hasMany(models.Digitador,

                        {
                            foreignKey: 'id_lugar'
                        }
                    );
                    models.Lugar.hasMany(models.Lider,

                        {
                            foreignKey: 'id_lugar'
                        }
                    );
                    models.Lugar.hasMany(models.LugarMesa,

                        {
                            foreignKey: 'id_lugar'
                        }
                    );
                    models.Lugar.hasMany(models.Registraduria,

                        {
                            foreignKey: 'id_lugar'
                        }
                    );
                    models.Lugar.hasMany(models.Usuario,

                        {
                            foreignKey: 'id_lugar'
                        }
                    );
                    models.Lugar.hasMany(models.Votante,

                        {
                            foreignKey: 'id_lugar'
                        }
                    );

                }

            }

        }
    );

}

;