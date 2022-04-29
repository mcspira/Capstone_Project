import {
  signInGoogleWithPopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./authentication.styles.scss"

import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component";
import { SignInForm } from "../../components/sign-in-form/sign-in-form.component";

export const Authentication = () => {
  return (
    <div>
      <h1> Sign In Page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
