const { Sequelize, DataTypes } = require('sequelize');

typeDocModel = {
    create: async (sequelize) => {
        const typesDocs = sequelize.define("tipo_documentos",{
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            tipo_documento_ext: {
                type: DataTypes.STRING,
            },
            tipo_documento_short: {
                type: DataTypes.STRING,
            },
        }, {
            timestamps: false
        })

        return typesDocs
    }
}

module.exports = typeDocModel;