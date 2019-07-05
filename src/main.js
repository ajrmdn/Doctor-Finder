import { DoctorFinder } from '.sample-class';
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
      $('.showDoctor').text(body. ADD FROM POSTMAN);
      $('.showAddress').text(body. ADD FROM POSTMAN);
      $('.showPhone').text(body. ADD FROM POSTMAN);
      $('.showWebsite').text(body. ADD FROM POSTMAN);
      $('.showNewPatience').text(body. ADD FROM POSTMAN);
    });
  });
});
