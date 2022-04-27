import { signInGoogleWithPopup, createUserDocumentFromAuth, } from "../../utils/firebase/firebase.utils"

import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component"


export const SignIn = () => {
  const logGoogleUser = async () => {
    const { user }= await signInGoogleWithPopup()
    const userDocRef = await createUserDocumentFromAuth( user )
  }

  return (
    <div>
      <h1> Sign In Page </h1>
      <button onClick={logGoogleUser}>
        Sign In With Google Popup
      </button>
      <SignUpForm />
    </div>
  )
}