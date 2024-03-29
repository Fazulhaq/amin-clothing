import { AuthError, AuthErrorCodes } from "firebase/auth";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { signUpStart } from "../../store/user/user.action";
import { SignUpConainer } from "./sign-up-form.styles";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    const dispatch = useDispatch();

    const resetFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("passwords do not match!");
            return;
        }
        try{
            dispatch(signUpStart(email, password, displayName));
            resetFields();
        }catch(error){
            if((error as AuthError).code === AuthErrorCodes.WEAK_PASSWORD){
                alert("Your password is weak, please provide password more than 6 character.");
            } else if((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS){
                alert("Cannot create user, email already in use");
            }else{
                console.log("user creation encountered an error", error);
            }
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }
    return (
        <SignUpConainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput 
                label="Display Name" 
                type="text" 
                required 
                onChange={handleChange} 
                name="displayName" 
                value={displayName} 
                />

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

                <FormInput 
                label="Confirm Password" 
                type="password" 
                required 
                onChange={handleChange} 
                name="confirmPassword" 
                value={confirmPassword} 
                />

                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpConainer>
    );
}

export default SignUpForm;