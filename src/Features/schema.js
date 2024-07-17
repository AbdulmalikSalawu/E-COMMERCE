import * as Yup from 'yup'
        
const passwordRules = /^(?=.*\d)(?=.*[a-z]).{5,}$/;
const numberRules = /^[\d]{10}$/

export const signupSchema = Yup.object().shape({
    name: Yup.string().min(2, "must be at least two characters").required("Required"),
    email: Yup.string().email("Please enter a valid email").required("Required"),
    password: Yup
    .string()
    .min(6)
    .matches(passwordRules, "must include a letter and a number")
    .required("Required"),
})
