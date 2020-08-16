/* modelo utilizado para BD tabla TipoUsuario */
module.exports = function(sequelize,
    DataTypes) {
    return sequelize.define('TipoUsuario',

        { /*campos de la tabla */
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
            /* Nombre de la tabla */
            tableName: 'tipo_usuario',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            /* nombre del esquema */
            schema: 'usuarios',
            /* Funcion de llaves foraneas */
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