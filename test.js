var arr = [1,'fd',3,4];
var obj = {
  q: 42343,
  c: 'rew',
  f: 'fds'
}

var a = _.map(arr,function(val,index){
 //  console.log(val,index);
  return val+2
})

var c = _.reduce(arr,function(a,b){
  return a+b
})
console.log(c);
