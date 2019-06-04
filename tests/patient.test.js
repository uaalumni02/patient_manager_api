import app from '../app';
import request from 'supertest';
import fetch from 'node-fetch';
import faker from 'faker';


// test("responds with patient's info", (done) => {
//     request(app).get('/api/patient')
//         .then(response => {
//             expect(typeof response.body).toBe('object');
//             done();
//         })
// });


// test("response should be an object", (done) => {
//     request(app).get('/api/user')
//         .then(response => {
//             expect(typeof response.body).toBe('object');
//             done();
//         })
// });

// test("response should have the following properties", (done) => {
//     request(app).get('/api/appointment')
//         .then(response => {
//             expect(typeof response.body).toBe('object');
//             done();
//         })
// });


// remove authorization in route
// test("response should have the following properties with correct values", (done) => {
//     request(app).get('/api/patient')
//         .then(response => {
//           // console.log(response.body[0])
//             const expected = response.body[0]
//             expect(typeof expected).toBe('object');
//             expect(expected).toHaveProperty('name')
//             expect(expected).toHaveProperty('name', 'Tom Kennedy')
//             done();
//         })
// });

// test("response should have the following properties with correct values", (done) => {
//     request(app).get('/api/appointment')
//         .then(response => {
//           // console.log(response.body[1])
//             const expected = response.body[1]
//             expect(typeof expected).toBe('object')
//             expect(expected).toHaveProperty('location')
//             expect(expected).toHaveProperty('location', 'Office A' )
//             done();
//         })
// });

// test("response should have correct number of appointments", (done) => {
//   request(app).get('/api/appointment')
//       .then(response => {
//         // console.log(response.body)
//           const expected = response.body
//           expect(expected).toHaveLength(4)
//           done();
//       })
// });

// test("response should be identified value", (done) => {
//   request(app).get('/api/patient')
//       .then(response => {
//         // console.log(response.body)
//           const expected = response.body[0]
//           expect(expected.name).toBe('Tom Kennedy');
//           done();
//       })
// });




// let token;

// beforeAll((done) => {
//     request(app)
//         .post('/api/user/login')
//         .send({
//             username: 'meco',
//             password: 'password',
//         })
//         .expect(200)
//         .end((err, response) => {
//             token = response.body.token;
//             console.log(token)
//             done()
//         });
// });


// test('It responds with JSON', (done) => {
//     request(app).get('/api/appointment')
//         .set('Authorization', `Bearer ${token}`)
//         .then((response) => {
//             expect(response.statusCode).toBe(200);
//             expect(response.type).toBe('application/json');
//             done()
//         });

// });

const patientInfo = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    address: faker.address.streetAddress(),
    med: faker.random.word(),
    diagnosis: faker.random.word(),
    additionalInfo: faker.lorem.sentence(),

}


test("response should be identified value", (done) => {
  request(app).get('/api/patient')
          const response = patientInfo
          expect(typeof response).toBe('object');
          expect(response).toHaveProperty('med')
          expect(response).not.toHaveProperty('meds');
          expect(typeof response.name).toBe('string');
          done();
      })



