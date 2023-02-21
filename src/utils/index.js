import { useEffect, useState } from 'react'

export const isFalsy = (value) => (value === 0 ? false : !value)
//在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (obj) => {
  const result = {
    ...obj,
  }
  Object.keys(result).forEach((key) => {
    const val = result[key]
    if (isFalsy(val)) {
      delete result[key]
    }
  })
  return result
}

//custom hook
//每次加载后执行
export const useMount = (callback) => {
  useEffect(() => {
    callback()
  }, [])
  // console.log('useMount')
}

//请求调用 防抖
/*防抖写法一 promise */
// let time
// let val
// export const useDebounce = (value, delay) => {
//   if (time) {
//     clearTimeout(time)
//   }
//   let promise = new Promise(function(resolve, reject) {
//     time = setTimeout(() => {
//       val = value
//       resolve(val);
//     }, delay);
//   });
//   return promise;
// }

/*防抖写法二 useEffect */
export const useDebounce = (value, delay) => {
  console.log('useDebounce', value, delay)
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    //每次再value和delay变化以后，设置一个定时器,更新debouncedValue
    const timeout = setTimeout(() => {
      console.log('setTimeout')
      setDebouncedValue(value)
    }, delay)
    //每次在上一个useEffect处理完成以后再运行
    return () => {
      clearTimeout(timeout)
    }
  }, [value, delay])
  console.log('return val', value, delay)
  return debouncedValue
}
