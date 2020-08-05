/*modelo utilizado para BD tabla MESA*/
module.exports = function(sequelize,
    DataTypes) {
    return sequelize.define('Mesa',

        { /*campos de la tabla */
            id_mesa: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            nom_mesa: {
                type: DataTypes.STRING,
                allowNull: true
            }

        },

        {
            /* Nombre de la tabla */
            tableName: 'mesa',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            /* nombre del esquema */
            schema: 'lugares',
            /* Funcion de llaves foraneas */
            classMethods: {
                associate: function(models) {
                    models.Mesa.hasMany(models.Digitador,

                        {
                            foreignKey: 'id_mesa'
                        }
                    );
                    models.Mesa.hasMany(models.Lider,

                        {
                            foreignKey: 'id_mesa'
                        }
                    );
                    models.Mesa.hasMany(models.LugarMesa,

                        {
                            foreignKey: 'id_mesa'
                        }
                    );
                    models.Mesa.hasMany(models.Usuario,

                        {
                            foreignKey: 'id_mesa'
                        }
                    );
                    models.Mesa.hasMany(models.Votante,

                        {
                            foreignKey: 'id_mesa'
                        }
                    );

                }

            }

        }
    );

}

;