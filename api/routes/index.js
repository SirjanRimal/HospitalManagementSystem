const {Router}=require("express")

const patientsRouter = require("./patient.routes");
const doctorsRouter = require("./doctor.routes");
const appointmentsRouter = require("./appointment.routes");
const { PatientOnly } = require('../lib/middleware')

const router=Router()
router.use('/patients',PatientOnly, patientsRouter);
router.use('/doctors', doctorsRouter);
router.use('/appointments', appointmentsRouter);
