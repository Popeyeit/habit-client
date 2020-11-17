import * as Yup from 'yup';
import TValue from '../../interfaces/auth.type';
const SignupSchema = (type: TValue) => {
  const res =
    type === 'Регистрация'
      ? Yup.object().shape({
          nickName: Yup.string()
            .min(2, 'Too Short, must 2+!')
            .max(50, 'Too Long!')
            .required('Required'),
          password: Yup.string()
            .required('Required')
            .min(6, 'Too Short, must 6+!')
            .max(50, 'Too Long!')
            .matches(
              /^(?=.*[A-Z])(?=.*[0-9])/,
              'Must one Uppercase, One Number',
            ),

          email: Yup.string().email('Invalid email').required('Required'),
        })
      : Yup.object().shape({
          password: Yup.string()
            .required('Required')
            .min(6, 'Too Short, must 6+!')
            .max(50, 'Too Long!')
            .matches(
              /^(?=.*[A-Z])(?=.*[0-9])/,
              'Must one Uppercase, One Number',
            ),

          email: Yup.string().email('Invalid email').required('Required'),
        });

  return res;
};
export default SignupSchema;
