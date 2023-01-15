const router = require("express").Router();
const user = require("../controllers/user.controllers");
const request = require("../controllers/registration_request.controllers");
const registration = require("../controllers/registration.controllers");
const activity = require("../controllers/activity.controllers");

//USER
router.post("/register", user.new); //Añade un user
router.post("/login-user", user.login); //Login
router.get("/get-role", user.getRole);
// router.get("/logout", user.logout); //Logout
// router.post("/edit-user", user.edit); //Modifica un user
// router.post("/edit-user-password", user.editPassword); //Modifica la contrañsea de un usuario
// router.get("/user/:id",user.show); //Elimina un user
// router.delete("/delete-user/:id",user.delete );//Borra un user

//REGISTRATION REQUEST
router.post("/new-request",request.new);
router.post("/accept-request",request.acceptRequest);
router.post("/reject-request",request.rejectRequest);

//REQUEST 
router.post("/new-registration",registration.new);

//ACTIVITIES
router.post("/new-event",activity.newEvent);
router.get("/get-event/:id",activity.getEvent);
router.get("/get-coordinator-events",activity.getEventsByCoordinator);

module.exports = router;