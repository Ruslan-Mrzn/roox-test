import React from 'react'
import style from './UsersList.modules.scss'
import api from '../../utils/Api'

const UsersList = () => {

  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    api.getUsers()
      .then(users => {
        console.log(users)
        setUsers(users)
      })
  }, [])

  return (
    <ul className={style.list}>
      {users.map(user => {

      })}
    </ul>
  )
}

export default UsersList
