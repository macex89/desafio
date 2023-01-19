const router = require("express").Router();
const user = require("../controllers/user.controllers");
const request = require("../controllers/registration_request.controllers");
const registration = require("../controllers/registration.controllers");
const activity = require("../controllers/activity.controllers");
const formation = require("../controllers/formations.controllers")

//USER
router.post("/register", user.new); //Añade un user
router.post("/login-user", user.login); //Login
router.get("/get-role", user.getRole);
router.get("/get-logued-coordinator", user.getCoordinator);
router.get("/get-logued-coordinator/:id", user.getCoordinatorId);
// router.get("/logout", user.logout); //Logout
// router.post("/edit-user", user.edit); //Modifica un user
// router.post("/edit-user-password", user.editPassword); //Modifica la contrañsea de un usuario
// router.get("/user/:id",user.show); //Elimina un user
// router.delete("/delete-user/:id",user.delete );//Borra un user

//REGISTRATION REQUEST
router.post("/new-request",request.new);
router.post("/accept-request",request.acceptRequest);
router.post("/reject-request",request.rejectRequest);
router.get("/get-coordinator-requests",request.getRequestsByCoordinator);
router.get("/get-requests-by-event/:id",request.getRequestsByEvent);



//REQUEST 
router.post("/new-registration",registration.new);


//ACTIVITIES
router.post("/new-event",activity.newEvent);
router.get("/get-event/:id",activity.getEvent);
router.get("/get-carrousel-event/:id",activity.getEvent);
router.get("/get-coordinator-events",activity.getEventsByCoordinator);
router.get("/get-events",activity.getEvents);
router.post("/save-favorite",activity.saveFavorite);
router.delete("/delete-favorite",activity.deleteFavorite);
router.post("/update-registrations",activity.updateRegistrations);


//FORMATIONS
router.get("/get-formations",formation.getFormations);

module.exports = router;