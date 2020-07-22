/*modelo utilizado para BD tabla LUGAR_MESA:2*/
module.exports = function(sequelize,
    DataTypes) {
    return sequelize.define('LugarMesa',

        {
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
            tableName: 'lugar_mesa',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            schema: 'lugares',
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