require('dotenv').config();
const connection = require("../databases/sequelize");
const requestModel = require("../models/registration_request.model");
const user = require("./user.controllers");
const registration = require("./registration.controllers");

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
      const requestM = await requestModel.create(con);
      const request = await requestM.create({ fk_id_actividad, fk_id_user:user.get_id_from_cookie(req), estado:"pendiente" });
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
      await requestM.update({ estado:"aceptada" }, {where:{id:id_request}});
      const request = await requestM.findOne({where:{id:id_request}});
      await registration.new(con,request.dataValues.fk_id_actividad,request.dataValues.fk_id_user);
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
  },

  /**
   * Devuelve un json con el número de peticiones pendientes y las aceptadas 
   * @param {json} req 
   * @param {json} res 
   */
  getRequestsByCoordinator: async (req, res) => {
    try {
      var con = await connection.open(); 
      const requestM = await requestModel.create(con);
      const user_id = await user.get_id_from_cookie(req);
      const pendings = await requestM.findAll({where:{fk_id_user:user_id,estado:"pendiente"}});
      const accepted = await requestM.findAll({where:{fk_id_user:user_id,estado:"aceptada"}}); 
      res.json({pendings,accepted});
    } catch (ValidationError) {
        console.log(ValidationError);
        res.json(false);
    }finally{
        await connection.close(con);
    }
  },

  /**
   * Devuelve el número de peticiones pendientes y las aceptadas 
   * @param {json} req 
   * @param {json} res 
   */
    returnRequestsByEvent: async (fk_id_actividad,con) => {
      const requestM = await requestModel.create(con);
      const pendings = await requestM.findAll({where:{fk_id_actividad,estado:"pendiente"}});
      const accepted = await requestM.findAll({where:{fk_id_actividad,estado:"aceptada"}}); 
      return {pendings,accepted};
    },

  /**
   * Devuelve un json con el número de peticiones pendientes y las aceptadas 
   * @param {json} req 
   * @param {json} res 
   */
  getRequestsByEvent: async (req,res) => {
    try {
      var con = await connection.open();
      const requestM = await requestModel.create(con);
      const requests = await requestM.findAll({where:{fk_id_actividad:req.params.id,estado:"pendiente"}});
      const results = await Promise.all(
        requests.map(async request =>{
          request = request.dataValues;
          var u = await user.returnUser(request.fk_id_user,con);
          request.user = {nombre:u.nombre, apellido_1:u.apellido_1, apellido_2:u.apellido_2, image:u.image,localidad:u.localidad};
          return request;
        })
      )
      res.json({results});
    } catch (ValidationError) {
        console.log(ValidationError);
        res.json(false);
    }finally{
        await connection.close(con);
    }
  }
}

module.exports = requestRegistration;