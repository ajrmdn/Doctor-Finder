export class DoctorFinder {

  getDoctorsInfo(symptom) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://betterdoctor.com/?name=${doctor}&query=${illness}q=portland,oregon&user_key=${process.env.exports.apiKey}`;
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
