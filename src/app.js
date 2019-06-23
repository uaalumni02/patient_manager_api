import 'dotenv/config'
import express from 'express';
import mongoose, { MongooseDocument } from 'mongoose';
import cors from 'cors';


//import models
import PatientInformation from './models/patient';
import AppointmentInformation from './models/appointment';
import UserInformation from './models/user';

//import routes
import patientRoutes from './routes/patient.route';
import appointmentRoutes  from './routes/appointment.route';
import userRoutes from './routes/user.route';
import routes from './controllers/patient';
import patientSearchIdRoutes from './routes/patientIdSearch.route';

const app = express();

mongoose.Promise = global.Promise

const port = process.env.PORT || 3000;

app.use(cors());
const DB_URL = process.env.MONGO_URL;

// Connect to mongoose
mongoose.connect(DB_URL, { useNewUrlParser: true }, (err) => {
    if (err)
        return console.log('Unable to Connect to MongoDB')
    return console.log('Connection Successful')
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleware to utilize routes
app.use('/api/patient', patientRoutes);
app.use('/api/appointment', appointmentRoutes);
app.use('/api/user', userRoutes);
app.use('/api/', patientSearchIdRoutes);

app.get('/', (req, res) => {
    res.send('Please use routes for application access');
});

app.listen(port, () => console.log('server is running'));