const caesar = function(str,shift) {
var cipher=""
var unicode=0
for(var i=0;i<str.length;i++){
    unicode=str.charCodeAt(i)
    cipher+=String.fromCharCode(unicode+shift)
}
return cipher;

}

module.exports = caesar
