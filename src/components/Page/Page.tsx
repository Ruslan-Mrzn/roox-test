import style from './Page.modules.scss'
import Header from '../Header/Header'

const Page = () => {
  return (
    <main className={style.main}>
      <aside className={style.sort}>

      </aside>
      <div className={style.content}>
        <Header/>
      </div>
    </main>
  )
}

export default Page
