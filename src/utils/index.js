import { useEffect } from 'react'

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
}

//请求调用 防抖
export const useDebounce = (value, delay) => {
  console.log(value)
  let time
  if (time) {
    clearTimeout(time)
  }
  time = setTimeout(() => {
    return value
  }, delay)
}
