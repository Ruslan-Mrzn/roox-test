import style from './Page.modules.scss'
import Header from '../Header/Header'
import UsersList from '../UsersList/UsersList'
import UsersListItem from '../UsersListItem/UsersListItem'

const Page = () => {
  return (
    <main className={style.main}>
      <aside className={style.sort}>

      </aside>
      <div className={style.content}>
        <Header/>
        <UsersList/>
      </div>
    </main>
  )
}

export default Page
