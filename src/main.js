import { DoctorFinder } from './doctor-finder.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function () {
  $('.find').click(function () {
    let doctor = $('#doctor').val();
    $('#doctor').val('');

    let doctorServices = new DoctorFinder();
    let promise = doctorServices.getDoctorsInfo(doctor);

    promise.then(function (response) {
      let body = JSON.parse(response);

      if (body.data.length === 0) {
        $('.showDoctor').append('No doctors in your area');
      }

        for (var i = 0; i < body.data.length; i++) {
          let firstName = body.data[i].profile.first_name;
          let lastName = body.data[i].profile.last_name;
          let address = `${body.data[i].practices[0].visit_address.street} ${body.data[i].practices[0].visit_address.city} ${body.data[i].practices[0].visit_address.state}`;
          let phone = body.data[i].practices[0].phones[0].number;
          let website = body.data[i].practices[0].website;
          let newPatients = body.data[i].practices[0].accepts_new_patients;

          let doctor = new DoctorFinder(firstName, lastName, address, phone, website, newPatients);

          $('.showDoctor').append(`${firstName} ${lastName}`);
          $('.showDoctor').append(`<ul><li>${address}</li><li>${phone}</li><li>Website: ${website}</li><li>Taking new patient: ${newPatients}</li></ul>`);
        }

      });
       // function (error) {
       //       $('.showDoctor').text(`There is an error in your request: ${error.message}`);
       //     };

  });
});
