import { Dispatch, FC, SetStateAction } from "react"
import '../../index.css'
import { IUser } from "../UsersListItem/UsersListItem"
import { Link } from "react-router-dom"
import style from '../ShowMoreLink/ShowMoreLink.modules.scss'

interface IShowMoreLinkProps {
  setCurrentUser: Dispatch<SetStateAction<{}>>,
  currentUser: IUser,
}

const ShowMoreLink:FC<IShowMoreLinkProps> = ({setCurrentUser, currentUser}) => {
  const onClick = () => {
    setCurrentUser(currentUser)
  }
  return <Link className={style.link + ' link'} to='/user' onClick={onClick}>Подробнее</Link>
}

export default ShowMoreLink
