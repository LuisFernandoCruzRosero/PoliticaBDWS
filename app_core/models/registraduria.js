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
            ced_registraduria: {
                type: DataTypes.STRING,
                allowNull: true
            },
            nom_registraduria: {
                type: DataTypes.STRING,
                allowNull: true
            },
            id_lugar: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            id_mesa: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            dep_registraduria: {
                type: DataTypes.STRING,
                allowNull: true
            },
            mun_registraduria: {
                type: DataTypes.STRING,
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
                    models.Registraduria.belongsTo(models.Lugar,

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