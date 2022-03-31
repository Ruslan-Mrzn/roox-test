import React from 'react'
import api from '../../utils/Api'
import style from './App.modules.scss'
import Header from '../Header/Header'
import UsersList from '../UsersList/UsersList'
import Button from '../Button/Button'

const App = () => {

  const [users, setUsers] = React.useState([])

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
  }, [])



  return (

    <main className={style.main}>
      <aside className={style.sort}>
        <h2 className={style.subtitle}>Сортировка</h2>
        <div className={style.buttonsWrapper}>
          <Button type={'button'} text={'по городу'} bgColor={'blue'} onClick={sortUsersByCity}/>
          <Button type={'button'} text={'по компании'} bgColor={'blue'} onClick={sortUsersByCompany}  />
        </div>

      </aside>
      <div className={style.content}>
        <Header/>
        <UsersList users={users}/>
      </div>
    </main>
  )
}

export default App
