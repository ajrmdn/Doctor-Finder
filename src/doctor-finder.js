export class DoctorFinder {

  getDoctorsInfo(symptom) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `ADD API HERE ---- `;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.responce);
        } else {
          refect(Error(request.statusText));
        }
      };

      request.open('GET', url, true);
      request.send();
    });
  }
}
