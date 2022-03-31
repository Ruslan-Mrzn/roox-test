import { FC } from "react"
import style from '../Button/Button.modules.scss'
import '../../index.css'

interface IButtonProps {
  type: 'button' | 'submit',
  text: string,
  bgColor: 'green' | 'blue',
  onClick?():void
}

const Button: FC<IButtonProps> = ({type, text, bgColor, onClick}) => {
  return (
    <button className={style.button + ` ${bgColor}` + ' button'} type={type} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
