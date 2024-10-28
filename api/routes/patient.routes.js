// const express = require("express");
// const router = express.Router();
// const {PatientCtrl}=require("../controllers/cms")
// // GET all patients
// router.get("/", PatientCtrl.getAllPatients);

// // GET a specific patient by ID
// router.get("/:id", PatientCtrl.getPatientById);

// // POST a new patient
// router.post("/", PatientCtrl.createPatient);

// // PUT (update) a patient by ID
// router.put("/:id", PatientCtrl.updatePatient);

// // DELETE a patient by ID
// router.delete("/:id", PatientCtrl.deletePatient);

// module.exports = router;


const { Router } = require('express')
const { Cms } = require('../controllers')
const router = Router()

router.route('/')
    .get(Cms.PatientCtrl.getAllPatients)
    .post(Cms.PatientCtrl.createPatient)

router.route('/:id')
    .get(Cms.PatientCtrl.getPatientById)
    .put(Cms.PatientCtrl.updatePatient)
    .patch(Cms.PatientCtrl.updatePatient)
    .delete(Cms.PatientCtrl.deletePatient)

module.exports = router