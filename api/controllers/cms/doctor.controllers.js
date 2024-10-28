const Doctor = require("../../models/Doctor.models");

// GET all doctors
const getAllDoctors = async (req, res, next) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET a specific doctor by ID
const getDoctorById = async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST a new doctor
const createDoctor = async (req, res,next) => {
  const newDoctor = new Doctor(req.body);
  try {
    const savedDoctor = await newDoctor.save();
    res.status(201).json(savedDoctor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT (update) a doctor by ID
const updateDoctor = async (req, res,next) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDoctor) return res.status(404).json({ message: "Doctor not found" });
    res.json(updatedDoctor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE a doctor by ID
const deleteDoctor = async (req, res,next) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!deletedDoctor) return res.status(404).json({ message: "Doctor not found" });
    res.json({ message: "Doctor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
};
