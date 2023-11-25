import { useState, useContext } from "react";
import { signInWithGooglePopup, createUserDocumentFrom, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            resetFields();
        }catch(error){
            switch(error.code){
                case "auth/invalid-login-credentials":
                    alert("Wrong email or password");
                    break;
                case "auth/wrong-password":
                    alert("Incorrect password for this email");
                    break;
                default:
                    console.log(error);
            }
        }
    }
    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFrom(user);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput 
                label="Email" 
                type="email" 
                required 
                onChange={handleChange} 
                name="email" 
                value={email} 
                />

                <FormInput 
                label="Password" 
                type="password" 
                required 
                onChange={handleChange} 
                name="password" 
                value={password} 
                />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;