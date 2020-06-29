/*jshintindent:2*/
module.exports = function(sequelize,
    DataTypes) {
    return sequelize.define('Barrio',

        {
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
            tableName: 'barrio',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            schema: 'lugares',
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