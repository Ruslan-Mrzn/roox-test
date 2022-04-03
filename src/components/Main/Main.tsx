import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { IUser } from '../UsersListItem/UsersListItem'
import UsersList from '../UsersList/UsersList'
import UserProfile from '../UserProfile/UserProfile'
import Button from '../Button/Button'

import style from '../Main/Main.modules.scss'
import React from 'react'


interface IMainProps {
  users: IUser[],
  currentUser: IUser|any,
  setCurrentUser: Dispatch<SetStateAction<{}>>,
}

const Main:FC<IMainProps> = ({users, currentUser, setCurrentUser}) => {
  const location = useLocation();

  const [isFormDisabled, setIsFormDisabled] = React.useState(true);

  const editForm = () => {
    setIsFormDisabled(false)
  }

  React.useEffect(() => setIsFormDisabled(true),[location])

  return (
    <div className={style.main}>
      <div className={style.header}>
        <h2 className={style.title}>
          {
            location.pathname === '/' && 'Список пользователей'
          }

          {
            location.pathname === '/user' && 'Профиль пользователя'
          }
        </h2>
        {
          location.pathname === '/user' && <Button type={'button'} text={'Редактировать'} bgColor={'blue'} onClick={editForm}/>
        }
      </div>

        {
          location.pathname === '/' && <UsersList users={users} setCurrentUser={setCurrentUser}/>
        }
        {
          location.pathname === '/user' && <UserProfile userFromServer={currentUser} isFormDisabled={isFormDisabled} />
        }
        {
          location.pathname === '/' && <p>Найдено {users.length} пользователей</p>
        }

      </div>
  )
}

export default Main
