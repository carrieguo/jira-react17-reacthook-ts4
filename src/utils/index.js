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
// let time
// let val
// // //请求调用 防抖
// export const useDebounce = (value, delay) => {
//   console.log('useDebounce')

//   if (time) {
//     clearTimeout(time)
//   }
//   time = setTimeout(() => {
//     console.log('setTimeout')
//     val = value
//   }, delay)
//   console.log('return val', val)
//   return val
// }
export const useDebounce = (value, delay) => {
  console.log('useDebounce')
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    //每次再value和delay变化以后，设置一个定时器
    const timeout = setTimeout(() => {
      console.log('setTimeout')
      setDebouncedValue(value)
    }, delay)
    //每次在上一个useEffect处理完成以后再运行
    return () => {
      clearTimeout(timeout)
    }
  }, [value, delay])
  console.log('return val')
  return debouncedValue
}
