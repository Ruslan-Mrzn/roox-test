import React from 'react'
import { useLocation } from 'react-router-dom'
import api from '../../utils/Api'
import style from './App.modules.scss'
import { IUser } from '../UsersListItem/UsersListItem'
import Button from '../Button/Button'
import Main from '../Main/Main'

const App = () => {

  const location = useLocation();

  const [users, setUsers] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});


  const sortUsersByCity = () => {
    let usersCopy = Object.assign([], users);
    usersCopy.sort((a,b) => {
      if(a['address']['city'] > b['address']['city']) return 1
      else return -1
    })
    setUsers(usersCopy)
  }

  const sortUsersByCompany = () => {
    let usersCopy = Object.assign([], users);
    usersCopy.sort((a,b) => {
      if(a['company']['name'] > b['company']['name']) return 1
      else return -1
    })
    setUsers(usersCopy)
  }




  React.useEffect(() => {
    api.getUsers()
      .then(users => {
        console.log(users)
        setUsers(users)
      })
  }, [location])



  return (

    <main className={style.main}>
      <aside className={style.sort}>
        <h2 className={style.subtitle}>Сортировка</h2>
        <div className={style.buttonsWrapper}>
          <Button type={'button'} text={'по городу'} bgColor={'blue'} onClick={sortUsersByCity}/>
          <Button type={'button'} text={'по компании'} bgColor={'blue'} onClick={sortUsersByCompany}  />
        </div>
      </aside>
      <Main users={users} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </main>
  )
}

export default App
