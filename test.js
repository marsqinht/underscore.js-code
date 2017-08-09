// const div = document.getElementsByTagName('div')
const arr = [1, 2, 4, 5, 6, 7, 8]
const objList = {
  a: 2,
  b: 'fds',
  c: 54455
}
console.log(objList)

;(function () {
  // 下划线函数对象
  var __ = function (obj) {
    if (obj instanceof __) return obj
    if (!(this instanceof __)) return new __(obj)
  }

  window.__ = __

  const nativeToString = Object.prototype.toString

  const isArrayLike = (target) => {
    let length = target.length
    let isArrlike = typeof length === 'number' && length >= 0
    return nativeToString.call(target) === '[object Array]' || isArrlike
  }
  __.isObject = (target) => {
    return nativeToString.call(target) === '[object Object]'
  }

  __.isFunction = (target) => {
    return nativeToString.call(target) === '[object Function]'
  }

  __.each = __.foreach = (list, interatee, context) => {
    if (isArrayLike(list)) {
      for (let i = 0, len = list.length; i < len; i++) {
        interatee(list[i], i, list)
      }
    } else {
      let keys = __.keys(list)
      for (let i = 0, len = keys.length; i < len; i++) {
        interatee(keys[i], list[keys[i]], list)
      }
    }
    return list
  }

  __.map = (list, interatee, context) => {
    let keys = !isArrayLike(list) && __.keys(list)
    let length = (keys || list).length
    let results = Array(length)

    // console.log(keys, isArrayLike(list), length)

    for (let i = 0; i < length; i++) {
      let result = keys ? interatee(list[keys[i]], keys[i], list) : interatee(list[i], i, list)
      results[i] = result
    }
    return results
  }

  __.keys = (object) => {
    let arr = []
    if (!__.isObject(object)) return []
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        arr.push(key)
      }
    }
    return arr
  }

  console.log(__.map(objList, function (el, index) {
    return el + 3
  }))
}())
