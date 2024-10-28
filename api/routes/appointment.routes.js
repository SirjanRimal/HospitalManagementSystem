// const express = require("express");
// const router = express.Router()
// // const appointmentController = require("../controllers/cms/appointment.controllers");
// const { AppointmentCtrl } = require("../controllers/cms");

// // GET all appointments
// router.get("/", AppointmentCtrl.getAllAppointments);

// // GET a specific appointment by ID
// router.get("/:id", AppointmentCtrl.getAppointmentById);

// // POST a new appointment
// router.post("/", AppointmentCtrl.createAppointment);

// // PUT (update) an appointment by ID
// router.put("/:id", AppointmentCtrl.updateAppointment);

// // DELETE an appointment by ID
// router.delete("/:id", AppointmentCtrl.deleteAppointment);

// module.exports = router;


const { Router } = require('express')
const { Cms } = require('../controllers')
const router = Router()

router.route('/')
    .get(Cms.AppointmentCtrl.getAllAppointments)
    .post(Cms.AppointmentCtrl.createAppointment)

router.route('/:id')
    .get(Cms.AppointmentCtrl.getAppointmentById)
    .put(Cms.AppointmentCtrl.updateAppointment)
    .patch(Cms.AppointmentCtrl.updateAppointment)
    .delete(Cms.AppointmentCtrl.deleteAppointment
    )

module.exports = router