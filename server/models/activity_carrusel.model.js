const { Sequelize, DataTypes } = require('sequelize');

eventCarruselModel = {
    create: async (sequelize) => {
        const Users = sequelize.define("actividades_carrusels",{
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            titulo: {
                type: DataTypes.STRING,
            },
            descripcion: {
                type: DataTypes.STRING,
            },
            localizacion: {
                type: DataTypes.STRING,
            },
            fecha_ini: {
                type: DataTypes.STRING,
            },
            image: {
                type: DataTypes.STRING,
            }
        }, {
            timestamps: false
        })
        return Users
    }
}

module.exports = eventCarruselModel;