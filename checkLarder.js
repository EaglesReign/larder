/* 
	checkLarder.js
	Generic filter code for larder project
	Brian Capouch CMP237
	10 Feburary 2015
					*/

load('larder.js');
var larder = JSON.parse(LARDER_FILE);

//larder.forEach(larder, function(entry) {
//	print(JSON.stringify(entry));
//});

// Testing code left in for future reference
// var testDate = new Date(larder[0]["dateIn"]);
// print(testDate.toDateString());

function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

// This finds items that have a life over over 10 days
print(JSON.stringify(filter(larder, function(item) {
  return item.life > 10 ;
})));

