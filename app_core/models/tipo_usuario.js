/*jshintindent:2*/
module.exports = function(sequelize,
    DataTypes) {
    return sequelize.define('TipoUsuario',

        {
            id_tipo_usuario: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            nom_tipo_usuario: {
                type: DataTypes.STRING,
                allowNull: false
            }

        },

        {
            tableName: 'tipo_usuario',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            schema: 'usuarios',
            classMethods: {
                associate: function(models) {
                    models.TipoUsuario.hasMany(models.Digitador,

                        {
                            foreignKey: 'id_tipo_usuario'
                        }
                    );
                    models.TipoUsuario.hasMany(models.Usuario,

                        {
                            foreignKey: 'id_tipo_usuario'
                        }
                    );

                }

            }

        }
    );

}

;