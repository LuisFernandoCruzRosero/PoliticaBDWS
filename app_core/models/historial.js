/*jshintindent:2*/module.exports=function(sequelize,
DataTypes)
{
return sequelize.define('Historial',

{
id_historial:
{
type:DataTypes.INTEGER,
allowNull:false,
primaryKey:true,
autoIncrement:true
}
,
fec_historial:
{
type:DataTypes.DATEONLY,
allowNull:true
}
,
id_lugar:
{
type:DataTypes.INTEGER,
allowNull:true
}
,
total:
{
type:DataTypes.STRING,
allowNull:true
}

}
,

{
tableName:'historial',
timestamps: false,
underscored: true,
freezeTableName: true,
schema:'public',
classMethods: 
{
associate: function(models) 
{

}

}

}
)
;

}

;
