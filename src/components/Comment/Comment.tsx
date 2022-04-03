import { FC } from "react"
import style from '../Comment/Comment.modules.scss'

interface ICommentProps {
  label: string,
  name: string
}

const Comment:FC<ICommentProps> = ({label, name}) => {
  return (
    <label className={style.block}>
      <span className={style.label}>{label}</span>
      <textarea className={style.textArea} name={`${name}`}></textarea>
    </label>
  )
}

export default Comment
