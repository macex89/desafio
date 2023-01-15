const { Sequelize, DataTypes } = require('sequelize');

userModel = {
    create: async (sequelize) => {
        const Users = sequelize.define("users",{
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            user_rol: {
                type: DataTypes.STRING,
            },
            contraseña: {
                type: DataTypes.STRING,
            },
            nombre: {
                type: DataTypes.STRING,
            },
            apellido_1: {
                type: DataTypes.STRING,
            },
            apellido_2: {
                type: DataTypes.STRING,
            },
            fecha_nac: {
                type: DataTypes.DATE,
            },
            tipo_doc: {
                type: DataTypes.INTEGER,
            },
            num_doc: {
                type: DataTypes.STRING,
            }
        }, {
            timestamps: false
        })

        return Users
    }
}

module.exports = userModel;