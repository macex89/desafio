const { Sequelize, DataTypes } = require('sequelize');

eventModel = {
    create: async (sequelize) => {

        const Events = sequelize.define("eventos",{

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
            coordinador: {
                type: DataTypes.INTEGER,
            },
            municipio: {
                type: DataTypes.STRING,
            },
            fecha_ini: {
                type: DataTypes.STRING,
            },
            fecha_fin: {
                type: DataTypes.STRING,
            },
            hora_empezar: {
                type: DataTypes.STRING,
            },
            hora_terminar: {
                type: DataTypes.STRING,
            },
            plazas: {
                type: DataTypes.INTEGER,
            },
            inscripciones: {
                type: DataTypes.INTEGER,
            },
            image: {
                type: DataTypes.STRING,

            },



        }, {
            timestamps: false
        })
        return Events
    }
}

module.exports = eventModel;