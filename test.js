var arr = [1,'fd',3,4]

var a = _.map(arr,function(val,index){
  console.log(val,index);
  return val+2
})

console.log(a);
