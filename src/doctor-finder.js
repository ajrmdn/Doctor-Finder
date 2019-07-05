export class DoctorFinder {

  getDoctorsInfo(symptom) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://betterdoctor.com/?q=portland,oregon&appid=06c61ef45efcb6781b9987e413432c51`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.responce);
        } else {
          reject(Error(request.statusText));
        }
      };

      request.open('GET', url, true);
      request.send();
    });
  }
}
