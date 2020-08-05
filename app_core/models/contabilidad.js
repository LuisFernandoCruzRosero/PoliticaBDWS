/*modelo utilizado para BD tabla CONTABILIDAD*/
module.exports = function(sequelize,
    DataTypes) {
    return sequelize.define('Contabilidad',

        { /*campos de la tabla */
            id_contabilidad: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            id_usuario: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            },
            descripcion: {
                type: DataTypes.STRING,
                allowNull: true
            },
            valor: {
                type: DataTypes.DOUBLE,
                allowNull: true
            },
            identificaacion: {
                type: DataTypes.STRING,
                allowNull: true
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: true
            }

        },

        {
            /* Nombre de la tabla */
            tableName: 'contabilidad',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            /* nombre del esquema */
            schema: 'contabilidad',
            /* Funcion de llaves foraneas */
            classMethods: {
                associate: function(models) {
                    models.Contabilidad.belongsTo(models.Usuario,

                        {
                            foreignKey: 'id_usuario'
                        }
                    );

                }

            }

        }
    );

}

;