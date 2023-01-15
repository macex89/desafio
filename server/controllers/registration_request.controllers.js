require('dotenv').config();
const connection = require("../databases/sequelize");
const requestModel = require("../models/registration_request.model");
const user = require("./user.controllers");

const requestRegistration = {
  /**
   * Inserta una solicitud de inscripción
   * @param {json} req La petición
   * @param {json} res La respuesta a la petición
   */
  new: async (req, res) => {
    try {
      const { fk_id_actividad } = req.body;
      var con = await connection.open(); 
      const requestM = await requestModel.create(con); //creación de modelo
      const request = await requestM.create({ fk_id_actividad, fk_id_user:user.get_id_from_cookie(req), estado:"pendiente" }); // la inserción del objeto en la db
      res.json(true);
    } catch (ValidationError) {
        console.log(ValidationError);
        res.json(false);
    }finally{
        await connection.close(con);
    }
  },

  /**
   * Aceptar una solicitud de inscripción
   * @param {json} req La petición
   * @param {json} res La respuesta a la petición
   */
  acceptRequest: async (req, res) => {
    try {
      const { id_request } = req.body;
      var con = await connection.open(); 
      const requestM = await requestModel.create(con);
      const request = await requestM.update({ estado:"aceptada" }, {where:{id:id_request}}); 
      res.json(true);
    } catch (ValidationError) {
        console.log(ValidationError);
        res.json(false);
    }finally{
        await connection.close(con);
    }
  },

  /**
   * Rechazar una solicitud de inscripción
   * @param {json} req La petición
   * @param {json} res La respuesta a la petición
   */
  rejectRequest: async (req, res) => {
    try {
      const { id_request } = req.body;
      var con = await connection.open(); 
      const requestM = await requestModel.create(con);
      const request = await requestM.update({ estado:"rechazada" }, {where:{id:id_request}}); 
      res.json(true);
    } catch (ValidationError) {
        console.log(ValidationError);
        res.json(false);
    }finally{
        await connection.close(con);
    }
  }
}

module.exports = requestRegistration;