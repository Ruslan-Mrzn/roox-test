import { FC } from "react"
import style from '../Input/Input.modules.scss'

interface IInputProps {
  type: 'text' | 'tel' | 'number' | 'email',
  label: string,
  value: string|number,
  name: string,
  pattern?: string,
}

const Input:FC<IInputProps> = ({type, label, value, name, pattern}) => {
  return (
    <label className={style.block}>
      <span className={style.label}>{label}</span>
      <input className={style.input} name={`${name}`} type={`${type}`} required defaultValue={`${value}`} pattern={pattern}/>
    </label>
  )

}

export default Input
