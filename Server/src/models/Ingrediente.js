const { DataTypes } = require('sequelize');


module.exports =(sequelize)=>{
    sequelize.define('Ingrediente', {
        ingrediente_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          nombre_ingrediente: {
            type: DataTypes.STRING,
            allowNull: false
          },
          precio_ingrediente:{
                type: DataTypes.FLOAT,
                allowNull: false
          }
        
     }, { timestamps: false });
  };
  