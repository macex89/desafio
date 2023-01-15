require('dotenv').config();
const connection = require("../databases/sequelize");
const userModel = require("../models/user.model");
const typeDocModel = require("../models/type_doc.model");
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
      const { user_rol, nombre, apellido_1, apellido_2, fecha_nac, tipo_doc, num_doc, contraseña } = req.body;
      const pass_hash = await bcyptjs.hash(contraseña, 8);
      // ------ PASOS PARA LA INSERCIÓN EN LA DB
      var con = await connection.open(); //abrir la db
      const typeDocM = await typeDocModel.create(con);
      const typeDoc = await typeDocM.findOne({where :{tipo_documento_ext:tipo_doc}});
      const userM = await userModel.create(con); //creación de modelo
      const user = await userM.create({ user_rol,nombre, apellido_1, apellido_2, fecha_nac, tipo_doc:typeDoc.dataValues.id, num_doc, contraseña:pass_hash }); // la inserción del objeto en la db
      //-------
      const infoJwt = jwt.sign({ id: user.dataValues.id, nombre: user.dataValues.nombre }, process.env.SECRET_KEY);
      res.json({validation:true,"jwt":infoJwt, user:{nombre: user.dataValues.nombre}});
    } catch (ValidationError) {
        console.log(ValidationError);
        res.json(false);
    }finally{
        await connection.close(con);
    }
  },

  /**
   * Devuelve la id del usuario que tiene sesion iniciada
   * @param {json} req la petición
   * @returns {integer} el id del usuario
   */
    getRole: async (req, res) => {
      try {
        var con = await connection.open();
        let jwtVerify = jwt.verify(req.cookies.session, process.env.SECRET_KEY);
        const userM = await userModel.create(con);
        const user = await userM.findOne({ where: { id:jwtVerify.id } });
        res.json(user.dataValues.user_rol) ;
      } catch (ValidationError) {
        console.log(ValidationError);
        res.json(false);
    }finally{
        await connection.close(con);
    }
  },

   /**
   * Devuelve la id del usuario que tiene sesion iniciada
   * @param {json} req la petición
   * @returns {integer} el id del usuario
   */
   get_id_from_cookie: (req) => {
    let jwtVerify = jwt.verify(req.cookies.session, process.env.SECRET_KEY);
    return jwtVerify.id;
},
  
  /**
   * 
   * @param {*} req la petición
   * @param {*} res la respuesta a la petición
   */
  login: async (req, res) => {
    try {
      var con = await connection.open();
      const { num_doc, contraseña } = req.body;
      const userM = await userModel.create(con);
      const user = await userM.findOne({ where: { num_doc } });
      
      if (user) {
          let hashSaved = user.dataValues.contraseña;
          let compare = bcyptjs.compareSync(contraseña, hashSaved);
          const infoJwt = jwt.sign({ id: user.dataValues.id, nombre: user.dataValues.nombre}, process.env.SECRET_KEY);
          if (compare) {
            res.cookie("session", infoJwt)
            res.json({ validation: true, jwt: infoJwt, user:{nombre: user.dataValues.nombre, rol:user.dataValues.user_rol} });
          } else {
            res.json({validation:false,message:"Ohh!! Usuario o contraseña incorrectos"});
          }
      }else{
          res.json({validation:false,message:"Ohh!! Usuario o contraseña incorrectos"});
      }
    }catch (error) {
      res.json(error);
    } finally {
      await connection.close(con);
    }
  }

  
  /**
   * Actualiza los datos de un usuario 
   * @param {*} req la petición
   * @param {*} res la respuesta a la petición
   */
  // edit: async (req, res) => {
  //   try {
  //     let id = session.get_id_from_cookie(req);
  //     const { first_name, last_name, phone } = req.body;
  //     var con = await connection.open();
  //     const userM = await userModel.create(con);
  //     await userM.update({ first_name, last_name, phone }, {where :{id}})
  //     res.json(true);
  //   } catch (ValidationError) {
  //       console.log(ValidationError);
  //     res.json(false);
  //   }finally{
  //     await connection.close(con);
  //   }
  // },

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
}

module.exports = user;