// const express = require("express");
// const router = express.Router();
// const { DoctorCtrl } = require("../controllers/cms");

// // GET all doctors
// router.get("/", DoctorCtrl.getAllDoctors);

// // GET a specific doctor by ID
// router.get("/:id", DoctorCtrl.getDoctorById);

// // POST a new doctor
// router.post("/", DoctorCtrl.createDoctor);

// // PUT (update) a doctor by ID
// router.put("/:id", DoctorCtrl.updateDoctor);

// // DELETE a doctor by ID
// router.delete("/:id", DoctorCtrl.deleteDoctor);

// module.exports = router;


const { Router } = require('express')
const { Cms } = require('../controllers')
const router = Router()

router.route('/')
    .get(Cms.DoctorCtrl.getAllDoctors)
    .post(Cms.DoctorCtrl.createDoctor)

router.route('/:id')
    .get(Cms.DoctorCtrl.getDoctorById)
    .put(Cms.DoctorCtrl.updateDoctor)
    .patch(Cms.DoctorCtrl.updateDoctor)
    .delete(Cms.DoctorCtrl.deleteDoctor
    )

module.exports = router