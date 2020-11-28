import * as Yup from 'yup';

const ValidateSchema = Yup.object().shape({
  title: Yup.string()
    .required('Required')
    .min(6, 'Too Short, must 6+!')
    .max(50, 'Too Long!')
    .required('Required'),

  startDate: Yup.date().required('Required'),
  repeats: Yup.string().required('Required'),
});

export default ValidateSchema;
