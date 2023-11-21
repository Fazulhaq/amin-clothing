import { signInWithGooglePopup, createUserDocumentFrom } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFrom(user);
    }
    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}> Sign in with Google popup </button>
        </div>
    );
}

export default SignIn;