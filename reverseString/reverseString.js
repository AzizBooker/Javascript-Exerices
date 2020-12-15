const reverseString = function(str2) {
var str=str2;
var newStr='';
var i;
for(i=str.length;i>=0;i--){
 newStr+=str.charAt(i);
}
return newStr;
}

module.exports = reverseString

