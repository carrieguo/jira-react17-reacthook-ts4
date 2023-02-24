import React from 'react'
interface User {
  id: string
  name: string
  email: string
  title: string
  organization: string
}
interface project {
  id: string
  name: string
  personId: string
}
interface ListProps {
  list: project[]
  users: User[]
}
export const List = ({ list, users }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>

      <tbody>
        {list.map((project: project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>{users.find((user) => user.id === project.personId)?.name || '未知'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
