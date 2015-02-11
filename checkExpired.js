load('larder.js');
var larder = JSON.parse(LARDER_FILE);

//larder.forEach(larder, function(entry) {
//	print(JSON.stringify(entry));
//});

// var testDate = new Date(larder[0]["dateIn"]);
// print(testDate.toDateString());

// Right out of the book!
function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

// Next two lines removed from anonymous function below
// print(((new Date(item.dateIn)).getTime()) + (item.life * 86400000));
// print((new Date()).getTime());

// Right out of the book except for test part
print(JSON.stringify(filter(larder, function(item) {
  return (((new Date(item.dateIn)).getTime()) + (item.life * 86400000) < (new Date().getTime())) ;
})));

