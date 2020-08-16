/* modelo utilizado para BD tabla COMUNA */
module.exports = function(sequelize,
    DataTypes) {
    return sequelize.define('Comuna',

        { /*campos de la tabla */
            id_comuna: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            nom_comuna: {
                type: DataTypes.STRING,
                allowNull: true /* JARR */
            }

        },

        {
            /* Nombre de la tabla */
            tableName: 'comuna',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            /* nombre del esquema */
            schema: 'lugares',
            /* Funcion de llaves foraneas */
            classMethods: {
                associate: function(models) {
                    models.Comuna.hasMany(models.Barrio,

                        {
                            foreignKey: 'id_comunaB'
                        }
                    );
                    models.Comuna.hasMany(models.Digitador,

                        {
                            foreignKey: 'id_comunaL'
                        }
                    );
                    models.Comuna.hasMany(models.Digitador,

                        {
                            foreignKey: 'id_comunaB'
                        }
                    );
                    models.Comuna.hasMany(models.Lider,

                        {
                            foreignKey: 'id_comunaL'
                        }
                    );
                    models.Comuna.hasMany(models.Lider,

                        {
                            foreignKey: 'id_comunaB'
                        }
                    );
                    models.Comuna.hasMany(models.Lugar,

                        {
                            foreignKey: 'id_comunaL'
                        }
                    );
                    models.Comuna.hasMany(models.Usuario,

                        {
                            foreignKey: 'id_comunaB'
                        }
                    );
                    models.Comuna.hasMany(models.Usuario,

                        {
                            foreignKey: 'id_comunaL'
                        }
                    );
                    models.Comuna.hasMany(models.Votante,

                        {
                            foreignKey: 'id_comunaB'
                        }
                    );
                    models.Comuna.hasMany(models.Votante,

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