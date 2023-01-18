const { Sequelize, DataTypes } = require('sequelize');

formationCarruselModel = {
    create: async (sequelize) => {
        const Formations = sequelize.define("tematicas",{
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nombre: {
                type: DataTypes.STRING,
            },
        
        }, {
            timestamps: false
        })
        return Formations
    }
}

module.exports = formationCarruselModel;