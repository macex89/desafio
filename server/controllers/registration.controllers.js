const connection = require("../databases/sequelize");
const registrationModel = require("../models/registration.model");


const registration = {
  /**
   * Inserta un user
   * @param {json} req La petición
   * @param {json} res Objeto respuesta
   */
  new: async (con,fk_id_actividad,fk_id_user) => {
    try{
      const registrationM = await registrationModel.create(con);
      await registrationM.create({ fk_id_actividad, fk_id_user });
    }catch(e){
      console.log(e)
    }
  }
}

module.exports = registration;