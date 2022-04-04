import React from 'react'
import { useLocation } from 'react-router-dom'
import api from '../../utils/Api'
import style from './App.modules.scss'
import Main from '../Main/Main'
import Sorting from '../Sorting/Sorting'
import Preloader from '../Preloader/Preloader'

const App = () => {

  const location = useLocation();

  const [users, setUsers] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true)


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
        setUsers(users)
        setIsLoading(false)
      })
  }, [location])



  return (

    <main className={style.main}>
      <Sorting sortUsersByCity={sortUsersByCity} sortUsersByCompany={sortUsersByCompany}/>
      {
        isLoading ?
        <Preloader />
        :
        <Main users={users} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      }
    </main>
  )
}

export default App
