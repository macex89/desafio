const { Sequelize, DataTypes } = require('sequelize');

favoriteModel = {
    create: async (sequelize) => {
        const Favorites = sequelize.define("interesados",{
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

        return Favorites
    }
}

module.exports = favoriteModel;