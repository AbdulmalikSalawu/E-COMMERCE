import * as Yup from 'yup'
        
const passwordRules = /^(?=.*\d)(?=.*[a-z]).{5,}$/;
const numberRules = /^[\d]{10}$/

export const signupSchema = Yup.object().shape({
    category: Yup.string().min(2, "must be at least two characters").required("Required"),
    name: Yup.string().min(2, "must be at least two characters").required("Required"),
    newPrice: Yup.string().min(2, "must be at least two characters").required("Required"),
    oldPrice: Yup.string().min(2, "must be at least two characters").required("Required"),
})
