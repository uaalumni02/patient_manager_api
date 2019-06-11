import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const isValidAttendees = (attendees) => {
    const regExp = /^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/i
    return regExp.test(attendees)
  };
  const isValidPatientLocation = (location) => {
    const regExp = /^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/i
    return regExp.test(location)
  };

  const isValidPatientDateTime = (time) => {
    const regExp = /^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])$/i
    return regExp.test(time)
  };

const appointmentInformationSchema = mongoose.Schema({
    patientId: {
        type: String
    },
    attendees: {
        type: String,
        required: true,
        required: [true,'Attendees are required'],
        validate: [isValidAttendees, 'Please enter attendees'],
    },
    location: {
        type: String,
        required: true,
        required: [true,'Location is required'],
        validate: [isValidPatientLocation, 'Please enter location'],
    },
    appointmentDate: {
        type: Number,
        required: true 
    },
    
});

export default mongoose.model('AppointmentInformation', appointmentInformationSchema);

