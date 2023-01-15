const { Sequelize, DataTypes } = require('sequelize');

eventModel = {
    create: async (sequelize) => {
        const Users = sequelize.define("actividades",{
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
            }
        }, {
            timestamps: false
        })
        return Users
    }
}

module.exports = eventModel;