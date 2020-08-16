/* modelo utilizado para BD tabla LugarMesa */
module.exports = function(sequelize,
    DataTypes) {
    return sequelize.define('LugarMesa',

        { /*campos de la tabla */
            id_lugar_mesa: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            id_lugar: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            id_mesa: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            }

        },

        {
            /* Nombre de la tabla */
            tableName: 'lugar_mesa',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            /* nombre del esquema */
            schema: 'lugares',
            /* Funcion de llaves foraneas */
            classMethods: {
                associate: function(models) {
                    models.LugarMesa.belongsTo(models.Lugar,

                        {
                            foreignKey: 'id_lugar'
                        }
                    );
                    models.LugarMesa.belongsTo(models.Mesa,

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