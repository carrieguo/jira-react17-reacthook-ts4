import qs from 'qs'
import * as auth from 'auth-provider'

const apiUrl = process.env.REACT_APP_API_URL
interface Config extends RequestInit {
  token?: string
  data?: object
}
export const http = async (endpoint: string, { data, token, headers, ...customConfig }: Config) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
    },
    ...customConfig,
  }

  if (config.method.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`
  } else {
    config.body = JSON.stringify(data || {})
  }
  //axios 可以直接在返回状态不为2xx的时候抛出异常
  //axios 服务端返回异常，catch可以捕获; fetch不能使用catch捕获服务端返回的异常，只有在网络不通时才会抛出异常
  return window.fetch(`${apiUrl}/${endpoint}`, config).then(async (response) => {
    if (response.status === 401) {
      await auth.logout()
      window.location.reload()
      return Promise.reject({ message: '请重新登录' })
    }
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}
