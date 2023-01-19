const connection = require("../databases/sequelize");
const favoriteModel = require("../models/favorite.model");
const user = require("./user.controllers");


const favorite = {
  /**
   * Guarda el evento como favorito
   * @param {*} req 
   * @param {*} res 
   */
    saveFavorite: async (req,res) => {
      try {
        var con = await connection.open();
        const fk_id_actividad = req.body.id;
        const fk_id_user = user.get_id_from_cookie(req);
        const favoriteM = await favoriteModel.create(con);
       await favoriteM.create({fk_id_user, fk_id_actividad}); 
        res.json(true);
      } catch (ValidationError) {
          console.log(ValidationError);
          res.json(false);
      }finally{
        await connection.close(con);
      }
    },

    deleteFavorite: async (req,res) => {
      try {
        var con = await connection.open();
        const fk_id_actividad = req.params.id;
        const fk_id_user = user.get_id_from_cookie(req);
        const favoriteM = await favoriteModel.create(con);
        await favoriteM.destroy({where:{fk_id_user, fk_id_actividad}}); 
        res.json(true);
      } catch (ValidationError) {
          console.log(ValidationError);
          res.json(false);
      }finally{
        await connection.close(con);
      }
    },


}

module.exports = favorite;