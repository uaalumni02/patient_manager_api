import express from 'express';
import mongoose from 'mongoose';
import checkAuth from '../middleware/check-auth';

//import model
import PatientInformation from '../models/patient';
// import controller
import patientController from '../controllers/patient';

const router = express.Router();

//search DB by id
router.get('/:id', checkAuth, patientController.searchById);

export default router;