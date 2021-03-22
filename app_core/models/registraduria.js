/*jshintindent:2*/
module.exports = function(sequelize,
    DataTypes) {
    return sequelize.define('Registraduria',

        {
            id_registraduria: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            id_lugar: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            total: {
                type: DataTypes.INTEGER,
                allowNull: true
            }

        },

        {
            tableName: 'registraduria',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            schema: 'registraduria',
            classMethods: {
                associate: function(models) {
                    models.Registraduria.belongsTo(models.Lugar,

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