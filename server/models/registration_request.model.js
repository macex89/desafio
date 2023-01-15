const { Sequelize, DataTypes } = require('sequelize');

requestModel = {
    create: async (sequelize) => {
        const Requests = sequelize.define("solicitudes_inscripciones",{
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            fk_id_actividad: {
                type: DataTypes.INTEGER,
            },
            fk_id_user:{
                type: DataTypes.INTEGER,
            },
            estado: {
                type: DataTypes.STRING,
            }
        }, {
            timestamps: false
        })

        return Requests
    }
}

module.exports = requestModel;