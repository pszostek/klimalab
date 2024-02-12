export function timestampToDate (timestamp) {
    var a = new Date(timestamp * 1000);
    var year = a.getFullYear();
    var month = "0" + a.getMonth();
    var day = "0" + a.getDate();
    var hour = "0" + a.getHours();
    var min = "0" + a.getMinutes();
    var formatted =
      year +
      "-" +
      month.substr(-2) +
      "-" +
      day.substr(-2) +
      " " +
      hour.substr(-2) +
      ":" +
      min.substr(-2);
    return formatted;
  }