import { List } from './list'
import { SearchPanel } from './search-panel'
import React, { useEffect, useState } from 'react'
import { cleanObject, useMount, useDebounce } from 'utils'
import qs from 'qs'

const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])

  // useEffect的检测项参数只能是state 监听state以外的变量他改变了的话页面不会从新渲染，你如果调用setState改变值的话，他页面会从新渲染的
  /*写法一：promise
  const [debouncedValue, setDebouncedValue] = useState(param)
  
  useDebounce(param, 2000).then(params=>{
    setDebouncedValue(params)
    console.log(debouncedValue)
  })*/

  // console.log('debounceParam', debounceParam)

  /*写法二 useeffect*/
  //debounceParam 是state
  let debouncedValue = useDebounce(param, 2000)

  useEffect(() => {
    console.log('请求接口了，此时的debounceParam', debouncedValue)
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedValue))}`).then(async (response) => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [debouncedValue])

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  })
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
      <List list={list} users={users}></List>
    </div>
  )
}
