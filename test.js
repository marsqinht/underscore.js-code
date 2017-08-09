const div = document.getElementsByTagName('div')
const arr = [1,2,4,5,6,7,8]
const objList = {
  a: 2,
  b: 'fds',
  c: 54455
}

;(function(){
  const isArrayLike = (target) => {
    let length = target.length
    return Object.prototype.toString.call(target) === '[object Array]' || typeof length === 'number' && length >= 0
  }
  const isObject = function(target) {
    return Object.prototype.toString.call(target) === '[object Object]'
  }


  const each = (list, interatee, context) => {
    if (isArrayLike(list)) {
      for (var i = 0, len = list.length; i < len; i++) {
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

  each(arr,function(el,index){
    console.log(el, index);
  })


}())