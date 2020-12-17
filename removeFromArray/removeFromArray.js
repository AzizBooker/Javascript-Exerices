const removeFromArray = function(arr,arg1) {

    for(var i=0;i<arr.length;i++){
    if (checkAgruments(arr[i],arguments)){
       arr.splice(i,1);
       i--;
    }
}
return arr;
   
}
const checkAgruments=function(arrValue,agrument){
for(var i=0;i<agrument.length;i++){
 if(arrValue===agrument[i]){
     return true;
 }
  
}
}

module.exports = removeFromArray
