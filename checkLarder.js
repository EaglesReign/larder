load('larder.js');
var larder = JSON.parse(LARDER_FILE);

//larder.forEach(larder, function(entry) {
//	print(JSON.stringify(entry));
//});

function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

print(JSON.stringify(filter(larder, function(stuff) {
  return stuff.life > 10 ;
})));

