import { IUser } from "../UsersListItem/UsersListItem"
import style from '../UserProfile/UserProfile.modules.scss'
import Input from "../Input/Input"
import Comment from "../Comment/Comment"
import Button from "../Button/Button"
import { FC } from "react"

interface IUserProfileProps {
  userFromServer: IUser,
  isFormDisabled: boolean,
}

const UserProfile:FC<IUserProfileProps> = ({userFromServer , isFormDisabled}) => {
  const currentUser = {
    name: userFromServer.name,
    userName: userFromServer.username,
    email: userFromServer.email,
    street: userFromServer.address.street,
    city: userFromServer.address.city,
    zipcode: userFromServer.address.zipcode,
    phone: userFromServer.phone,
    website: userFromServer.website,
  }

  const submitUserData = () => {
    const form:any = document.querySelector('form')
    const userData = new FormData(form)
    const userInfo:any = {}
    for(let pair of userData.entries()) {
      userInfo[pair[0]] = pair[1]
    }
    const result = JSON.stringify(userInfo)
    console.log(result)
  }

  return (
    <form className={style.form} onSubmit={(evt)=> {evt.preventDefault(); submitUserData()}}>
      <fieldset className={style.userData} disabled={isFormDisabled}>
        <Input type={"text"} label={"Name"} value={currentUser.name} name={"name"} />
        <Input type={"text"} label={"User name"} value={currentUser.userName} name={"userName"} />
        <Input type={"email"} label={"E-mail"} value={currentUser.email} name={"email"} />
        <Input type={"text"} label={"Street"} value={currentUser.street} name={"street"} />
        <Input type={"text"} label={"City"} value={currentUser.city} name={"city"} />
        <Input type={"tel"} label={"Zip code"} value={currentUser.zipcode} name={"zipcode"} pattern={'[0-9\-]+'}/>
        <Input type={"tel"} label={"Phone"} value={currentUser.phone} name={"phone"} />
        <Input type={"text"} label={"Website"} value={currentUser.website} name={"website"} />
        <Comment label={"Comment"} name={"userProfileComment"} />
      </fieldset>
      <div className={style.submitButtonWrapper}>
        <Button type={"submit"} text={"Отправить"} bgColor={"green"} disabled={isFormDisabled} />
      </div>
    </form>
  )
}

export default UserProfile
