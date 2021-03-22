/*jshintindent:2*/
module.exports = function(sequelize,
    DataTypes) {
    return sequelize.define('Mesa',

        {
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
            tableName: 'mesa',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            schema: 'lugares',
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