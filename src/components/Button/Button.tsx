import { FC } from "react"
import style from '../Button/Button.modules.scss'
import '../../index.css'

interface IButtonProps {
  type: 'button' | 'submit',
  text: string,
  bgColor: 'green' | 'blue',
  onClick?():void,
  disabled?: boolean,
}

const Button: FC<IButtonProps> = ({type, text, bgColor, onClick, disabled}) => {
  return (
    <button className={style.button + ` ${bgColor}` + ' button'} type={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button
