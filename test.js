const arr = [1,2,4,5,6,7,8]
const objList = {
  a: 2,
  b: 'fds',
  c: 54455
}
;(function(){
  var isArray = function(target){
    return Object.prototype.toString.call(target) === '[object Array]'
  }
  var isObject = function(target) {
    return Object.prototype.toString.call(target) === '[object Object]'
  }

  var each = function (list, interatee, context) {
    if (isArray(list)) {
      for (var i = 0; i < list.length; i++) {
       interatee(list[i], i, list)  
      }
    }

    if (isObject(list)) {
      for (var key in list) {
        if (list.hasOwnProperty(key)) {
           interatee(key, list[key], list)          
        }
      }
    }

    return list
  }

  each(objList,function(el,index){
    console.log(el, index);
  })


}())