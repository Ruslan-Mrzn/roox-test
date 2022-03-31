import { FC } from 'react'
import style from './UsersList.modules.scss'
import '../../index.css'
import UsersListItem from '../UsersListItem/UsersListItem'
import { IUser } from '../UsersListItem/UsersListItem'


interface IUsersListProps {
  users: Array<IUser>
}
const UsersList:FC<IUsersListProps> = ({users}) => {

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
