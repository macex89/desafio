const connection = require("../databases/sequelize");
const formationModel = require("../models/formation.model");


const formation = {


//Devuelve las formaciones
getFormations: async (req, res) => {
    try {
      var con = await connection.open();
      const activityM = await formationModel.create(con);
      const allFormation = await activityM.findAll();
      res.json(allFormation);
    } catch (ValidationError) {
        console.log(ValidationError);
      res.json(false);
    }finally{
      await connection.close(con);
    }
  },

  
}

module.exports = formation;