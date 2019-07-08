export class DoctorFinder {

  getDoctorsInfo(word, condition) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${word}&location=45.151%2C-122.413%2C100&user_location=45.151%2C-122.413&user_key=${process.env.exports.apiKey}`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };

      request.open('GET', url, true);
      request.send();
    });

  }
}
