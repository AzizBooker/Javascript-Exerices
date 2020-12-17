const sumAll = function(min,max) {
var sum=0;

if(min<0 || max<0 || typeof min !='number'|| typeof max !='number'){
    return "ERROR";
}
if(min<max){
for(var i=min;i<=max;i++){
    sum+=i;
}
}else{
    for(var i=max;i<=min;i++){
        sum+=i;
    }  
}
return sum;
}

module.exports = sumAll
