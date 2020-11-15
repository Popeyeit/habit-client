import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short, must 2+!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .required('Required')
    .min(6, 'Too Short, must 6+!')
    .max(50, 'Too Long!')
    .matches(/^(?=.*[A-Z])(?=.*[0-9])/, 'Must one Uppercase, One Number'),

  email: Yup.string().email('Invalid email').required('Required'),
});
export default SignupSchema;
