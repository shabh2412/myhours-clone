import { Box, Button, Input, Heading } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import { app } from "../../../firebase"
// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
// import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from "react-redux";
// import { RegisterOtpVerificationCheck } from "../../../Store/Register/action"

const FirebasePhone = () => {

    // let [ stat,setStat ] = useState<any>({})
    // const navigate = useNavigate()
    // const state = useSelector((state: any)=>state.register)
    // const dispatch = useDispatch()
    
    // let handleChange = (e : any) : any => {
        
    //     const { name,value } = e.target

    //     setStat({
    //         ...stat,
    //         [name] : value
    //     })

    // }

    // useEffect(()=>{
    //     if(state.otpVerify)
    //     {
    //         navigate("/login")
    //     }
    // },[state.otpVerify])

    // let configureCaptcha = () => {

    //     const auth = getAuth()
    //     window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    //         'size': 'invisible',
    //         'callback': (response  : any) => {
    //           // reCAPTCHA solved, allow signInWithPhoneNumber.
    //           onSignInSubmit();
    //         },
    //         defaultCountry : "IN"
    //       }, auth);
    // }

    // let onSignInSubmit = () => {

    //     configureCaptcha()
    //     const phoneNumber : any = "+91"+stat.mobile
    //     console.log(phoneNumber);
    //     const appVerifier = window.recaptchaVerifier

    //     const auth = getAuth();
    //     signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    //         .then((confirmationResult) => {
    //         // SMS sent. Prompt user to type the code from the message, then sign the
    //         // user in with confirmationResult.confirm(code).
    //         window.confirmationResult = confirmationResult
    //         console.log('otp has been sent');
    //         // ...
    //     }).catch((error) => {
    //         // Error; SMS not sent
    //         // ...
    //         console.log('Sms Not sent');
    //     });
    
    // }
    
    // let onSubmitOTP = () => {
    //     const code = stat.otp
    //     window.confirmationResult.confirm(code).then((result : any) => {
    //         // User signed in successfully.
    //         const user = result.user;
    //         console.log(JSON.stringify(user));
    //         alert('Verified')
    //         dispatch(RegisterOtpVerificationCheck(true))
    //         // ...
    //     }).catch((error : any) => {
    //         // User couldn't sign in (bad verification code?)
    //         // ...
    //         alert('bad verification code')
    //         dispatch(RegisterOtpVerificationCheck(false))
    //     });
    // }


    return (
        <Box>
            <div id="sign-in-button"></div>
            <Input type="number" name='mobile' />
            <Button >Submit</Button>
            <Heading> OTP </Heading>
            <Input type="number" name='otp' />
            <Button>Submit</Button>
        </Box>
    )
}

export default FirebasePhone