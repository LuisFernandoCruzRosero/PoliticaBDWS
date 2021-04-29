/*jshintindent:2*/
module.exports = function(sequelize,
    DataTypes) {
    return sequelize.define('Contabilidad',

        {
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
            },
            ingreso_egreso: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            }

        },

        {
            tableName: 'contabilidad',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            schema: 'contabilidad',
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