import { useEffect, useState } from 'react'

export const isFalsy = (value: unknown) => (value === 0 ? false : !value)
//在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (obj: object) => {
  const result = {
    ...obj,
  }
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const val = result[key]
    if (isFalsy(val)) {
      // @ts-ignore
      delete result[key]
    }
  })
  return result
}

//custom hook
//每次加载后执行
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback()
  }, [])
  // console.log('useMount')
}

//请求调用 防抖
/*防抖写法一 promise */
// let time :any
// let val
// export const useDebounce = (value:any, delay?: number) => {
//   if (time) {
//     clearTimeout(time)
//   }
//   const promise = new Promise(function(resolve, reject) {
//     time = setTimeout(() => {
//       val = value
//       resolve(val);
//     }, delay);
//   });
//   return promise;
// }

/*防抖写法二 useEffect */
// ts ?表示可以不传
//后面用泛型规范类型
export const useDebounce = (value: unknown, delay?: number): any => {
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
