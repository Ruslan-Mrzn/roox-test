import React from 'react'
import style from './UsersList.modules.scss'
import '../../index.css'
import api from '../../utils/Api'
import UsersListItem from '../UsersListItem/UsersListItem'
import { IUser } from '../UsersListItem/UsersListItem'
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
      {users.map((userFromServer: IUser) => {
        const user = {
          name: userFromServer.name,
          city: userFromServer.address.city,
          company: userFromServer.company.name,
        }
        return (
          <li className={style.listItem} key={userFromServer.id}>
            <UsersListItem user={user} />
            <a className={style.link + ' link'} href={`/user/${userFromServer.id}`}>Подробнее</a>
          </li>
        )
      } )}
    </ul>
  )
}

export default UsersList
