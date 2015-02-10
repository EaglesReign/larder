// Get input data for one larder record
var larder = {}, 
labelID, name, quantity, units, remark, dateIn, life;

for(var i = 0; ; ++i) {
  write('Enter label ID: ');
  labelID = readline();

  // Continue until empty label 
  if (labelID == '') break;

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
  if (remark != '')
    larder[i] =  { labelID:labelID, name: name,quantity: quantity, units: units, remark: remark, dateIn: dateIn, life: life }
  else 
   larder[i] =  { labelID:labelID, name: name,quantity: quantity, units: units, dateIn: dateIn, life: life };
// print(JSON.stringify(larder[i]));
  }

print(JSON.stringify(larder));
