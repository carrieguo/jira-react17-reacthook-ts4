export const isFalsy = (value) => (value === 0 ? false : !value)
//在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (obj) => {
  const result = { ...obj }
  Object.keys(result).forEach((key) => {
    const val = result[key]
    if (isFalsy(val)) {
      delete result[key]
    }
  })
  return result
}
