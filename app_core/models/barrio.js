/*modelo utilizado para BD tabla BARRIO*/
module.exports = function(sequelize,
    DataTypes) {
    return sequelize.define('Barrio',

        { /*campos de la tabla */
            id_barrio: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            nom_barrio: {
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
            id_comunaB: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            }

        },

        {
            /* Nombre de la tabla */
            tableName: 'barrio',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            /* nombre del esquema */
            schema: 'lugares',
            /* Funcion de llaves foraneas */
            classMethods: {
                associate: function(models) {
                    models.Barrio.belongsTo(models.Comuna,

                        {
                            foreignKey: 'id_comunaB'
                        }
                    );
                    models.Barrio.hasMany(models.Digitador,

                        {
                            foreignKey: 'id_barrio'
                        }
                    );
                    models.Barrio.hasMany(models.Lider,

                        {
                            foreignKey: 'id_barrio'
                        }
                    );
                    models.Barrio.hasMany(models.Usuario,

                        {
                            foreignKey: 'id_barrio'
                        }
                    );
                    models.Barrio.hasMany(models.Votante,

                        {
                            foreignKey: 'id_barrio'
                        }
                    );

                }

            }

        }
    );

}

;