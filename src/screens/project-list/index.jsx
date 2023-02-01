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

  const debounceParam = useDebounce(param, 2000)
  // console.log('debounceParam', debounceParam)

  useEffect(() => {
    console.log('请求接口了，此时的debounceParam', debounceParam)
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async (response) => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [debounceParam])

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
