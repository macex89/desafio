const connection = require("../databases/sequelize");
const registrationModel = require("../models/registration.model");

const registration = {
  /**
   * Inserta un user
   * @param {json} req La petición
   * @param {json} res Objeto respuesta
   */
  new: async (req, res) => {
    try {
        res.json(true)
        console.log(ValidationError);
    }catch(e){
        res.json(false);
    }finally{
        await connection.close(con);
    }
  }
}

module.exports = registration;