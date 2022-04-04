import { FC } from "react"
import Button from "../Button/Button"
import style from '../Sorting/Sorting.modules.scss'

interface ISortingProps {
  sortUsersByCity():void,
  sortUsersByCompany():void
}

const Sorting:FC<ISortingProps> = ({sortUsersByCity, sortUsersByCompany}) => {
  return (
    <aside className={style.sort}>
      <h2 className={style.subtitle}>Сортировка</h2>
      <div className={style.buttonsWrapper}>
        <Button type={'button'} text={'по городу'} bgColor={'blue'} onClick={sortUsersByCity} />
        <Button type={'button'} text={'по компании'} bgColor={'blue'} onClick={sortUsersByCompany}  />
      </div>
    </aside>
  )
}

export default Sorting
