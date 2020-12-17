const repeatString = function(str,num) {
    var newStr="";
    for(i=0;i<num;i++){
newStr+=str;
    }
    if(num<0){
        return 'ERROR'
    }else
    return newStr;

}

module.exports = repeatString
