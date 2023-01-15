const { Sequelize, DataTypes } = require('sequelize');

registrationModel = {
    create: async (sequelize) => {
        const Registrations = sequelize.define("inscripciones",{
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
        }, {
            timestamps: false
        })

        return Registrations
    }
}

module.exports = registrationModel;