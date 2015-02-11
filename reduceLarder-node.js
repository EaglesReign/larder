/* 
	reduceLarder.js
	Generic reduce code for larder project
	Brian Capouch CMP237
	10 Feburary 2015
					*/

datafile = require('./larder.js');
var larder = JSON.parse(datafile);

var sum = 0;
// Find the item which has the longest shelf life
console.log(larder.reduce(function(max, cur) {
    return (cur.life > max.life)? cur : max;
}));
