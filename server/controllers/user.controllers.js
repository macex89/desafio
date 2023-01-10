const connection = require("../databases/sequelize");
const userModel = require("../models/user.model");
const bcyptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");





const user = {
  /**
   * Inserta un user
   * @param {json} req La petición
   * @param {json} res Objeto respuesta
   */
  new: async (req, res) => {
    try {
      const { first_name, last_name, email, phone="", user_password } = req.body;
      const pass_hash = await bcyptjs.hash(user_password, 8);
      // ------ PASOS PARA LA INSERCIÓN EN LA DB
      var con = await connection.open(); //abrir la db
      const userM = await userModel.create(con); //creación de modelo
      const user = await userM.create({ first_name, last_name, email, phone, user_password:pass_hash }); // la inserción del objeto en la db
      //-------
      const infoJwt = jwt.sign({ email, "id": user.dataValues.id, "first_name":user.dataValues.first_name }, "m1c4s4");
      res.json({validation:true,"jwt":infoJwt, user:{first_name:user.dataValues.first_name, id:user.dataValues.id, isSpacer:false}});
    } catch (ValidationError) {
        console.log(ValidationError);
        res.json(false);
    }finally{
        await connection.close(con);
    }
  },

  /**
   * Actualiza los datos de un usuario 
   * @param {*} req la petición
   * @param {*} res la respuesta a la petición
   */
  edit: async (req, res) => {
    try {
      let id = session.get_id_from_cookie(req);
      const { first_name, last_name, phone } = req.body;
      var con = await connection.open();
      const userM = await userModel.create(con);
      await userM.update({ first_name, last_name, phone }, {where :{id}})
      res.json(true);
    } catch (ValidationError) {
        console.log(ValidationError);
      res.json(false);
    }finally{
      await connection.close(con);
    }
  },

  //   /**
  //  * Actualiza la contraseña de un spacer 
  //  * @param {*} req la petición
  //  * @param {*} res la respuesta a la petición
  //  */
  //   editPassword: async (req, res) => {
  //     try {
  //       let id = session.get_id_from_cookie(req);
  //       const { old_password,new_password,repeat_password} = req.body;
  //       var con = await connection.open();
  //       const userM = await userModel.create(con);
  //       const user = await userM.findOne({ where: { id } });
  //       if (user) {
  //         let hashSaved = user.dataValues.user_password;
  //         if(bcyptjs.compareSync(old_password, hashSaved) ){
  //           if(new_password==repeat_password) {
  //             const user_password = await bcyptjs.hash(new_password, 8);
  //             await userM.update({ user_password }, {where :{id}});
  //             res.json({validation:true,msn:"Contraseña actualizada correctamente"}) 
  //           } else{
  //             res.json({validation:false,msn:"Las contraseñas no coinciden"});
  //           }
  //         }else{
  //           res.json({validation:false,msn:"La contraseña actual no es correcta"});
  //         }
  //       }else{
  //         res.json({validation:false,msn:"El usuario no existe"});
  //       }
  //     } catch (ValidationError) {
  //         console.log(ValidationError);
  //       res.json(false);
  //     }finally{
  //       await connection.close(con);
  //     }
  //   },

  // show: async (req, res) => {
  //   try {
  //     var con = await connection.open();
  //     const userM = await userModel.create(con);
  //     const user = await userM.findOne({ where: { id: req.params.id } })
  //     res.json(user);
  //   } catch (ValidationError) {
  //       console.log(ValidationError);
  //     res.json(false);
  //   }finally{
  //     await connection.close(con);
  //   }
  // },
  
  // /**
  //    * Borra un user.
  //    * @param {json} req Objeto solicitud
  //    * @param {json} res Objeto respuesta
  //    */
  // delete: async (req, res) => {
  //   try {
  //     var con = await connection.open();
  //     const userM = await userModel.create(con);
  //     const user = await userM.destroy({ where: { id:req.params.id } })
  //     res.json(true);
  //   } catch (ValidationError) {
  //       console.log(ValidationError);
  //     res.json(false);
  //   }finally{
  //     await connection.close(con);
  //   }
  // },

  // /**
  //  * Añade el id de una dirección a un usuario
  //  * @param {int} fk_id_address el identificador de la dirección del usuario
  //  */
  // add_address: async (req,con,fk_id_address) => {
  //   try {
  //     let id = session.get_id_from_cookie(req);
  //     console.log(id);
  //     console.log(fk_id_address);
  //     const userM = await userModel.create(con);
  //     await userM.update({ fk_id_address}, {where :{id}})
  //   } catch (ValidationError) {
  //       console.log(ValidationError);
  //   }
  // }

}

module.exports = user;