import { useState } from "react";
import { useDispatch } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";

const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {

    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            dispatch(emailSignInStart(email, password));
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
        dispatch(googleSignInStart());
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <SignInContainer>
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
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
}

export default SignInForm;