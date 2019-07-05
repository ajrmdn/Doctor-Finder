import { Doctor } from '.sample-class';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function () {
  $('.find').click(function () {
    let doctor = $('#doctor').val();
    $('#doctor').val('');
    let doctorServices = new Doctor();
    let promise = doctorServices.getDoctorsInfo(doctor);
    promise.then(function (response) {
      let body = JSON.parse(response);
      $('.showDoctor').text(body.)
    }
  }

});
