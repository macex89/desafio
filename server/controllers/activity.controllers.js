const connection = require("../databases/sequelize");
const activityModel = require("../models/activity.model");
const activityCarrusel = require("../models/activity_carrusel.model")
const user = require("./user.controllers");
const request = require("./registration_request.controllers");

const activity = {
  /**
   * Inserta un activity
   * @param {json} req La petición
   * @param {json} res La respuesta
   */
  newEvent: async (req, res) => {
    try {
      const { titulo,descripcion,municipio,fecha_ini,fecha_fin,hora_empezar,hora_terminar,plazas,image } = req.body;
      var con = await connection.open(); 
      const activityM = await activityModel.create(con); 
      const activity = await activityM.create({ titulo, descripcion, categoria:"voluntariado", coordinador:user.get_id_from_cookie(req),municipio,fecha_ini,fecha_fin,hora_empezar,hora_terminar,plazas,image});
      res.json(true);
    } catch (ValidationError) {
        console.log(ValidationError);
        res.json(false);
    }finally{
        await connection.close(con);
    }
  },

  /**
   * Devuelve los datos de un evento
   * @param {json} req La petición
   * @param {json} res La respuesta
   */
  getEvent: async (req, res) => {
    try {
      var con = await connection.open();
      const activityM = await activityModel.create(con);
      const activity = await activityM.findOne({ where: { id: req.params.id } })
      res.json(activity);
    } catch (ValidationError) {
        console.log(ValidationError);
      res.json(false);
    }finally{
      await connection.close(con);
    }
  },

  getEventsByCoordinator: async (req,res) =>{
    try {
      var con = await connection.open();
      const activityM = await activityModel.create(con);
      const activities = await activityM.findAll({ where: { coordinador: user.get_id_from_cookie(req) } });
      var totalPending = 0;
      var totalAccepted = 0;
      var results = await Promise.all(
        activities.map(async activity => {
          activity = activity.dataValues;
          var requests = await request.returnRequestsByEvent(activity.id, con);
          totalPending += requests.pendings.length;
          totalAccepted += requests.accepted.length;
          activity.requests = requests;
          return activity
        })
      );
      res.json({results,totalPending,totalAccepted});
    } catch (ValidationError) {
        console.log(ValidationError);
      res.json(false);
    }finally{
      await connection.close(con);
    }
  },

//Devuelve los 6 eventos que hay en el carrusel
  getEvents: async (req, res) => {
    try {
      var con = await connection.open();
      const activityM = await activityModel.create(con);
      var allActivity = [];
      for(let i=1; i<7; i++){
        const activity = await activityM.findOne({where: {id:i}});
        allActivity.push(activity)
      } 
      res.json(allActivity);
    } catch (ValidationError) {
        console.log(ValidationError);
      res.json(false);
    }finally{
      await connection.close(con);
    }
  },

  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  updateRegistrations: async (req,res) => {
    try {
      var con = await connection.open();
      const { id } = req.body;
      console.log(id);
      const activityM = await activityModel.create(con);
      const activity = await activityM.findOne({where:{id}}); 
      var registrations = parseInt(activity.dataValues.inscripciones) + 1;
      await activityM.update({inscripciones:registrations},{where:{id}});
      res.json(true);
    } catch (ValidationError) {
        console.log(ValidationError);
        res.json(false);
    }finally{
      await connection.close(con);
    }
  },

    /**
   * Guarda el producto como favorito
   * @param {*} req 
   * @param {*} res 
   */
    saveFavorite: async (req,res) => {
      // try{
      //   const fk_id_product = req.body.fk_id_product;
      //   const fk_id_user = session.get_id_from_cookie(req);
      //   await mongoose.conn();
      //   console.log(fk_id_product);
      //   const hola = await favoriteModel.create({fk_id_user, fk_id_product});
      //   console.log(hola);
      //   res.json(true);
      // }catch(e){
      //   console.log(e);
      //   res.json(false);
      // }
    },

    deleteFavorite: async (req,res) => {
      // try{
      //   const fk_id_product = req.body.fk_id_product;
      //   const fk_id_user = session.get_id_from_cookie(req);
      //   await mongoose.conn();
      //   console.log(fk_id_product);
      //   const hola = await favoriteModel.create({fk_id_user, fk_id_product});
      //   console.log(hola);
      //   res.json(true);
      // }catch(e){
      //   console.log(e);
      //   res.json(false);
      // }
    },


}

module.exports = activity;