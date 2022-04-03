import { Dispatch, FC, SetStateAction } from 'react'
import style from './UsersList.modules.scss'
import UsersListItem from '../UsersListItem/UsersListItem'
import ShowMoreLink from '../ShowMoreLink/ShowMoreLink'
import { IUser } from '../UsersListItem/UsersListItem'




interface IUsersListProps {
  users: IUser[]|[]
  setCurrentUser: Dispatch<SetStateAction<{}>>,
}
const UsersList:FC<IUsersListProps> = ({users , setCurrentUser}) => {

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
            <div className={style.link}>
              <ShowMoreLink setCurrentUser={setCurrentUser} currentUser={userFromServer} />
            </div>
          </li>
        )
      } )}
    </ul>
  )
}

export default UsersList
