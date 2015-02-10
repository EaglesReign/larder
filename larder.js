var LARDER = "[\n  " + [
{ "labelID": "23", "name": "Futz", "quantity": 2, "units": "ea", "dateIn": "2/10/15", "life": 5  },
{ "labelID": "24", "name": "WW flour", "quantity": 11, "units": "lb", "dateIn": "2/1/15", "life": 45  },
].join(",\n  ") + "\n]";

// This makes sure the data is exported in node.js
// `require(./path/to/ancestry.js)` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = LARDER_FILE ;
