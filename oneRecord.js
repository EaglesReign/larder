// Get input data for one larder record
var labelID, name, quantity, units, remark, dateIn, life;

  write('Enter label ID: ');
  labelID = readline();
  write('Enter name: ');
  name = readline();
  write('Quantity: ');
  quantity = readline();
  write('Units: ');
  units = readline();
  write('Remark: ');
  remark = readline();
  write('Date in: ');
  dateIn = readline();
  write('Life: ');
  life = readline();
write('{[ "labelID": "' + labelID + '", "name": "' + name + '", "quantity": ' + quantity + ', "units": "' + units +'", ');
if (remark != '')
  write('"remark": "' + remark + '", '); 
print('"dateIn": "' + dateIn + '" , "life": ' + life + ' ] }');
