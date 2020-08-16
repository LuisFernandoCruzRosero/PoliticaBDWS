/* modelo utilizado para BD tabla HISTORIAL */
module.exports = function(sequelize,
    DataTypes) {
    return sequelize.define('Historial',

        { /*campos de la tabla */
            id_historial: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true /* JARR */
            },
            fec_historial: {
                type: DataTypes.DATEONLY,
                allowNull: true
            },
            id_lugar: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            total: {
                type: DataTypes.STRING,
                allowNull: true
            }

        },

        {
            /* Nombre de la tabla */
            tableName: 'historial',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            /* nombre del esquema */
            schema: 'historial',
            /* Funcion de llaves foraneas */
            classMethods: {
                associate: function(models) {
                    models.Historial.belongsTo(models.Lugar,

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