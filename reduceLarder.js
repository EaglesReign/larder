/* 
	reduceLarder.js
	Generic reduce code for larder project
	Brian Capouch CMP237
	10 Feburary 2015
					*/

load('larder.js');
var larder = JSON.parse(LARDER_FILE);

var sum = 0;
// Find the item which has the longest shelf life
print(JSON.stringify(larder.reduce(function(max, cur) {
    return (cur.life > max.life)? cur : max;
})));
