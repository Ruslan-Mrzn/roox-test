import { FC } from 'react';
import style from './UsersListItem.modules.scss'

export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  address: {
    city: string,
    street: string,
    zipcode: string,
  },
  company: {
    name: string,
  },
  comment?: string,
}

interface IUserListItemProps {
  user: {
    name: string,
    city: string,
    company: string,
  }
}

const UsersListItem:FC<IUserListItemProps> = ({user}) => {
  return (
    <ul className={style.info}>
      <li className={style.infoRow}>
        <span className={style.infoСharacteristic}>ФИО:</span>
        <span className={style.infoValue}>{user.name}</span>
      </li>

      <li className={style.infoRow}>
        <span className={style.infoСharacteristic}>город:</span>
        <span className={style.infoValue}>{user.city}</span>
      </li>

      <li className={style.infoRow}>
        <span className={style.infoСharacteristic}>компания:</span>
        <span className={style.infoValue}>{user.company}</span>
      </li>
    </ul>
  )
}

export default UsersListItem
