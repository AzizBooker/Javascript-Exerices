const ftoc = function(temp) {
 celsius=(((temp-32)*5)/9);
 celsius=Math.round(celsius*10)/10;
 return celsius;
}

const ctof = function(temp) {
fahrenheit=(temp*1.8)+32;
fahrenheit=Math.round(fahrenheit*10)/10;
return fahrenheit;
}

module.exports = {
  ftoc,
  ctof
}
