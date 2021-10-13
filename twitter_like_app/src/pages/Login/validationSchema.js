import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  username: Yup.string().email('please enter valid email').required('Required'),
  password: Yup.string().required("Required")
});

export default validationSchema;