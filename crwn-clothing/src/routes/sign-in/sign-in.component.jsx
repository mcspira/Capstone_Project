import { signInGoogleWithPopup } from "../../utils/firebase/firebase.utils"

export const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInGoogleWithPopup()
    console.log(response)
  }

  return (
    <div>
      <h1> Sign In Page </h1>
      <button onClick={logGoogleUser}>
        Sign In With Google Popup
      </button>
    </div>
  )
}