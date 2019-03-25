var gallon=parseFloat(prompt("Enter the number of gallons to convert in liter: "));

var calculG=function(gallon){
  return gallon*3.785412;
};

var resultG=calculG(gallon);
alert("The conversion in liter of "+gallon+ " gallons is "+ resultG + " liters.")


var liter=parseFloat(prompt("Enter the number of liters to convert in gallon: "));

var calculL=function(liter){
  return liter * 0.264172;
};

var resultL=calculL(liter);
alert("The conversion in gallon of "+liter+ " liter is "+ resultL + " gallon.")
