/*jshintindent:2*/
module.exports = function(sequelize,
    DataTypes) {
    return sequelize.define('Agenda',

        {
            id_agenda: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            fecha: {
                type: DataTypes.DATEONLY,
                allowNull: true
            },
            lugar: {
                type: DataTypes.STRING,
                allowNull: true
            },
            hora: {
                type: DataTypes.STRING,
                allowNull: true
            },
            descripcion: {
                type: DataTypes.STRING,
                allowNull: true
            },
            id_usuario: {
                type: DataTypes.INTEGER,
                allowNull: true /* JARR */
            }

        },

        {
            tableName: 'agenda',
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            schema: 'contabilidad',
            classMethods: {
                associate: function(models) {
                    models.Agenda.belongsTo(models.Usuario,

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