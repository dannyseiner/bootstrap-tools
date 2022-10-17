const formatter = {
  encode: (date: string) => {
    var m = new Date(date);
    var dateString =
      m.getUTCFullYear() +
      "/" +
      ("0" + (m.getUTCMonth() + 1)).slice(-2) +
      "/" +
      ("0" + m.getUTCDate()).slice(-2) +
      " " +
      ("0" + m.getUTCHours()).slice(-2) +
      ":" +
      ("0" + m.getUTCMinutes()).slice(-2) +
      ":" +
      ("0" + m.getUTCSeconds()).slice(-2);

    return dateString;
  },
  decoed: (data: string) => {},
};

export default formatter;
